import { MESSAGE_PLAY_TRACK } from '@/constants/emit-events';
import FavoriteButton from '@/components/favorite-button/favorite-button.vue';

export default {
  name: 'track-detail',
  components: {
    FavoriteButton,
  },
  props: {
    track: {
      default() {
        return {};
      },
      required: true,
      type: Object,
    },
    full: {
      default: true,
      type: Boolean,
    },
  },
  methods: {
    clickFavorite(emitMessage, track) {
      this.$emit(emitMessage, track);
    },
    play() {
      this.$root.$emit(MESSAGE_PLAY_TRACK, this.track);
    },
  },
};
