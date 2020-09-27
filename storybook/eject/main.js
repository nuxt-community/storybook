const {
  // Stories from modules and nuxt config
  stories: nuxtStories,
  // Addons from modules and nuxt config
  addons: nuxtAddons
} = require('../.nuxt-storybook/storybook/main.js')

const stories = [
  // Add your stories here
]
const addons = [
  // Add your addons here
]

module.exports = {
  webpackFinal (config, options) {
    // Integrate nuxt webpack
    config = options.nuxtStorybookConfig.webpackFinal(config, options)
    
    // extend config here
    
    return config
  },
  stories: [].concat(nuxtStories, stories),
  addons: [].concat(nuxtAddons, addons),
}
