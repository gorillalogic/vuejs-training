import { isNil } from 'ramda';

import api from '@/api';

export default {
  name: 'Detail',
  data() {
    return {
      snackbar: false,
      track: {},
      trackId: 0,
    };
  },
  methods: {
    async fetchData() {
      this.trackId = Number(this.$route.params.id);
      this.snackbar = false;
      if (isNaN(this.trackId)) {
        this.snackbar = true;
        return;
      }
      this.track = await api.lookup(this.trackId);
      if (isNil(this.track)) {
        this.track = {};
        this.snackbar = true;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route() {
      this.track = {};
      this.fetchData();
    },
  },
};
