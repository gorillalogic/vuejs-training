# Plugins

Vue.js plugins are a powerful and simple way to add global features to you application.
Vue.js plugins are very simple indeed, it's just an object with an `install` method that takes a couple of parameters:

- The global `Vue` object.
- An object containing user-defined options.

## Features

### Your first Plugin

This will be a Plugin that console every time a component is created to the DOM.

```js
const FirstPlugin = {
	install(Vue, options) {
		vue.mixin({
			created() {
				console.log('Created');
			}
		});
	}
};
export default FirstPlugin;
```

Now can be used in the Vue app by importing it like this:

```js
import Vue from 'vue';
import FirstPlugin from './first-plugin.js';
import App from './App.vue';

Vue.use(FirstPlugin);

new Vue({
	el: '#app',
	render: h => h(App)
});
```

### Adding Capabilities

In case you want to package component or directives to be distributed as a plugin.

```js
import NewComponent from './components/NewComponent.vue';
import NewDirective from './directives/NewDirective.js';

const FirstPlugin {
  install(Vue, options) {
    Vue.component(NewComponent.name, NewComponent)
    Vue.directive(NewDirective.name, NewDirective)
  }
};

export default FirstPlugin;
```

### Modifying the Global Vue Object

From a plugin you can modify the global Vue pretty straightforward.

```js
const FirstPlugin {
  install(Vue, options) {
    Vue.myAddedProperty = 'Example Property'
    Vue.myAddedMethod = function() {
      return Vue.myAddedProperty
    }
  }
};

export default FirstPlugin;
```

### Modyfing Vue.js Instances

You can modify the Vue.js prototype in case you want to add a property or method to component instances with no need of injection mechanism.

```js
const FirstPlugin {
  install(Vue, options) {
    Vue.prototype.$myAddedProperty = 'Example Property'
    Vue.prototype.$myAddedMethod = function() {
      return this.$myAddedProperty
    }
  }
};

export default FirstPlugin;
```

### Distributing your Plugin

When your plugin is ready, it can be distributed to the community via [NPM](https://www.npmjs.com/) or [Github](https://github.com/).
Also you can open a pull request to the official [Vue repository](https://github.com/vuejs/awesome-vue).

## Additional Links

[Official documentation](https://vuejs.org/v2/guide/plugins.html)
