import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    // main
    
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Market.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue')
    },
    {
        path: '/games',
        name: 'Games',
        component: () => import('../views/Games.vue')
    },
    {
        path: '/market',
        name: 'Maket',
        component: () => import('../views/Market.vue')
    },

    // authentication 

    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue')
    },
    {
        path: '/auth/steam',
        name: 'Steam Auth',
        component: () => import('../views/auth/Steam.vue')
    },

    // error

    {
        path: '*',
        name: '404 - Page Not Found.',
        component: () => import('../views/error/404.vue')
    }
]

const router = new VueRouter({ routes })
  
export default router