import { filterBySearchTerm } from '@/utils/filterBySearchTerm';
import TrackList from '@/components/track-list/track-list.vue';

import { addAndRemove } from '@/store/modules/favorites/utils'
import { FETCH_FAVORITES, ALL_FAVORITES_LIMIT } from '@/store/modules/favorites/types'

const MAX_LIST_ITEMS = 100;

export default {
  name: 'ListAllFavorites',
  components: {
    TrackList,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    ...addAndRemove(),
  },
  computed: {
    favorites() {
      return this.$store.getters[ALL_FAVORITES_LIMIT](MAX_LIST_ITEMS);
    },
    favoriteList() {
      return filterBySearchTerm(this.searchTerm, this.favorites);
    },
  },
  async mounted() {
    this.$store.dispatch(FETCH_FAVORITES);
  },
};
