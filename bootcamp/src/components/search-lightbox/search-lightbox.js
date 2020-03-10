import api from '@/api';
import SearchInput from '@/components/search-input/search-input.vue';
import TrackList from '@/components/track-list/track-list.vue';

import { addAndRemove, allFavorites } from '@/store/modules/favorites/utils';
import { mapFavoritesToList } from '@/utils/mapFavoritesToList';

export default {
  name: 'SearchLightbox',
  components: {
    SearchInput,
    TrackList,
  },
  data() {
    return {
      dialog: false,
      loading: false,
      results: [],
    };
  },
  methods: {
    ...addAndRemove(),
    async searchTracks(term) {
      if (!term) {
        return;
      }

      this.loading = true;
      const results = await api.search(term);
      this.results = results;
      this.dialog = results.length > 0;
      this.loading = false;
    },
    updatePodcastList() {
      this.results = mapFavoritesToList(this.favorites, this.results);
    },
  },
  computed: {
    ...allFavorites(),
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.loading = false;
        this.results = [];
        this.$refs.searchInput.reset();
      }
    },
    $route() {
      this.dialog = false;
    },
    favorites: {
      handler() {
        this.updatePodcastList();
      },
      deep: true,
    },
  },
};
