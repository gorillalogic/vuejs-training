import { mapGetters, mapActions } from 'vuex';
import { ADD_FAVORITE, REMOVE_FAVORITE, ALL_FAVORITES } from '../types';

export const addAndRemove = () => ({
  ...mapActions({ addFavorite: ADD_FAVORITE, removeFavorite: REMOVE_FAVORITE }),
});

export const allFavorites = () => ({
  ...mapGetters({ favorites: ALL_FAVORITES }),
});
