import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/HelloWorld';
// import Main from './pages/Champion';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
    ]
});

export default router;
