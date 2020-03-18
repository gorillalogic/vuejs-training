# Configurations

## Vue Loader

`vue-loader` is a loader for [webpack](https://webpack.js.org/) that transforms Vue components into plain JavaScript module.

### Using Pre-processors

In webpack, all pre-processors need to be applied with a corresponding loader, this is where `vue-loader` comes handy.

### Assert URL Handling

By default, `vue-loader` processes styles and templates files with [css-loader](https://github.com/webpack/css-loader) and Vue.js template compiler.

### Advanced Loader Configuration

In case you want to: apply a custom loader string, overwrite the built-in loader configuration, pre-process a specif language you need to specify the `loaders` option for `vue-loader`.

### Extracting CSS File

To do this you need to install a library:

```bash
npm install extract-text-webpack-plugin --save-dev
```

### Custom Blocks

You can define custom language blocks inside `*.vue` files. The content of a custom block will be processed by the loaders specified in the `loaders` object of `vue-loader` options and then required by the component module.

## Additional Links

[Vue Loader](https://vue-loader-v14.vuejs.org/en/)
[Vue CLI - Configuration Reference](https://cli.vuejs.org/config/#global-cli-config)
