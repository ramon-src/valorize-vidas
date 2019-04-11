<template>
  <footer class="footer">
    <div class="footer__social--container">
      <a href="https://www.facebook.com/valorizevidas/" target="_blank">
        <img class="footer__social--icon" :src="require('@/assets/icons/facebook.svg')" />
      </a>
      <a href="https://twitter.com/valorizevidas" target="_blank">
        <img class="footer__social--icon" :src="require('@/assets/icons/twitter.svg')" />
      </a>
      <a href="#" target="_blank">
        <img class="footer__social--icon" :src="require('@/assets/icons/instagram.svg')" />
      </a>
    </div>
    <div class="footer__logo">
      <a href="/">
        <img class="footer--img" :src="require('@/assets/images/logo-horizontal.svg')" />
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
