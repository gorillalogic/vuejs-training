import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import { getRandomPodcastCategory } from '@/utils/getRandomPodcastCategory';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';

import { addAndRemoveFavorite, allFavorites } from '@/store/modules/favorites/utils';
import { FETCH_FAVORITES } from '@/store/modules/favorites/types';
import { mapFavoritesToList } from '@/utils/mapFavoritesToList';

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
  methods: {
    ...addAndRemoveFavorite(),
    updatePodcastList(){
      this.podcasts = mapFavoritesToList(this.favorites, this.podcasts);
    },
  },
  computed: {
    ...allFavorites(),
    podcastList() {
      return filterBySearchTerm(this.searchTerm, this.podcasts);
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
    this.podcasts = await api.search(this.$route.params.category || getRandomPodcastCategory());
    this.podcastListFiltered = [...this.podcastList];
  },
};
