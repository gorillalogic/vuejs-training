import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import api from '@/api';
import TrackList from '@/components/track-list/track-list.vue';

const MAX_LIST_ITEMS = 100;

export default {
  name: 'ListAllFavorites',
  components: {
    TrackList,
  },
  data() {
    return {
      favorites: [],
      searchTerm: '',
    };
  },
  computed: {
    favoriteList() {
      return filterBySearchTerm(this.searchTerm, this.favorites);
    },
  },
  async mounted() {
    this.favorites = await api.getFavoritesTracks(MAX_LIST_ITEMS);
  },
};
