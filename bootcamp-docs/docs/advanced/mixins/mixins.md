# Mixins

Mixns are chunks of code that can be reused. It's a way to implement the DRY principle. `Don't Repeat Yourself`.

Mixins are a flexible way to distribute reusable functionalities for Vue.js Components. A mixin object can contain any component options.
When a component uses a mixin, all options in the mixin will be `mixed` into the component's own options.

## Features

### Create your mixin

```js
export const exampleMixin = {
	created() {
		console.log('👋 from Mixin');
	}
};
```

After creating our first mixin, we can use it in a component in order to extend the funcionality.

```html
<script>
	import { exampleMixin } from '../mixins/exampleMixin.js';
	export default {
		mixins: [exampleMixin]
	};
</script>
```

### Order of Operations

Mixins will always be executed before the components.

```js
 <script>
    import { exampleMixin } from '../mixins/exampleMixin.js';
    export default {
      mixins: [exampleMixin],
      created() {
        console.log('🤘🏼 from the component.')
      }
    };
</script>
```

As result we get:

1. The mixing was console first.
2. The component console came after.

```{8}
👋 from Mixin
🤘🏼 from the component.
```

## Additional Links

[Official documentation](https://vuejs.org/v2/guide/mixins.html)
