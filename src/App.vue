<template>
  <div id="app">
    <NavBar/>
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

<style lang="scss" src="./assets/sass/_styles.scss"></style>
