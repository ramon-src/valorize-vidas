import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import ContactVolunteer from './views/ContactVolunteer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/voluntario',
      name: 'ContactVolunteer',
      component: ContactVolunteer
    }
  ]
})
