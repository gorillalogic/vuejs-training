# Best Practices

Some of the Vue.js best practices topics we'll be covering in this section:

1. [Components](/best-practices/components/components/)
2. [Templates](/best-practices/templates/templates/)
3. [Routing](/best-practices/routing/routing/)
4. [Vuex](/best-practices/vuex/vuex/)

## Other Best pratices:

### Performance

You have to set:

```js
Vue.config.performance = true;
```

Also consider to use:

- [Vue.js performance DevTool extension for Chrome](https://chrome.google.com/webstore/detail/vue-performance-devtool/koljilikekcjfeecjefimopfffhkjbne?hl=en)

### Error handling

Use:

```js
Vue.config.errorHandler;
```

Use:

- errorCaptured hook.

Set:

- Runtime error tracking using services like [Sentry](https://sentry.io/welcome/) and [Bugsnag](https://www.bugsnag.com/).

### Computed Properties

Split complex computed properties into as many simpler properties:

- Easier to test.
- Easier to read.
- More manageable.

### Component Data

- Define data props upfront to make them reactive.

```js
data() {
	return {
		isLoading: true,
		commitSha: null,
		diffViewType: 'inline',
		isParallelView: false,
		diffFiles: [],
		author: {
			username: ''
		}

	}
}

```

- Avoid manipulating the DOM directly.

- No need to put static data in Vue **data** object.

::: danger Bad

```js
<template>
	<div id="app">
		<img alt="Vue logo" :src="logo" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import image from './assets/logo.png';

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	data() {
		return {
			logo: image
		};
	}
};
</script>
```

:::

There's no need to define a property in Data to directly modify the DOM.

::: tip Good

```js
<template>
	<div id="app">
		<img alt="Vue logo" :src="logo" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import image from './assets/logo.png';

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	computed: {
		logo() {
			return image;
		}
	}
};
</script>
```

Instead of declaring static props inside the `data` property, just declare a computed property to manipulate the DOM.

:::

### Conditional Rendering

| Directive |        Description         |
| --------- | :------------------------: |
| `v-if`    |     Higher toggle cost     |
| `v-show`  | Higher initial render cost |
