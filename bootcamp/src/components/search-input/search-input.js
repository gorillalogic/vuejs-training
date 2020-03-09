import { sanitizeText } from '@/utils/sanitizeText';

export default {
  name: 'SearchInput',
  methods: {
    change(term) {
      const parsedTerm = sanitizeText(term);
      this.$emit('change', parsedTerm);
    },
    reset() {
      this.$refs.field.reset();
    },
  },
  props: {
    label: {
      type: String,
      default: 'Search...',
    },
  },
};
