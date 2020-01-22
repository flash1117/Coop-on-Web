<template>
    
    <v-layout column align-center justify-center pa-3 mt-5>
              <v-flex xs12 mb-3 mt-5>
                <div class="login-wrapper text-xs-center">
                  <v-btn @click="goHome" depressed outlined fab small color="blue-grey lighten-4" class="mr-3 mb-4">
                  <v-icon color="grey darken-4">mdi-home</v-icon>
                  </v-btn>
                  <span class="display-1 font-weight-black">Log In</span>
                </div>
              </v-flex>
              <v-flex xs12 mb-3/>
              <v-flex xs12 class="form-wrapper">
            
                <v-text-field 
                filled full-width single-line label="Email"
                background-color="#f4f8f7"
                color="grey darken-2"
                prepend-inner-icon="mdi-email-outline"
                ></v-text-field>
                <v-text-field 
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  :type="show1 ? 'text' : 'password'" 
                  filled full-width single-line label="Password"
                  background-color="#f4f8f7"
                  color="grey darken-2"
                  prepend-inner-icon="mdi-lock-outline"
                  @click:append="show1 = !show1"></v-text-field>
              </v-flex>
              <v-btn rounded large dark ripple color="teal" id="sign-up">Sign in</v-btn>
    </v-layout>

</template>

<script>
export default {
    name: 'RegistForm',
    methods: {

      goHome() {
        this.$router.push({path : '/'})
      }
    }
}
</script>