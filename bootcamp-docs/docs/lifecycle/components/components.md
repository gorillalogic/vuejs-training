# Components

On the Internet, we could find a lot of good and extensive definitions about what a component is and how it relates to Vue.js, but here’s a simple and useful definition for you: components are reusable blocks that we create to build our UIs in a more flexible, scalable and performant way.

Vue.js offers two main ways to express components. First, we have directly made components, which are built using a direct Vue.js instance as shown below:

```javascript
Vue.component('button-incrementer', {
	data: function() {
		return {
			greeting: 'Hello Gorilla Logic!'
		};
	},
	template: '<p>{{ greeting }}</p>'
});
```

Then, we have the SFCs or Single File Components, where we can organize our logic in a more efficient, clean and readable way:

```vue
<template>
	<p>{{ greeting }}</p>
</template>

<script>
exports default {
    data: function() {
      return {
        greeting: "Hello Gorilla Logic"
      };
    }
  };
</script>

<style scoped>
p {
	font-size: 2em;
	text-align: center;
}
</style>
```

### Splitting Components

Vue.js offers another approach to use single file components, where we can split our logic into multiple files as shown below:

```html
<template>
	<div>Component's skeleton</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

The example above, help us to have more readility, but also improves our workflow when developing UIs with Vue.

## Component Structure

As you might have noticed, components include three important sections:

### Template

This is the skeleton of the component, mostly based on HTML but also enabled to use template expressions/literals.

```html
<template>
	<p>{{ greeting }}</p>
</template>
```

### Script

This is where the component's logic resides. The default approach must `export default` an object including the multiple options available for the js portion of the component.

```vue
<script>
export default {
	data: function() {
		return {
			greeting: 'Hello'
		};
	}
};
</script>
```

### Styles

Within this section we can include graphical customizations whether locally or globally, depending on our needs.

```css
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

## Component Composition

There are multiple approaches (basic and advanced) to create components, but all of them share some common logic around building Vue.js components. Here are the key concepts:

### Data

The `data` property is a very useful option in components that allow us to define internal information which will be part of the component's main functionaility. It's important to note that data is a function that returns an object, and every single position of the object will represent a data variable.

```javascript
data: function () {
  return {
    variableOne: 0,
    variableTwo: 'This is a text variale',
    variableThree: true,
  }
}
```

### Properties

Although data is useful to determine component's behavior, it's also important to have the ability to pass this data from parent to child components and/or pieces of our application and make the component reusable and configurable. This is when properties come into place. Props are nothing but data we pass to a component. Here is how we can define a properties in a Vue.js component:

```javascript
props: {
    propOne: {
      type: Array,
      required: true,
      default: () => [],
    },
    propTwo: {
      type: String,
      default: 'All Podcasts',
    },
}
```

There are multiple things we can define for each property such as type, mandatoriness and default value.

### Methods

Methods are functions inside our Vue components, and these are especially useful to perform actions that were previously attached to an element as shown below:

```vue
<template>
	<button @click="handleClick">
		Click to Greet
	</button>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Hello Gorilla Logic'
		};
	},
	methods: {
		handleClick: () => {
			console.log(this.greeting);
		}
	}
};
</script>
```

The `this` context variable will be automatically bounded to the method.

Please consider that methods are not cached, meaning the method will be executed regardless the reactive dependencies have changed or not.

### Computed Properties

Computed properties are meant to render properties that depend on a complex or elaborated logic behind the scenes. Even though Vue.js accepts in-template expressions, good practices always recommend to use computed properties approach rather than creating complex and less readable in-template expressions. Let's see a clear use case:

#### In-template expression

Here we are modifying a data property directly in our template, which makes the code less readable and harder to maintain.

```jsx
<div id="greeting-filtered">
  {{ greeting.replace(/hello/gi, 'Hi').toUpperCase() }}
</div>
```

#### Computed Property

On the other hand, with computed properties, we're delegating the transformation within a function that will eventually use the defined data property.

```vue
<template>
	<div id="greeting-filtered">
		{{ greetingFiltered }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			greeting: 'Hello Gorilla Logic'
		};
	},
	computed: {
		greetingFiltered: () => {
			return greeting.replace(/hello/gi, 'Hi').toUpperCase();
		}
	}
};
</script>
```

Take into consideration that computed properties will be cached based on their reactive dependencies, and won't be re-evaluated as long as those dependencies don't change.

### Watchers

Watchers are another (more generic and imperative) way of reacting to data changes. For people comming from AngularJs, this is very common, but Vue's approach is using computed properties rather than watchers. Let's take a look of one example comming directly from the official documentation:

```vue
<template>
	<div id="demo">{{ fullName }}</div>
</template>

<script>
export default {
	data: {
		firstName: 'James',
		lastName: 'Bond',
		fullName: 'James Bond'
	},
	watch: {
		firstName: function(val) {
			this.fullName = val + ' ' + this.lastName;
		},
		lastName: function(val) {
			this.fullName = this.firstName + ' ' + val;
		}
	}
};
</script>
```

## Additional Links

In case you are interested on deep diving the topics above, here are some useful links:

- [Vuejs.org](https://vuejs.org/) Learn more about this concepts in the official docs.
- [Vuemastery Courses](https://vuejs.org/) A more detailed and interactive path for beginners.

## Project Tasks

Components are by far one of the basic but most powerful tools Vue.js has to offer, actually on any UI framework, this concept leverages advanced design patterns and workflows. Now that we handle components, let's try to:

1. Build layout components as the base of the visual skeleton for our application. This includes:
	- **Main Layout:** this is the component that should contain or wrap up all the application's content.
	- **App Bar:** this is the bar at the top of the application that will eventually include a global search component.
	- **Menu:** this is the main navigation panel, that will allow us to move in between sections.
	- **Player Layout:** This will include the main skeleton for our player, that must be available in all views and contain the basic buttons.
2. As we defined our Menu component, we must include the basic routes that we are going to handle in our app's workflow. Dashboard, list of tracks, list of favorites, details page and finally an about page.

## Resolution

Let's take a look at the resolution of the tasks above:

1. [Main Layout Component](https://github.com/gorillalogic/vuejs-training/pull/4/commits/22da52dd77ff9cd2cd931559a5d2f84bbc0236b2)
2. [App Bar Component](https://github.com/gorillalogic/vuejs-training/pull/4/commits/ddcb13a3e7f2ec6303ee57e078b6085fcfb3e156)
3. [Refactor Code ](https://github.com/gorillalogic/vuejs-training/pull/4)
4. [Menu Drawer Component](https://github.com/gorillalogic/vuejs-training/pull/5/commits/9af41a3b4d262f913d21c24f9863dbb386022d7d)
5. [Refactor and Routing ](https://github.com/gorillalogic/vuejs-training/pull/5)


In this resolution, you might see some other concepts that we haven't gone through, but will be explained later on.