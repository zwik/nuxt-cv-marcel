<template lang="md">
  <section class="intro" v-html="introduction" />
</template>

<script>
export default {
  title: 'Introduction',
  props: {
    introduction: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.identification h1 {
  color: white;
}
</style>
