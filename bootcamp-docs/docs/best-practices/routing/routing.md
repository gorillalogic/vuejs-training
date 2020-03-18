# Best practices for Routing

## Use same component in multiple routes

Sometimes you as a developer are in a situation where yoo have to use the same component for multiple routes. To solve this issue, Vue.js reuses existing components instead of creating once again.

::: danger Bad

```js
// router.js
const routes = [
	{
		path: '/path1',
		component: NewComponent
	},
	{
		path: '/path2',
		component: NewComponent
	}
];
```

You need to add a `:key` property into the `<router-view>` element. Doing this way the router recognize when the page is different.

:::
::: tip Good

```js
// App.vue
<router-view :key='$route.path' />
```

:::

## Micro-frontends

[Micro-frontends](https://micro-frontends.org/) is the term you are looking for. Basically, it is your first line of segregation. You should split your app into multiple smaller apps. Each app will have its root component, router, models, services, etc. You will still share components between each small app (of course, its important in a very large application to achieve reusability).

## Mono-repo considerations

If you have chosen to go ahead with Micro-frontends, then you might consider [mono-repo](https://levelup.gitconnected.com/how-to-setup-a-js-monorepo-like-a-professional-cf71d13501c5) setup using Lerna or Builder.

## Routing module - Initialization

Irrespective of micro-apps, your app should have one starting point - `main.js` or `index.js`. In this file, you should initialize all your singleton things. Main singleton entities in a typical Vue.js app are **Root Component**, **Data Store**, **Router**, etc.

Your routing module will be separate from any component. Import routing module in this entry file and initialize it here.

## Routing Module - Implementation

Routing module should be further split into smaller modules. Use simple functions and ES modules to do that. Each function will be responsible for returning a RouteConfig object. This is how it will look:

```js
const route: RouteConfig = {
	path: '/some-path',
	component: AppComponent,
	children: [getWelcomeRoute(), getDashboardRoute()]
};

function getWelcomeRoute(): RouteConfig {
	return {
		name: ROUTE_WELCOME,
		path: '',
		component: WelcomeComponent
	};
}
```

At route level, you should consider doing lazy loading of the modules. This will save many bytes from loading upfront:

```js
function getLazyWelcomeRoute(): RouteConfig {
	// IMPORTANT for lazy loading
	const LazyWelcomeComponent = () => import('views/WelcomeComponent.vue');

	return {
		name: ROUTE_WELCOME,
		path: '',
		component: LazyWelcomeComponent
	};
}
```

## Routing Module - Guard

Guards are really important when you should handle your authorization. With Vue.js, it is possible to write component level route guard. Altough it is not suggested, you can do it when absolutely necessary. It is basically a separation of concern. Your routing module should have the knowledge of authorization of your app. And technically, authorization exists/applies more to a route than a component. That is the reason, why we created routing as a separate module altogether.

We're assuming that you are using some sort of data store like `Redux` or `Vuex` for very large and complex applications. If you are going to write route level guards, then you will need to use data from **Redux/Vuex store** to take authorization decisions. It means you need to inject store into routing module. The simplest way to do that is to wrap your router initialization into a function like this:

```js
export function makeRouter(store: Store<AppState>): VueRouter {
	// Now you can access store here
	return new VueRouter({
		mode: 'history',
		routes: [getWelcomeRoute(store)]
	});
}
```

Now you can simply call this function from your entry-point file.

## Routing Module - Default route

Remember to define a default catch-all route to show generic/intelligent 404 message to your users.

## Routing Module - Routing data

Since we are really talking about large and complex UI applications, it is better to avoid direct access to a router within your component. Instead, keep your router data in sync with your data store like [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) . You will save the painful amount of bugs by doing this.

## Routing Module - Side effects

You will often use `$router.replace()` or `$router.push()` within your components. From a component perspective, it is a side effect. Instead, handle programmatic router navigation outside of your component. Create a central place for all router navigation. Dispatch a request/action to this external entity to handle these side effects for you. TLDR; Don't do routing side effects directly within your components. It will make your components **SOLID** and easy to test. In our case, we use redux-observable to handle routing side effects.

I hope this covers all the aspects of routing for a **large** scale applications.
