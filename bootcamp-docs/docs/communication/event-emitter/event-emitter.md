### Event-emitter pattern

So far we've just seen how to communicate components passing down data from parent to children. And how about the other way around?.

Vue's children to parent communication is provided by [`$emit`](https://vuejs.org/v2/api/#vm-emit) API using the event emitter pattern.

`$emit` will trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function.

Here's an example. First we define our custom component:

```vue
<template>
	<button v-on:click="onGreeting">
		Hey Gorilla
	</button>
</template>

<script>
export default {
	name: 'GorillaButton',
	methods: {
		onGreeting() {
			this.$emit('gorilla-event');
		}
	}
};
</script>
```

Attached to the `v-on:click` event we are using `$emit` API to _emit_ a new event called `gorilla-event`. This name could have any name that you want, so keep that in mind.

Then in the parent component, where we use our custom `<GorillaButton />` we will be listening to a custom event `v-on:gorilla-event` in order to execute `onGorillaEvent` method in the parent component.

```vue
<template>
	<div>
		<GorillaButton v-on:gorilla-event="onGorillaEvent" />
	</div>
</template>

<script>
export default {
	name: 'ParentComponent',
	methods: {
		onGorillaEvent() {
			alert('You are a Gorilla  🦍🦍');
		}
	}
};
</script>
```

> This way every time we click the `<GorillaButton />` on our `App`, an event will be triggered in order to display an alert.

#### Passing arguments to the custom event

Passing arguments to a parent using the event emitter pattern is as simple as adding additional arguments to the `$emit` call like this.

Let's say we'll be passing the gorilla specie as an argument to our custom `gorilla-event`

```vue
<template>
	<button v-on:click="onGreeting">
		Hey Gorilla
	</button>
</template>

<script>
export default {
	name: 'GorillaButton',
	methods: {
		onGreeting() {
			this.$emit('gorilla-event', 'Mountain Gorilla');
		}
	}
};
</script>
```

```vue
<template>
	<div>
		<GorillaButton v-on:gorilla-event="onGorillaEvent" />
	</div>
</template>

<script>
export default {
	name: 'ParentComponent',
	methods: {
		onGorillaEvent(specie) {
			alert(`You are a ${specie}  🦍🦍`);
		}
	}
};
</script>
```

Now the method attached to our custon `gorilla-event` will receive the arguments passed to the `$emit` call.

::: tip
Unlike components and props, event names don’t provide any automatic case transformation. Instead, the name of an emitted event must exactly match the name used to listen to that event. For example, if emitting a camelCased event name:

```javascript
this.$emit('myEvent');
```

Listening to the kebab-cased version will have no effect:

```HTML
<!-- Won't work -->
<my-component v-on:my-event="doSomething"></my-component>
```

Unlike components and props, event names will never be used as variable or property names in JavaScript, so there’s no reason to use camelCase or PascalCase. Additionally, `v-on` event listeners inside DOM templates will be automatically transformed to lowercase (due to HTML’s case-insensitivity), so `v-on:myEvent` would become `v-on:myevent` – making myEvent impossible to listen to.

For these reasons, we recommend you **always use kebab-case for event names.**
:::

## Additional Links

- Vue.js official docs - [Custom Events](https://vuejs.org/v2/guide/components-custom-events.html)

## Project Tasks

After taking a look at some interesting concepts about Event Emitting and Props, let's try to use these concepts in the tasks below:

1. Let's integrate our tracklist component with our searchlightbox component, so that we can render our search results using our track list.
2. Let's add a new component to view more details about each track (as mentioned in the initial scope).
3. Using the emit pattern, let's give it a try and build the favorite feature within our home.
4. Add favorites and podcasts full list pages.
5. Connect the player component with other components using root events.

## Resolution

The re-usability in Vue.js plays a really important role, as we can give our application a more flexible, maintainable and performant structure. Also, the emitter pattern is useful in multiple cases, but harder to maintain in some others. Let's take a look at the resolution for the tasks:

1. [Refactor Searchlighbox Component](https://github.com/gorillalogic/vuejs-training/pull/9)
2. [Add Track Details Component](https://github.com/gorillalogic/vuejs-training/pull/10)
3. [Favorite Feature Home](https://github.com/gorillalogic/vuejs-training/pull/11)
4. [Add Favorites and Podcasts Lists](https://github.com/gorillalogic/vuejs-training/pull/12)
5. [Connect Player](https://github.com/gorillalogic/vuejs-training/pull/13)