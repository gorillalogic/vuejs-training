(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{226:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"best-practices-for-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-routing"}},[t._v("#")]),t._v(" Best practices for Routing")]),t._v(" "),s("h2",{attrs:{id:"use-same-component-in-multiple-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-same-component-in-multiple-routes"}},[t._v("#")]),t._v(" Use same component in multiple routes")]),t._v(" "),s("p",[t._v("Sometimes you as a developer are in a situation where yoo have to use the same component for multiple routes. To solve this issue, Vue.js reuses existing components instead of creating once again.")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Bad")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// router.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcomponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NewComponent\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcomponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NewComponent\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You need to add a "),s("code",[t._v(":key")]),t._v(" property into the "),s("code",[t._v("<router-view>")]),t._v(" element. Doing this way the router recognize when the page is different.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Good")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// App.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route.path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"micro-frontends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#micro-frontends"}},[t._v("#")]),t._v(" Micro-frontends")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://micro-frontends.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Micro-frontends"),s("OutboundLink")],1),t._v(" is the term you are looking for. Basically, it is your first line of segregation. You should split your app into multiple smaller apps. Each app will have its root component, router, models, services, etc. You will still share components between each small app (of course, its important in a very large application to achieve reusability).")]),t._v(" "),s("h2",{attrs:{id:"mono-repo-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mono-repo-considerations"}},[t._v("#")]),t._v(" Mono-repo considerations")]),t._v(" "),s("p",[t._v("If you have chosen to go ahead with Micro-frontends, then you might consider "),s("a",{attrs:{href:"https://levelup.gitconnected.com/how-to-setup-a-js-monorepo-like-a-professional-cf71d13501c5",target:"_blank",rel:"noopener noreferrer"}},[t._v("mono-repo"),s("OutboundLink")],1),t._v(" setup using Lerna or Builder.")]),t._v(" "),s("h2",{attrs:{id:"routing-module-initialization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-initialization"}},[t._v("#")]),t._v(" Routing module - Initialization")]),t._v(" "),s("p",[t._v("Irrespective of micro-apps, your app should have one starting point - "),s("code",[t._v("main.js")]),t._v(" or "),s("code",[t._v("index.js")]),t._v(". In this file, you should initialize all your singleton things. Main singleton entities in a typical Vue.js app are "),s("strong",[t._v("Root Component")]),t._v(", "),s("strong",[t._v("Data Store")]),t._v(", "),s("strong",[t._v("Router")]),t._v(", etc.")]),t._v(" "),s("p",[t._v("Your routing module will be separate from any component. Import routing module in this entry file and initialize it here.")]),t._v(" "),s("h2",{attrs:{id:"routing-module-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-implementation"}},[t._v("#")]),t._v(" Routing Module - Implementation")]),t._v(" "),s("p",[t._v("Routing module should be further split into smaller modules. Use simple functions and ES modules to do that. Each function will be responsible for returning a RouteConfig object. This is how it will look:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RouteConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/some-path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcomponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AppComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tchildren"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWelcomeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDashboardRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWelcomeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RouteConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROUTE_WELCOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcomponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" WelcomeComponent\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("At route level, you should consider doing lazy loading of the modules. This will save many bytes from loading upfront:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLazyWelcomeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RouteConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IMPORTANT for lazy loading")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("LazyWelcomeComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'views/WelcomeComponent.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROUTE_WELCOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tpath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcomponent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LazyWelcomeComponent\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"routing-module-guard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-guard"}},[t._v("#")]),t._v(" Routing Module - Guard")]),t._v(" "),s("p",[t._v("Guards are really important when you should handle your authorization. With Vue.js, it is possible to write component level route guard. Altough it is not suggested, you can do it when absolutely necessary. It is basically a separation of concern. Your routing module should have the knowledge of authorization of your app. And technically, authorization exists/applies more to a route than a component. That is the reason, why we created routing as a separate module altogether.")]),t._v(" "),s("p",[t._v("We're assuming that you are using some sort of data store like "),s("code",[t._v("Redux")]),t._v(" or "),s("code",[t._v("Vuex")]),t._v(" for very large and complex applications. If you are going to write route level guards, then you will need to use data from "),s("strong",[t._v("Redux/Vuex store")]),t._v(" to take authorization decisions. It means you need to inject store into routing module. The simplest way to do that is to wrap your router initialization into a function like this:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("AppState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VueRouter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now you can access store here")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tmode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\troutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWelcomeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Now you can simply call this function from your entry-point file.")]),t._v(" "),s("h2",{attrs:{id:"routing-module-default-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-default-route"}},[t._v("#")]),t._v(" Routing Module - Default route")]),t._v(" "),s("p",[t._v("Remember to define a default catch-all route to show generic/intelligent 404 message to your users.")]),t._v(" "),s("h2",{attrs:{id:"routing-module-routing-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-routing-data"}},[t._v("#")]),t._v(" Routing Module - Routing data")]),t._v(" "),s("p",[t._v("Since we are really talking about large and complex UI applications, it is better to avoid direct access to a router within your component. Instead, keep your router data in sync with your data store like "),s("a",{attrs:{href:"https://github.com/vuejs/vuex-router-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuex-router-sync"),s("OutboundLink")],1),t._v(" . You will save the painful amount of bugs by doing this.")]),t._v(" "),s("h2",{attrs:{id:"routing-module-side-effects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-module-side-effects"}},[t._v("#")]),t._v(" Routing Module - Side effects")]),t._v(" "),s("p",[t._v("You will often use "),s("code",[t._v("$router.replace()")]),t._v(" or "),s("code",[t._v("$router.push()")]),t._v(" within your components. From a component perspective, it is a side effect. Instead, handle programmatic router navigation outside of your component. Create a central place for all router navigation. Dispatch a request/action to this external entity to handle these side effects for you. TLDR; Don't do routing side effects directly within your components. It will make your components "),s("strong",[t._v("SOLID")]),t._v(" and easy to test. In our case, we use redux-observable to handle routing side effects.")]),t._v(" "),s("p",[t._v("I hope this covers all the aspects of routing for a "),s("strong",[t._v("large")]),t._v(" scale applications.")])])}),[],!1,null,null,null);e.default=n.exports}}]);