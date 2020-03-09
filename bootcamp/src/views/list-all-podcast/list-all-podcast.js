import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';

export default {
  name: 'ListAllPodcast',
  components: {
    TrackList,
  },
  data() {
    return {
      podcasts: [],
      searchTerm: '',
    };
  },
  computed: {
    podcastList() {
      return filterBySearchTerm(this.searchTerm, this.podcasts);
    },
  },
  async mounted() {
    this.podcasts = await api.search(this.$route.params.category || getRandomPodcastCategory());
    this.podcastListFiltered = [...this.podcastList];
  },
};
