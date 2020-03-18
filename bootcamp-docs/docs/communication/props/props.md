### Communication

We're all set, now we know how to create our custom components and this will help us with code reusability and composition.
One thing that is missing here is how we can communicate between components.
Vue.js provide us two simple but really powerful ways to pass data between our components and this will be pretty familiar, if you are used to use HTML attributes.

### Props

One of the adventages of creating custom components is the ability to define their own logic, that's when the so called **_props_** comes to the equation.
**_Props_** are basically the _attributes_ that our component will receive in order to react to specific logic around them.

For example, as you may know regular HTML elements have attributes

```HTML
<!-- input element will be of type text and will be required -->
<input type="text" required />
```

That means that the **`<input />`** element behaves differently based on the attributes received.

Same goes with our custom components, let's say we have our `<BlogHeaderComponent />` and we wanted to display a dynamic title based on the `title` property passed to our component.

```HTML
<BlogHeader title="Awesome Vue.js Gorilla Bootcamp" />
```

This will render the following:
<img :src="$withBase('/props-example.png')" alt="Prop Example">

So our component definition will look like this:

```vue
<template>
	<h1>🦍 {{ title }}</h1>
</template>

<script>
export default {
  name:: "BlogHeader"
  props: ["title"]
};
</script>
```

This way our custom component will be accepting a custom `props: ['title']` and the template will be dynamically updated based on the value passed to that _props_ component property.

::: tip
HTML attribute names are case-insensitive, so browsers will interpret any uppercase characters as lowercase. That means when you’re using in-DOM templates, camelCased prop names need to use their kebab-cased (hyphen-delimited) equivalents:

```vue
<template>
	<div>
		<h1>🦍 {{ postTitle }}</h1>
		<p>{{ postBody }}</p>
	</div>
</template>
<script>
export default {
	name: 'BlogPost',
	// Camel case in JavaScript
	props: ['postTitle', 'postBody']
};
</script>
```

```HTML
<!-- kebab-case in HTML -->
<BlogPost post-title="Gorilla Bootcamp" post-body="This bootcamp is awesome" />
```

Again, if you’re using string templates, this limitation does not apply.
:::

## Prop Types

So far, we’ve only seen props listed as an array of strings:

```javascript
props: ['title', 'postBody', 'author', 'createdAt'];
```

Most of the time you will know beforehand each type of the _props_ passed. In that case, you will have the ability to type every _prop_ using an object, where names and values contain the _prop_ name and _type_ respectively.

```javascript
props: {
  title: String,
  author: String,
  createdAt: Date,
  published: Boolean,
  comments: Array,
}
```

Using this approach not only will better document each property that a component receives but also will display a warning in the browser devtools if a wrong type has been passed to a _prop_.

## Dynamic Props

So far you've just seen _props_ passed as a static value, like this.

```HTML
<BlogHeaderComponent title="Awesome Vue.js Gorilla Bootcamp" />
```

You can also dynamically bind any _prop_ using `v-bind` directive.

```HTML
<!-- Dynamically bind a variable value -->
<BlogPost v-bind:title="post.title" v-bind:author="post.author"/>

<!-- Using the : shorthand-->
<BlogPost :title="post.title"  :author="post.author"/>

<!-- You could also use js expression-->
<BlogPost :title="post.title + 'by' + post.author"  :author="post.author"/>
```

## Passing a Number

```HTML
<!-- Even though `42` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.       -->
<BlogPost v-bind:likes="42" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost v-bind:likes="post.likes" />
```

### Passing a Boolean

```HTML
<!-- Including the prop with no value will imply `true`. -->
<BlogPost is-published />

<!-- Even though `false` is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.          -->
<BlogPost v-bind:is-published="false" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost v-bind:is-published="post.isPublished" />
```

## Passing an Array

```HTML
<!-- Even though the array is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.            -->
<BlogPost v-bind:comment-ids="[234, 266, 273]" />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost v-bind:comment-ids="post.commentIds" />
```

## Passing an Object

```HTML
<!-- Even though the object is static, we need v-bind to tell Vue that -->
<!-- this is a JavaScript expression rather than a string.             -->
<BlogPost
  v-bind:author="{
    name: 'Jose',
    company: 'Gorilla Logic'
  }"
 />

<!-- Dynamically assign to the value of a variable. -->
<BlogPost v-bind:author="post.author" />
```

::: tip One-Way data flow
All props form a **one-way-down** binding between the child property and the parent one: when the parent property updates, **it will flow down to the child**, but not the other way around. This prevents child components from accidentally mutating the parent’s state, which can make your app’s data flow harder to understand.

In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means **you should not attempt to mutate a prop inside a child component**. If you do, Vue.js will warn you in the console.
:::

## Additional Links

- Vue.js official docs - [Props](https://vuejs.org/v2/guide/components-props.html)
- Passing data to child components with [Props](https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props)