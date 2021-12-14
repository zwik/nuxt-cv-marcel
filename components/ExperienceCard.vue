<template>
  <section class="experience px-4 py2 m-2">
    <h1>Ervaring</h1>
    <DisplayCard
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
import DisplayCard from './DisplayCard'

export default {
  name: 'ExperienceCard',
  components: {
    DisplayCard
  },
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>
