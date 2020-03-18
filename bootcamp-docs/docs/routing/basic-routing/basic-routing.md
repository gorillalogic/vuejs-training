# Basic Routing

Defining routes for a Vue.js application using `vue-router` is deadly simple, by defining an Array of objects with the following properties. [API Reference](https://router.vuejs.org/api/#router-construction-options)

```javascript
import Home from '@components/Home'
import About from '@components/About'
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
    path: "/about",
    name: "about",
    component: About
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

`path:` will be the path for the browser `location.href`<br>
`name:` will be the name of the path.<br>
`component:` will be the component to be loaded in that page route.

Once routes have been defined in our Vue instance, `vue-router` provides a series of util components in order to manage navigation through our application. Let's say we have a `<HeaderComponent />` with all the links for routing in our previous created Vue instance.

```HTML
<!-- root template, where our vue instance will be created -->
<div #app>
    <HeaderComponent />
</div>
```

```javascript
Vue.component('HeaderComponent', {
	// use router-link component for navigation.
	// specify the link by passing the `to` prop.
	// `<router-link>` will be rendered as an `<a>` tag by default
	template: `
        <nav>
            <router-link to="/" />
            <router-link to="/about" />
        </nav>
    `
});
```

Here we're using [`<router-link />`](https://router.vuejs.org/api/#router-link) provided by `vue-router`. You can check what props `router-link` accepts in de [API documentation.](https://router.vuejs.org/api/#router-link-props)
