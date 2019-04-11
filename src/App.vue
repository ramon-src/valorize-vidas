<template>
  <div id="app">
    <NavBar />
    <section class="columns">
      <div class="column"></div>
      <div class="column main">
        <router-view />
      </div>
      <div class="column"></div>
    </section>
    <div class="columns">
      <div class="column"></div>
      <div class="column">
        <Footer />
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<style lang="scss"></style>
