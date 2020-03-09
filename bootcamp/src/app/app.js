import MainLayout from '@/components/main-layout/main-layout.vue';

export default {
  components: {
    MainLayout,
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
