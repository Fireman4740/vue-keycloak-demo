<template>
  <div class="about">
    <h1>Launchpad</h1>
    <div style="margin-top: 20px; margin-bottom: 20px">Hello {{ firstName }} {{ lastName }} !! You are in the white list (role vue).</div>
    <div  > 
    <v-card
    class="d-flex justify-center"
    max-width="344"
    rounded
   
    style="margin: auto"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          GreatCoin
        </div>
        <v-list-item-title class="text-h2 mb-1">
          
        </v-list-item-title>
        <v-list-item-subtitle>the revolution is underway!</v-list-item-subtitle>
      </v-list-item-content>

      
    </v-list-item>

    <v-card-actions>
       <v-btn style="margin: auto"
        rounded
        text
        center
        outlined
        elevation="2"
      >
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>
  
    
 </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Secured',
  data: function () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  beforeMount() {
    this.firstName = Vue.$keycloak.tokenParsed.given_name
    this.lastName = Vue.$keycloak.tokenParsed.family_name
  },
  methods: {
    logout () {
      Vue.$keycloak.logout({ redirectUri: window.location.origin })
    }
  }
}
</script>

 <style scoped lang="scss">

 </style>
