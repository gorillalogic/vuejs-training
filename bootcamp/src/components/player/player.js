import { dateTimeToPlayTime } from '@/utils/dateTimeToPlayTime';
import { MESSAGE_PLAY_TRACK } from '@/constants/emit-events';
import ARTWORK_PLACEHOLDER from '@/assets/artwork-placeholder.png';

import { UPDATE_INTERVAL, TIME_OFFSET_10 } from './constants';

/* Base information to be used as track information */
const TRACK_INFO = {
  trackId: null,
  artistName: '',
  collectionName: '',
  trackName: '',
  previewUrl: null,
  artworkUrl100: ARTWORK_PLACEHOLDER,
};

export default {
  name: 'Player',
  data() {
    return {
      isPlaying: false,
      actionsEnabled: false,
      currentTrack: TRACK_INFO,
      currentTimeInSeconds: 0,
      duration: 0,
    };
  },
  computed: {
    /**
     * Return the component header if is possible.
     */
    getTrackHeader() {
      if (this.currentTrack && this.currentTrack.trackId === TRACK_INFO.trackId) {
        return 'CHOOSE A SONG TO PLAY';
      }
      return 'YOU ARE PLAYING';
    },

    /**
     * Return the song information (artist - album) if is possible
     */
    getSongInfo() {
      if (this.currentTrack && this.currentTrack.trackId !== TRACK_INFO.trackId) {
        return `${this.currentTrack.artistName} - ${this.currentTrack.collectionName}`;
      }
      return '';
    },

    currentTime() {
      return dateTimeToPlayTime(this.currentTimeInSeconds);
    },

    sliderTime() {
      return this.currentTimeInSeconds * UPDATE_INTERVAL;
    },
  },
  methods: {
    setCurrentTrack(track) {
      if (track.trackId === this.currentTrack.trackId) {
        return;
      }
      this.stop();
      this.currentTrack = track;
    },

    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },
    stop() {
      this.$refs.player.currentTime = 0;
      this.$refs.player.pause();
    },
    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },
    goBackward10Seconds() {
      this.$refs.player.currentTime = this.$refs.player.currentTime - TIME_OFFSET_10;
    },
    goForward10Seconds() {
      this.$refs.player.currentTime = this.$refs.player.currentTime + TIME_OFFSET_10;
    },
    onLoad() {
      if (this.$refs.player.readyState >= 2) {
        this.loaded = true;
        this.duration = this.$refs.player.duration * UPDATE_INTERVAL;
        this.actionsEnabled = true;
        this.play();
        return (this.playing = this.autoPlay);
      }
      this.actionsEnabled = false;
      throw new Error('Failed to load sound file.');
    },
    onTimeUpdate() {
      this.currentTimeInSeconds = this.$refs.player.currentTime;
    },
    onReproductionStart() {
      this.isPlaying = true;
    },
    onReproductionPause() {
      this.isPlaying = false;
    },
    onReproductionEnds() {
      this.pause();
    },
  },
  mounted() {
    this.$refs.player.addEventListener('loadeddata', this.onLoad);
    this.$refs.player.addEventListener('timeupdate', this.onTimeUpdate);
    this.$refs.player.addEventListener('play', this.onReproductionStart);
    this.$refs.player.addEventListener('pause', this.onReproductionPause);
    this.$refs.player.addEventListener('ended', this.onReproductionEnds);
    this.$root.$on(MESSAGE_PLAY_TRACK, this.setCurrentTrack);
  },
};
