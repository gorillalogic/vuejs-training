import api from '@/api';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FETCH_FAVORITES,
  SET_FAVORITES,
  ALL_FAVORITES,
  ALL_FAVORITES_LIMIT,
} from './types';

const initialState = {
  favorites: [],
};
const getters = {
  [ALL_FAVORITES]: state => state.favorites.map(favorite => ({ ...favorite, favoriteId: true })),
  [ALL_FAVORITES_LIMIT]: state => limit => {
    const favorites = state.favorites
      .map(favorite => ({ ...favorite, favoriteId: true }))
      .slice(0, limit);
    return favorites;
  },
};
const actions = {
  async [FETCH_FAVORITES]({ commit }) {
    const favorites = await api.getFavoritesTracks();
    commit(SET_FAVORITES, favorites);
  },
  async [ADD_FAVORITE]({ commit }, favorite) {
    const favorites = await api.addFavorite(favorite);
    commit(SET_FAVORITES, favorites);
  },
  async [REMOVE_FAVORITE]({ commit }, favorite) {
    const favorites = await api.removeFavorite(favorite.meta.favoriteId);
    commit(SET_FAVORITES, favorites);
  },
};
const mutations = {
  [SET_FAVORITES]: (state, favorites) => {
    state.favorites = favorites;
  },
  [ADD_FAVORITE]: (state, favorite) => {
    state.favorites = [...state.favorites, favorite];
  },
  [REMOVE_FAVORITE]: (state, favorite) => {
    state.favorites = state.favorites.filter(
      currentFavorite => currentFavorite.trackId !== favorite.trackId,
    );
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
