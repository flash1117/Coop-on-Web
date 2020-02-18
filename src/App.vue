<template>
    <v-app>
        <!-- <NewNav/> -->
        <Sidebar/>
        <v-content style="padding-top: 24px">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NewNav from "./views/NewNav";
    import Sidebar from "./views/Sidebar";
    export default {
        name: 'App',

        components: {
            NewNav,
            Sidebar,
          
        },
    };
</script>

<style scoped>
    a{
        color: white !important;
        text-decoration: none;
    }
</style>
