import { isNil } from 'ramda';

import api from '@/api';
import TrackDetail from '@/components/track-detail/track-detail.vue';

import { addAndRemoveFavorite, allFavorites } from '@/store/modules/favorites/utils';
import { FETCH_FAVORITES } from '@/store/modules/favorites/types';
import { mapFavoriteTrack } from '@/utils/mapFavoritesToList'

export default {
  name: 'Detail',
  components: {
    TrackDetail,
  },
  data() {
    return {
      snackbar: false,
      track() {
        return {};
      },
      trackId: 0,
    };
  },
  computed: {
    ...allFavorites(),
  },
  methods: {
    ...addAndRemoveFavorite(),
    async fetchData() {
      // Fetch favorites from store
      this.$store.dispatch(FETCH_FAVORITES);

      this.trackId = Number(this.$route.params.id);
      this.snackbar = false;
      if (isNaN(this.trackId)) {
        this.snackbar = true;
        return;
      }
      this.track = await api.lookup(this.trackId);
      if (isNil(this.track)) {
        this.track = {};
        this.snackbar = true;
      }
    },
    updateTrack() {
      this.track = mapFavoriteTrack(this.favorites, this.track);
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route() {
      this.track = {};
      this.fetchData();
    },
    favorites: {
      handler() {
        this.updateTrack();
      },
      deep: true,
    },
  },
};
