# Best practices for Components

The official guide is [here](https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential)

## Component Communication

Components can communicate in different ways, you can use [Vuex](https://vuex.vuejs.org/) to handle the store or passing props from parent to child:

```html
<my-component :firstProp="someValue"></my-component>
```

If you want to inform the parent component you have to use events:

```js
export default {
	methods: {
		onClick() {
			this.$emit('nameOfEvent', someValue);
		}
	}
};
```

Parent component:

```html
<my-component :firstProp="someValue" @nameOfEvent="”doSomething”"></my-component>
```

## Shortcut for component registration

In your Vue.js project you can have multiple components, at some point you will have to import them:

::: danger Bad

```js
import MyAwesomeComponent from './my-awesome-component.vue';
...
components: {
    'my-awesome-component': MyAwesomeComponent
}
```

:::

Shorthanded:
::: tip Good

```js
...
components: {
    MyAwesomeComponent,
    MyAwesomeComponentTwo,
    MyAwesomeComponentThree
}
```

:::

## Shortcut for registering components at global level

Usually when you need to register your component as global, you have to use **vue.component()** for registration purpose:

::: danger Bad

```js
import ComponentA from './component-a.vue';
...
Vue.component('component-a', ComponentA);

...
```

:::

You can achieve this creating a function that handles this:
::: tip Good

```js
const ctors = {};

const components = {
	ComponentA,
	ComponentB,
	ComponentC
};

//Attach component to vue globally - NOTE: Remember to define a name  in your component...
Object.keys(components).forEach(function(key) {
	const component_name = components[key].name;
	if (component_name) {
		ctors[component_name] = Vue.component(component_name, components[key]);
	} else {
		throw new Error('It seems you forgot go give your component a name...');
	}
});
```

:::

## Avoid registering all components as global

::: tip
You have to set as global components, those ones who can be accessed across the Vue.js application.
:::
