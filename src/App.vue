<template>

    <v-app>
    
      <router-view></router-view>
    </v-app>
</template>

<script>
    import router from './router'
    export default {
        router,
        name: 'App',

        components: {
        },

    };
</script>