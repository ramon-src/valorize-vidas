<template>
  <div class="card-valorize" v-bind:style="{ 'background-color': bgColor }">
    <img class="icone" v-if="icon" :src="require(`@/assets/icons/${icon}.svg`)" />
    <span class="label">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'icon', 'bgColor']
}
</script>
