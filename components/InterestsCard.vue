<template>
  <section class="interests px-4 py-2 m-2 mb-8">
    <h1>
      Interesses
    </h1>
    <DisplayCard
      v-for="interest in interests"
      :key="interest.title"
      :title="interest.title"
      :description="interest.description"
      :tech="interest.tech"
    />
  </section>
</template>

<script>
import DisplayCard from './DisplayCard'

export default {
  name: 'InterestsCard',
  components: {
    DisplayCard
  },
  props: {
    interests: {
      type: Array,
      required: true
    }
  }
}
</script>
