<template>
  <section class="interests px-4 py-2 m-2 mb-8">
    <h1>
      Interesses
    </h1>
    <Card
      v-for="interest in interests"
      :key="interest.title"
      :title="interest.title"
      :description="interest.description"
      :tech="interest.tech"
    />
  </section>
</template>

<script>
import Card from './Card'

export default {
  name: 'Interests',
  components: {
    Card
  },
  props: {
    interests: {
      type: Array,
      required: true
    }
  }
}
</script>
