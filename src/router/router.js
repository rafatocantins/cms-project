import Vue from 'vue'
import Router from 'vue-router'
import Login  from '@/components/Login/Login'
import HomeView from '@/components/HomeView/HomeView'

Vue.use( Router )

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
    ],
})
