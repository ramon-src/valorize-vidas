<template>
  <div id="app">
    <NavBar/>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contato</router-link>
    </nav>
    <router-view />
    <Footer/>

  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Bulma from 'bulma';


export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

