# TypeScript

TypeScript has numerous features such as static typing and transpiling of the latest ECMAScript features for full compatibility with older browsers. Now Vue.js can make use of TypeScript thanks to the Vue CLI version 3.

Especially the static typing is a very interesting feature for projects in a professional environment as it helps define more strict interfaces. With the use of types, you inherently provide documentation to other developers on how to use your code as it offers guidance on how to use your functions, components and so on.

## Getting started

1. Create a new Vue.js app via CLI:

```bash
vue create ts-app
```

2. Manually select features and choose:

- Babel
- TypeScript
- CSS Pre-processors
- Linter / Formatter

### Component with TypeScript types

```js
import Vue, { VNode } from 'vue';

export const HelloComponent = Vue.extend({
	data() {
		return {
			message: 'Hello'
		};
	},
	methods: {
		greet(): string {
			return this.message + ' world';
		}
	},
	computed: {
		greeting(): string {
			return this.greet() + '!';
		}
	},
	render(createElement): VNode {
		return createElement('div', this.greeting);
	}
});
```

### Class Style component syntax

```js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	template: '<div></div>'
})
export default class HelloComponent extends Vue {
	message: string = 'Hello';
	greet(): string {
		return this.message + ' world';
	}
	get greeting() {
		return this.greet() + '!';
	}
}
```

## Additional Links

- [Official Vue.js documentation](https://vuejs.org/v2/guide/typescript.html)
- [TypeScript](https://www.typescriptlang.org/)
