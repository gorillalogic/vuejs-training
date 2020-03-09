import api from '@/api';
import SearchInput from '@/components/search-input/search-input.vue';
import TrackList from '@/components/track-list/track-list.vue';

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
  },
};
