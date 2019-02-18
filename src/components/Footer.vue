<template>
  <footer>
    <div class="container footer">
      <div class="row footer">
        <div class="footer__social--container">
          <img class="footer__social--logo" :src="require('@/assets/icons/instagram.svg')">
          <img class="footer__social--logo" :src="require('@/assets/icons/instagram.svg')">
          <img class="footer__social--logo" :src="require('@/assets/icons/instagram.svg')">
        </div>
        <img class="footer__logo" :src="require('@/assets/images/logo-horizontal.svg')">
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
