import Vue from 'vue'
import Router from 'vue-router'
//import Home from "../components/home";
import Login from "../components/login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }/*,
    {
      path: '/login',
      name: 'login',
      component: Login
    }*/
  ]
})
