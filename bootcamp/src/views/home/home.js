import { assocPath, head, map } from 'ramda';

import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackDetail from '@/components/track-detail/track-detail.vue';
import TrackList from '@/components/track-list/track-list.vue';

const MAX_LIST_ITEMS = 5;
const DEFAULT_PODCAST_FILTER_PARAMS = {
  limit: 5,
};

export default {
  name: 'Home',
  components: {
    TrackDetail,
    TrackList,
  },
  data() {
    return {
      category: '',
      favorites: [],
      favoriteSearch: '',
      podcasts: [],
      podcastSearch: '',
    };
  },
  computed: {
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcasts);
    },
    favoriteListFiltered() {
      return filterBySearchTerm(this.favoriteSearch, this.favorites);
    },
    track() {
      return head(this.podcasts) || {};
    },
  },
  methods: {
    updatePodcastList() {
      const listMapper = track => assocPath(['meta', 'favoriteId'], api.favoriteId(track), track);
      this.podcasts = map(listMapper, this.podcasts);
    },
    async addFavorite(track) {
      this.favorites = await api.addFavorite(track, MAX_LIST_ITEMS);
    },
    async removeFavorite(track) {
      this.favorites = await api.removeFavorite(track.meta.favoriteId, MAX_LIST_ITEMS);
    },
  },
  watch: {
    favorites: {
      handler() {
        this.updatePodcastList();
      },
      deep: true,
    },
  },
  async mounted() {
    this.category = getRandomPodcastCategory();
    this.podcasts = await api.search(this.category, DEFAULT_PODCAST_FILTER_PARAMS);
    this.favorites = await api.getFavoritesTracks(MAX_LIST_ITEMS);
  },
};
