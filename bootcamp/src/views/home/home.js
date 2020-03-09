import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { SEARCH_MOCK_DATA } from '@/api/constants';
import TrackList from '@/components/track-list/track-list.vue';

export default {
  name: 'Home',
  components: {
    TrackList,
  },
  data() {
    return {
      podcasts: [],
      podcastSearch: '',
    };
  },
  computed: {
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcasts);
    },
  },
  methods: {
    addFavorite(track) {
      console.log('addFavorite -> track', track);
    },
    removeFavorite(track) {
      console.log('removeFavorite -> track', track);
    },
  },
  mounted() {
    this.podcasts = SEARCH_MOCK_DATA;
  },
};
