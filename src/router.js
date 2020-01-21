import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Home from './components/Home'
import BasicForm from './components/BasicForUser'

Vue.use(Router)

export default new VueRouter({
    mode: 'history',
    routes: [

        {path: '/', component : Home},
        {path: '/login', component : BasicForm},
    ],
})
