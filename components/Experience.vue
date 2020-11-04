<template>
  <section class="experience px-4 py2 m-2">
    <h1>Ervaring</h1>
    <Card
      v-for="exp in experience"
      :key="exp.title"
      :title="exp.title"
      :timespan="exp.timespan"
      :description="exp.description"
      :tech="exp.tech"
    />
  </section>
</template>

<script>
import Card from './Card'

export default {
  name: 'Experience',
  components: {
    Card
  },
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>
