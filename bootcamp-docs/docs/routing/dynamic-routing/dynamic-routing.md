# Dynamic Routing

Very often we will need to map routes with the given pattern to the same component. For example we may have a `User` component which should be rendered for all users but with different user IDs. In `vue-router` we can use a dynamic segment in the path to achieve that:

```js
const User = {
  template: "<div>User</div>"
};

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: "/user/:id", component: User }
  ]
});
```

Now URLs like `/user/foo` and `/user/bar` will both map to the same route.

A dynamic segment is denoted by a colon `:`. When a route is matched, the value of the dynamic segments will be exposed as `this.$route.params` in every component. Therefore, we can render the current user ID by updating `User`'s template to this:

```js
const User = {
  template: "<div>User {{ $route.params.id }}</div>"
};
```

You can have multiple dynamic segments in the same route, and they will map to corresponding fields on `$route.params`. Examples:

| pattern                       | matched path        | \$route.params                         |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

In addition to `$route.params`, the `$route` object also exposes other useful information such as `$route.query` (if there is a query in the URL), `$route.hash`, etc. You can check out the full details in the [API Reference](https://router.vuejs.org/api/#the-route-object).
