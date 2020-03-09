import { pathOr } from 'ramda';

import { MESSAGE_ADD_FAVORITE, MESSAGE_REMOVE_FAVORITE } from '@/constants/emit-events';

export default {
  name: 'FavoriteButton',
  props: {
    track: {
      default() {
        return {};
      },
      required: true,
      type: Object,
    },
  },
  computed: {
    isActive() {
      return pathOr(null, ['meta', 'favoriteId'], this.track);
    },
    tooltipText() {
      return this.isActive ? 'Remove favorite' : 'Add favorite';
    },
  },
  methods: {
    click() {
      const action = this.isActive ? MESSAGE_REMOVE_FAVORITE : MESSAGE_ADD_FAVORITE;
      this.$emit('click', action, this.track);
    },
  },
};
