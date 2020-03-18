# Application Setup

When it comes to setting up your Vue.js applications, there are quite a few things you need to take into considerations in order to implement good practices and also to include as much as you need to run your tasks.

However, here are the most common and recommended things you need to keep track of:

- Define a clear, consistent and meaningful folder structure
- Install all the dependencies you need but avoid using unnecesary libraries.
- Use a transpiler: so that you can ensure a high level of compatibility for your application.
- Use a Linter: so that you can keep your code structure organized and standardized.
- Configure a router: to easily manage your application flow and transitions between sections.
- Include a unit testing tool: to ensure the quaility of your application and avoid side effects.

Below, you will find out a set of Vue.js tools that will leverage your setup process and give you a better idea on how to setup your application.

## Plugins Usage

### Definition

As in many other frameworks and even in general in programming languages, plugins are pre-built libraries that add extra functionality to our application. In Vue.js, there's no difference, plugins add extra funcionality to our Vue.js application in a global scope.

As per the official documentation, we could split plugins based on the following main purposes:

- To add global methods or properties.
- To add global assets.
- To add global options through global mixins.
- To add global methods attached to Vue prototype.

However, there are plugins that could include all of the purposes mentioned above.

### Installing Plugins

In order to implement a plugin in your Vue.js application, you should:

- Install the desired plugin if required, for example using npm or yarn.
- Include the plugin in your Vue.js instance, taking advantage of the `Vue.use` command as shown below

```javascript
// Create Vue Instance
var Vue = require('vue');
// Create Plugin Instance
var VueRouter = require('vue-router');
// Use/Implement plugin
Vue.use(VueRouter);
```

## Vue-CLI

As its name describes, Vue.js command line interface is a powerful tool that allow us to improve our development process with multiple features.

::: warning NOTE
This documentation is referencing the updated @vue/cli.
:::

### Installation

The installation process is very straightforward whether using yarn or npm:

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

After installing it, you have the `vue` command globally available. If you want to check it you just need to type in your terminal the following command:

```bash
vue --version
```

### Main Features

Even though Vue CLI offers multiple features, here are the most relevant ones and its main funtionality:

#### Creating Projects

Vue CLI allow us to create a new Vue.js project using a guided setup. In order to start using the command you need to type the following command:

```bash
vue create my-app
```

This will start the process of creating a new fresh Vue.js application under the `my-app`, and eventually ask for the proper questions to configure your project with the desired options.

`vue create` CLI command offers you two ways of configuring, the first is selecting a pre-configured package with ESLint or Babel. The second one is manually selecting the multiple available options based on your needs, this includes:

- Babel
- TypeScript
- PWA Support
- Router
- Vuex
- CSS Pre-processors
- Linter/Formatters
- Unit Testing
- E2E Testing

#### Adding Plugins and Presets

With the `vue add` command you can easily add new features through plugins to your existing app. For instance, here is an example of adding Vuetify plugin to our project:

```bash
vue add vuetify
```

#### Vue CLI Service

This is probably one of the most useful tools when it comes to Vue CLI, It includes a set of multiple options that allow us to run basic and relevant tasks during our development process such as serve or build our project. Usually, the presets when creating new projects include npm scripts using this service tool.

```json
{
	"scripts": {
		"serve": "vue-cli-service serve",
		"build": "vue-cli-service build"
	}
}
```

## Suggested Folder Structure

When it comes to folders structure, there are multiple proposals and open discussions about the definitive answer. There's not something such as a ideal folders structure, that's why the recommendation is to always think about the project's needs and then make your folders structure meet those needs.

However, Vue CLI offers a really good skeleton of folder structure, and it's the one we suggest as an initial start point:

```
.
├── README.md
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── app
│   ├── assets
│   ├── components
│   ├── main.js
│   ├── plugins
│   ├── router
│   ├── store
│   └── views
└── vue.config.js
```

This structure can be different depending on the set of options you choose, let's deep dive into the main folders and files:

- **babel.config.js:** transpiler configurations.
- **jsconfig.json:** compiler configurations.
- **package.json / package-lock.json:** project configurations.
- **public:** public files storage.
- **src:** main source code folder.
- **src/app:** app main Vue component.
- **src/assets:** folder to include local non public assets.
- **src/components:** main components allocation folder.
- **src/main.js:** application entry point, this is where typically the main instance of Vue is defined.
- **src/plugins:** stores all our installed pluings.
- **src/router:** routing specific configurations.
- **src/router:** routing specific/centralized configurations.
- **src/store:** store definition and configuration files. Here we include our getters, actions and mutations.
- **src/views:** this is where our render pages reside and where typically components are assembled.

::: warning NOTE
All the Vue components in this structure have been transformed from Single File Components to splitted SFCs.
:::

## Additional Links

- [Plugins in Depth](https://vuejs.org/v2/guide/plugins.html#ad) Learn more about plugins and how to create your owns.
- [Splitting Components](https://nullcast.io/split-vue-js-components-into-multiple-files/) Split components into multiple files.
- [Vue CLI](https://cli.vuejs.org/guide/) Read more about this useul tool.

## Project Tasks

It's time to start with our very first set of tasks to build our Podcast Player application. Now that you've learnt the basic concepts of Vue.js, let's start building the application's skeleton:

1. Install a fresh Vue.js application using Vue CLI.
2. Install Vuetify as a plugin.
3. As an additional task, please include the file provided in the resolution step #3 in your folder's structure. This is the API you'll be using in the overall development process. We provide you with this tool with the intention of keep you focused on Vue.js related content.

::: tip TIP
Run carefully each step of the configuration process while using the CLI.
:::

## Resolution

Let's take a look at our suggested resolution for this two main tasks:

1. [Application Setup](https://github.com/gorillalogic/vuejs-training/pull/1/)
2. [Vuetify Installation](https://github.com/gorillalogic/vuejs-training/pull/2)
3. [API](https://github.com/gorillalogic/vuejs-training/pull/3)
