<template>
  <div>
    <div v-if="loading">
      Loading users list ...
    </div>
    <ul v-else>
      <li v-for="user in users" :key="user.login">
        <nuxt-link :to="user.html_url">
          {{ user.login }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      users: []
    }
  },
  mounted () {
    const port = ((window || {}).location || {}).port || '3003'
    this.$axios.$get(`http://localhost:${port}/users`)
      .then((users) => {
        setTimeout(() => {
          this.loading = false
          this.users = users
        }, 1000)
      })
  }
}
</script>
