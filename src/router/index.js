import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

Vue.use(VueRouter);

const routes = [

    // main
    
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Market.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/games',
        name: 'Games',
        component: () => import('../views/Games.vue'),
    },
    {
        path: '/market',
        name: 'Maket',
        component: () => import('../views/Market.vue'),
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue'),
        meta: { requiresAuth: true }
    },

    // authentication 

    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
        meta: { guest: true }
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue'),
        meta: { guest: true }
    },
    {
        path: '/auth/token',
        name: 'Two Factor Authentication',
        component: () => import('../views/auth/TwoFactorAuth.vue'),
        meta: { guest: true }
    },
    {
        path: '/auth/steam',
        name: 'Steam Auth',
        component: () => import('../views/auth/Steam.vue'),
        meta: { requiresAuth: true }
    },

    // error

    {
        path: '*',
        name: '404 - Page Not Found.',
        component: () => import('../views/error/404.vue')
    }
];


const router = new VueRouter({
    mode: 'history',
    routes,
});
  

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest))
        if (store.getters.isAuthenticated) return next('account');
    next();
});


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth))
        if (!store.getters.isAuthenticated) return next('auth/login');
    next();
});


export default router;