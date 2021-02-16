//import Vue from 'vue'
import VueRouter from 'vue-router'
import TeamsList from '../components/teams/TeamsList.vue'
import UserList from '../components/users/UserList.vue'
import AboutUs from '@/components/teams/about/AboutUs'
import TeamMembers from '@/components/teams/TeamMembers'
Vue.use(VueRouter)


const routes = [{


        path: '/teams',

        component: TeamsList,

    },
    {
        path: '/users',

        component: UserList
    },
    {
        path: '/about',
        component: AboutUs
    },
    {
        path: '/teams/:teamid',
        component: TeamMembers,

    }




]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router