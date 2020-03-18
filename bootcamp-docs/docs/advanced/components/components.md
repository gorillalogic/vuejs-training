# Design Patterns for Components

In the process of web developement you want create manageable and maintainable code. To makes this possible is neccesary to adopt best practices, known as `patterns`.

## Why is important the communication between components

By default, in Vue.js the components are isolated. This means that you can't reference parent data directly from child component's template. In order to pass data to child components (with isolated scope) you should rather use `props`.

## Main types of communication between components

### Direct parent-child communication

This is the common model of components communication in Vue.js, it works passing values as `props` from parent to child.

<img src="https://cms-assets.tutsplus.com/uploads/users/2028/posts/32354/image/vueccparentchild.png" alt="Parent-child pattern">

Parent Component:

```html
<template>
   <child-component :track="track">
</template>
<script>
export default {
	data() {
		return {
			track: {}
		}
	}
}
</script>
```

Child Component:

```html
<template>
	<div>
		{{ track }}
	</div>
</template>
<script>
	export default {
		props: {
			track: {
				default() {
					return {};
				},
				required: true,
				type: Object
			}
		}
	};
</script>
```

### Cross-component communication

The parent-child communication pattern becomes inconvenient and impractical as complexity grows.

<img src="https://cms-assets.tutsplus.com/uploads/users/2028/posts/32354/image/vuecccross.png" alt="Cross component pattern">

Every component can send and/or receive data from any other component.

Using the Global Event Bus this can be achieved:

```js
created () {
  eventBus.$on('updatingScore', newValue => this.score = newValue)
}
```

### [Vuex](/stores/vuex/vuex/)

Using Vuex you're implementing the Flux architecture.

### Dependency Injection

There are two alternatives on how Vue.js handles dependency injection modules:

- vue-component: is very lightweight DI framework which allows you to register and manually or automatically inject anything anywhere.
- vue-inject: is a bit more functional, it allows all what vue-component do. But also it does introduce simple service/factory/constant implementation with automatic injection support (as arguments) for previously registered entities.

We recommend to use `Vue-component` if you need a simple yet elegant DI solution for your application and `Vue-inject` if you miss Angular-style injections or just need more versatile.

### How to use the right pattern

- For **small apps**, the props and events will be just fine.
- For **middle range apps**, flexibility will be needed, for this Event Bus becomes handy.
- For **large apps**, you will need Vuex.
