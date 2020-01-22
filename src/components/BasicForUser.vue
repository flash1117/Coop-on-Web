<template>
    
<div id="app">
  <v-app>
    <v-content>
      <v-container fluid pa-0>
        <div class="background-shapes-wrapper">
          <div class="background-shapes-container">
            <div class="background-shape circle-one"></div>
            <div class="background-shape circle-two"></div>
            <div class="background-shape square-one"></div>
            <div class="background-shape square-two"></div>
            <div class="background-shape square-three"></div>
            <div class="background-shape triangle-one"></div>
            <div class="background-shape triangle-two"></div>
            <div class="background-shape triangle-three"></div>
            <div class="background-shape rectangle-one"></div>
            <div class="background-shape rectangle-two"></div>
          </div>
        </div>
        <v-layout row wrap>
          <v-flex xs12 sm4 id="sign-in-text-wrapper" v-bind:class="{ switch: isSwitch }">
            <v-layout column align-center justify-center fill-height pa-3>
              <div class="login-wrapper text-xs-center mb-3 pa-5">
                <div class="display-1 font-weight-black mb-3" v-if="isSwitch">Hello, Nice to meet you!</div>
                <div class="display-1 font-weight-black mb-3" v-else>Welcome Back!</div>
                <span class="subheading" v-if="isSwitch">
                    Write your personal details and Co-op with your team.
                    <div>If you already have an account, click Login button.</div>
                </span>
                <span class="subheading" v-else>
                  please login with your account!
                  <div>If you don't have account, please click Sign Up button.</div>
                </span>
                
              </div>
              <v-btn rounded outlined large dark ripple v-if="isSwitch" id="sign-up" @click="isSwitch = !isSwitch">Log In</v-btn>
              <v-btn rounded outlined large dark ripple v-else id="sign-in" @click="isSwitch = !isSwitch">Sign Up</v-btn>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm8 id="sign-up-form-wrapper" class="active" v-bind:class="{ switch: isSwitch}">
            <LoginForm v-if="isSwitch"/>
            <RegistForm v-else/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>

</template>

<script>

import LoginForm from './LoginForm'
import RegistForm from './RegistForm'
export default {
    data: () => ({
    show1: false,
    isSwitch: false,
    password: "Password"
    }),
    components: {
      LoginForm,
      RegistForm,
    },
    methods: {

      goHome() {
        this.$router.push({path : '/'})
      }
    }

}
</script>

<style src="./css/CssForRegist.css">
</style>