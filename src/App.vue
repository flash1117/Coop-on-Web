<template>
    <v-app>
        <!-- <NewNav/> -->
        <!-- <Sidebar/> -->
        <TopNav/>
        <CodeRoom/>
        <v-content style="padding-top: 24px">
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>
    import NewNav from "./views/NewNav";
    import TopNav from "./views/TopNav";
    import CodeRoom from "./views/CodeRoomDesign";
    export default {
        name: 'App',

        components: {
            NewNav,
            TopNav,
            CodeRoom,
        },
    };
</script>

<style scoped>
    a{
        color: white !important;
        text-decoration: none;
    }
</style>
