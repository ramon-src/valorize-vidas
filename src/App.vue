<template>
  <div id="app">
    <NavBar/>
    <!-- <Container/> -->
    <router-view/>
    <Footer/>

  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
// import Bulma from 'bulma';


export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
