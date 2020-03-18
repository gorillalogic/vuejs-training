# Composition Api

Introducing the `Composition API`, a set of additive, function-based APIs that allow flexible composition of components logic.

This is one of the main features of [Vue 3](/advanced/vue3/vue3/).

## Basic Example

```html
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
  import { reactive, computed } from "vue";

  export default {
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2)
      });

      function increment() {
        state.count++;
      }

      return {
        state,
        increment
      };
    }
  };
</script>
```

In here you can see the use of a new property called `setup`. This is where you can use functions for creating state, computed properties and so on.

The setup method should return an object which will include anything that should be available in the component.

## Additional Links

- [Official documentation](https://vue-composition-api-rfc.netlify.com/#summary)
- [Vue 3 Cheat Sheet](https://www.vuemastery.com/vue-3-cheat-sheet/)
