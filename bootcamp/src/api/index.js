/* eslint-disable no-underscore-dangle */

import {
  any,
  append,
  assocPath,
  compose,
  filter,
  head,
  ifElse,
  isEmpty,
  isNil,
  map,
  omit,
  pathEq,
  prop,
  propEq,
  propOr,
  reject,
  take,
  uniq,
} from 'ramda';
import { denormalize, normalize } from 'normalizr';
import { v4 as uuidv4 } from 'uuid';
import deepmerge from 'deepmerge';
import queryString from 'query-string';

import { favoritesSchema, reviewSchema } from './normalizr';
import {
  API_ENDPOINT,
  DEFAULT_STATE,
  KeyNames,
  LOOKUP_MOCK_DATA,
  SEARCH_MOCK_DATA,
} from './constants';
import {
  delay,
  isNotValidSearchOptions,
  isStreamable,
  readLocalStorage,
  saveLocalStorage,
  validateEmptyKey,
} from './utils';

/**
 * @typedef Reviews
 * @type {array}
 * @property {string} 0 - attribute name.
 * @property {string} 1 - value to set.
 */

class Api {
  constructor() {
    this._state = readLocalStorage(KeyNames.state, DEFAULT_STATE);

    this.mapMetaProperty = map(track =>
      assocPath(['meta', 'favoriteId'], this.favoriteId(track), track),
    );
  }

  /**
   * Search podcasts given a term
   * @param  {String} term - Term to search
   * @param  {Object} options - Query options
   * @param  {Boolean} isMocked - Mock data to avoid API faults
   * @link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api#searchexamples
   * @return {Object} results given by API
   */
  async search(term, options = {}, isMocked) {
    const defaultOptions = {
      limit: 30,
      media: 'music',
    };

    const opts = { ...defaultOptions, ...options, term };

    if (isNotValidSearchOptions(opts)) {
      throw new Error('Search "options" parameter are not valid');
    }

    const { limit } = opts;

    if (limit < 1 || limit > 200) {
      throw new Error('limit outside paramaters');
    }

    let results = [];

    if (isMocked) {
      console.warn('Search data was mocked!');
      results = SEARCH_MOCK_DATA;
    } else {
      const parsedQueryString = queryString.stringify(opts);
      const response = await fetch(`${API_ENDPOINT}/search?${parsedQueryString}`);
      ({ results } = await response.json());
    }

    return compose(
      this.mapMetaProperty,
      isStreamable,
      take(limit), // Helpful when data is mocked
    )(results);
  }

  /**
   * Lookup request to search for content in the stores based on iTunes
   * @param  {Int} trackId - id to search
   * @param  {Boolean} isMocked - Mock data to avoid API faults
   * @link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api#lookup
   * @return {Object} results given by API
   */
  async lookup(trackId, isMocked) {
    if (isMocked) {
      console.warn('Lookup data was mocked!');
      return LOOKUP_MOCK_DATA;
    }

    const response = await fetch(`${API_ENDPOINT}/lookup?id=${trackId}`);
    const { results = [] } = await response.json();

    return compose(
      head,
      ifElse(isNil, () => ({}), this.mapMetaProperty),
      filter(propEq('trackId', trackId)),
    )(results);
  }

  /**
   * Get favorites list
   * @return {Track[]} Favorites list
   */
  getFavorites() {
    return delay(denormalize(this.state.favorites, [favoritesSchema], this.entities));
  }

  /**
   * Returns the first n elements of favorites tracks
   * * @param  {} n - elements to take
   */
  async getFavoritesTracks(n) {
    const favorites = await this.getFavorites();

    return compose(take(n || Infinity), this.mapMetaProperty, map(prop('track')))(favorites);
  }

  /**
   * Add favorite
   * @param  {} track - track entity
   * @param  {} n - elements to take
   * @return {number[]} Favorites list
   */
  async addFavorite(track, n) {
    if (isNil(track) || isEmpty(track) || isNil(track.trackId)) {
      throw new Error('Wrong track entity');
    }

    const favorites = await this.getFavorites();

    if (any(pathEq(['track', 'trackId'], track.trackId), favorites)) {
      throw new Error('track is already added');
    }

    const favorite = {
      id: uuidv4(), // side effect, this is for simplicity
      track,
    };

    const { result, entities } = normalize(favorite, favoritesSchema);

    this.state = {
      ...deepmerge(this.state, { entities }),
      favorites: compose(uniq, append(result))(this.state.favorites),
    };

    return this.getFavoritesTracks(n);
  }

  /**
   * Remove favorites id
   * @param  {} id - Id to remove
   * @param  {} n - elements to take
   * @return {Track[]} Favorites list
   */
  removeFavorite(id, n) {
    validateEmptyKey(id, 'id');

    const favorites = reject(favoriteId => favoriteId === id, this.state.favorites);

    this.state = {
      ...this.state,
      entities: this.removeEntityById('favorites', id),
      favorites,
    };

    return this.getFavoritesTracks(n);
  }

  /**
   * Get reviews list
   * @return {Reviews} Reviews list
   */
  getReviews() {
    return denormalize(this.state.reviews, [reviewSchema], this.entities) || [];
  }

  /**
   * Get reviews list by track id
   * @param {String|Number} trackId - Podcast Id
   * @return {Reviews} Reviews list
   */
  getReviewsByTrackId(trackId) {
    validateEmptyKey(trackId, 'trackId');

    return compose(
      map(omit(['track'])),
      filter(pathEq(['track', 'trackId'], trackId)),
      this.getReviews.bind(this),
    )();
  }

  /**
   * Add podcast's review
   * @param  {Object} options
   * @param  {String} options.comment - Review's comment
   * @param  {String} options.podcastId  - Podcast Id where the review belongs
   * @param  {Number} options.stars - Rating given by the user
   * @return {Reviews} Reviews list
   */
  addReview({ comment = null, track, stars }) {
    validateEmptyKey(track, 'track');
    validateEmptyKey(stars, 'stars');

    if (isEmpty(track) || isNil(track.trackId)) {
      throw new Error('Wrong track entity');
    }

    const id = uuidv4(); // side effect, this is for simplicity

    const review = {
      id,
      comment,
      track,
      stars,
    };

    const { entities } = normalize(review, reviewSchema);

    const reviews = compose(uniq, append(id))(this.state.reviews);

    this.state = {
      ...deepmerge(this.state, { entities }),
      reviews,
    };

    return reviews;
  }

  /**
   * Removes a podcast's review
   * @param  {String} id - ID to be removed
   * @return {Reviews} Reviews list
   */
  removeReview(id) {
    validateEmptyKey(id, 'id');

    const reviews = reject(reviewId => reviewId === id, this.state.reviews);

    this.state = {
      ...this.state,
      entities: this.removeEntityById('reviews', id),
      reviews,
    };

    return reviews;
  }

  set state(state) {
    this._state = state;
    saveLocalStorage(KeyNames.state, state);
  }

  get state() {
    return this._state;
  }

  get entities() {
    return this._state.entities;
  }

  removeEntityById(entity, id) {
    return {
      ...this.state.entities,
      [entity]: omit([id], this.state.entities[entity]),
    };
  }

  favoriteId(track) {
    return compose(
      propOr(null, 'id'),
      head,
      filter(pathEq(['track', 'trackId'], prop('trackId', track))),
    )(denormalize(this.state.favorites, [favoritesSchema], this.entities));
  }
}

const api = new Api();

if (process.browser && process.ENV !== 'production') {
  window.api = api;
}

export default api;
