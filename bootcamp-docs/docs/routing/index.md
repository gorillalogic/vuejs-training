# Routing

Now we know the basis of Vue.js, we know how to create components, use lifecycle features and communicate multiple components. Quite a few useful things, but most modern UI applications are usually more dynamic than this.
How about navigating between pages and dynamically loading different components based on that navigation? Vue.js provides a powerfull plugin library for those use cases where your application will dynamically load different components based on some kind of routing. That's all we know as Single Page Applications - SPA.

## Installation

Vue.js recommends for most Single Page Applications the officially supported [vue-router library.](https://github.com/vuejs/vue-router)

### Using CDN

You could use simple script tags in order to load `vue-router` from a CDN link.
Include vue-router after Vue and it will install itself automatically:

```HTML
<script src="/path/to/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

### Using Npm / Yarn

```sh
npm install vue-router --save

//or

yarn add vue-router
```

When used with a module system, you must explicitly install the router via Vue.use():

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
```

You don't need to do this when using global script tags.
