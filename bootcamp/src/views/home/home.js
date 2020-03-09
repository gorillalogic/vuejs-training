import { head } from 'ramda';

import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { SEARCH_MOCK_DATA } from '@/api/constants';
import TrackDetail from '@/components/track-detail/track-detail.vue';
import TrackList from '@/components/track-list/track-list.vue';

export default {
  name: 'Home',
  components: {
    TrackDetail,
    TrackList,
  },
  data() {
    return {
      podcasts() {
        return [];
      },
      podcastSearch: '',
    };
  },
  computed: {
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcasts);
    },
    track() {
      return head(this.podcasts) || {};
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
