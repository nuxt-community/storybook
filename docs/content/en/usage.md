---
title: Usage
description: 'Using Storybook with NuxtJS is simple, add your stories and run nuxt storybook command.'
position: 2
category: Guide
---

First, we need to add the stories for our components, by default `@nuxtjs/storybook` will look into `~/components/**/*.stories.js`.

```bash
components/
  Link.vue
  Link.stories.js
pages/
  index.vue
nuxt.config.js
```

<code-group>
  <code-block label="Link.vue" active>

  ```html
  <template>
    <nuxt-link to="https://nuxtjs.org">
      NuxtJs
    </nuxt-link>
  </template>
  ```

  </code-block>
  <code-block label="Link.stories.js">

  ```js
  // This example assumes you have the `components: true` option 
  // set in `nuxt.config.js`.
  export default {
    title: 'Link'
  }

  export const NuxtWebsite = () => '<Link />'
  ```

  </code-block>
</code-group>

Then we can run the [development command](/commands#development) with `npx nuxt storybook` and go to [http://localhost:3003](http://localhost:3003), you will see our first story:

![nuxt-storybook-screenshot](/screenshot.png)

<alert type="info">

You can extend where `@nuxtjs/storybook` will load the stories in the [stories option](/options#stories).

</alert>

Learn more about [writing stories for your Vue components](https://storybook.js.org/docs/guides/guide-vue/#step-4-write-your-stories) on Storybook official documentation.
