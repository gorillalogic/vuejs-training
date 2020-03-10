import { head } from 'ramda';

import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackDetail from '@/components/track-detail/track-detail.vue';
import TrackList from '@/components/track-list/track-list.vue';

import { addAndRemove, allFavorites } from '@/store/modules/favorites/utils';
import { FETCH_FAVORITES, ALL_FAVORITES_LIMIT } from '@/store/modules/favorites/types';
import { mapFavoritesToList } from '@/utils/mapFavoritesToList';

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
      favoriteSearch: '',
      podcasts: [],
      podcastSearch: '',
    };
  },
  computed: {
    ...allFavorites(),
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcasts);
    },
    favoriteListFiltered() {
      return filterBySearchTerm(
        this.favoriteSearch,
        this.$store.getters[ALL_FAVORITES_LIMIT](MAX_LIST_ITEMS),
      );
    },
    track() {
      return head(this.podcasts) || {};
    },
  },
  methods: {
    ...addAndRemove(),
    updatePodcastList() {
      this.podcasts = mapFavoritesToList(this.favorites, this.podcasts);
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
    this.$store.dispatch(FETCH_FAVORITES);
    this.category = getRandomPodcastCategory();
    this.podcasts = await api.search(this.category, DEFAULT_PODCAST_FILTER_PARAMS);
  },
};
