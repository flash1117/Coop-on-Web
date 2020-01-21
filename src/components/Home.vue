<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        
        <v-subheader class="mt-4 grey--text text--darken-1">User</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>

            <v-list-item-title v-text="item.text" />
            <v-icon color="green">mdi-circle</v-icon>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
          @click="save"
        >
          <v-list-item-action >
            <v-icon  color="grey darken-1">save</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Save Code</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Settings</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-send</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Share Code</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color=#40b09b
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">WhatCode</span>
      </v-toolbar-title>
      <v-spacer />

      <v-btn @click="signUp" depressed class="mr-4" color="black">Sign Up</v-btn>
      <v-btn @click="login" depressed color="black">
        Login
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-row
          justify="center"
        >
        <CodeRender/>

        </v-row>
      </v-container>
    </v-content>
  </v-app>

</template>

<script>
  
  import CodeRender from './CodeOnWeb'
  export default {
    props: {
      source: String,
    },
    components: {
            CodeRender,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'add', text: 'Add Channels' },
        { icon: 'chat', text: 'Messanger' },
        
      ],
      items2: [
        { picture: 28, text: 'Apple' },
        { picture: 38, text: 'Photo' },
        { picture: 48, text: 'Peach' },
        { picture: 58, text: 'Weed' },
        { picture: 78, text: 'spring' },
      ],
    }),
    methods: {
      login() {
        this.$router.push({path: './login'})
      },
      signUp() {
        alert("Sign Up");
      },
      save() {
        alert("Save Code");
      }
    },
    
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>