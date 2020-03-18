# Best practices for templates

## Declare props with camelCase and use kebab-case in templates

For JavaScript the standard naming convention is camelCase, and for HTML is kebab-case, so we can use them as follows:

::: danger Bad

```html
<PopupWindow titleText="hello world" />

props: { 'title-text': String }
```

:::

::: tip Good

```html
<PopupWindow title-text="hello world" />

props: { titleText: String }
```

:::

## Simply expression in templates

Component templates should have only simple expressions, if not this code should be in a computed properties or methods:
::: danger Bad

```jsx
{{ fullName.split(' ').map(function (word) { return word[0].toUpperCase() + word.slice(1) }).join(' ') }}
```

:::

::: tip Good

```jsx
<!-- In a template -->
<div> {{ normalizedFullName }} </div>
```

```js
// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

:::
