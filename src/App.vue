<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/secured">Secured</router-link>
      
      <button v-if="!isAuthenticated" class="btn" @click="login">Login</button>
      <button v-else class="btn" @click="logout">Logout</button>
      
    </div>
    <router-view/>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  computed: {
    isAuthenticated: () => {
      return Vue.$keycloak.authenticated
    }
  },
  methods: {
    login () {
      Vue.$keycloak.login({ redirectUri: window.location.origin })
    },
    logout () {
      Vue.$keycloak.logout({ redirectUri: window.location.origin })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn{
  margin-top: 30px;
  color: #42b983;
  font-size: 1.1rem;
  border: #42b983 solid 1px;
  padding: 5px;
  border-radius: 6px;
  margin-left: 5px;
}

</style>