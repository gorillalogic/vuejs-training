# Lazy Loading Routing

As your SPA grows in complexity, so does the size of the application bundle. After a point, it becomes a significant hindrance to the load times of your page. Thankfully, `vue-router` supports `webpack’s` built in [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports). This way we can define our routing and use a lazy load approach for loading lesser-used routes into bundles that are loaded on-demand when the route is accessed.

```javascript
import Home from '@components/Home'
import App from './App'
import Vue from 'vue';
import VueRouter from 'vue-router';
...


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Home
  },
 {
    path: '/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "details" */ '@components/details.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@components/about.vue'),
  },
];

// Once routes have been defined you create a new instance of VueRouter that will be used in our Vue instance

const router = new VueRouter({
    routes
});

new Vue({
    // Include router instance in Vue instance creation.
    router,
    render: h => h(App),
}).$mount('#app');
```

Note the use of `webpackChunkName` in the comment. This will cause our separate bundles to be named `details.bundle.js` & `about.bundle` appropriatellt instead of just [id].bundle.js. For more information on `webpackChunkName` and the other available options, see [webpack's import() documentation](https://webpack.js.org/api/module-methods/#import-1).
