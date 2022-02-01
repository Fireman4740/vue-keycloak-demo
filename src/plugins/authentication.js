import Vue from 'vue'
import Keycloak from 'keycloak-js'

const options = {
  url: 'https://auth-staging.inblocks.io/auth',
  realm: 'inblocks-ibex',
  clientId: 'ibex-ui'
}

const _keycloak = Keycloak(options)

const Plugin = {
  install(Vue) {
    Vue.$keycloak = _keycloak
  }
}

Plugin.install = Vue => {
  Vue.$keycloak = _keycloak
  Object.defineProperties(Vue.prototype, {
    $keycloak: {
      get() {
        return _keycloak
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
