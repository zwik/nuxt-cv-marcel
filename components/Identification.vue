<template>
  <section class="identification bg-pured text-white text-center px-4 py-4 mb-6">
    <div class="container">
      <h1 class="text-6xl">
        {{ name }}
      </h1>
      <span class="joiner andand hidden sm:inline-block">&amp;&amp;</span>
      <p class="flex flex-wrap items-center justify-center leading-none">
        <span class="joiner bracket hidden sm:inline-block">(</span>
        <span class="phone px-2">{{ phoneNumber }}</span>
        <span class="span joiner divider hidden sm:inline-block">||</span>
        <span class="email px-2">{{ email }}</span>
        <span class="joiner bracket hidden sm:inline-block">)</span>
      </p>
      <span class="joiner andand hidden sm:inline-block">&amp;&amp;</span>
      <p class="flex flex-wrap items-center justify-center leading-none">
        <span class="joiner bracket hidden sm:inline-block">(</span>
        <span class="phone px-2">{{ address }}</span>
        <span class="span joiner divider hidden sm:inline-block">||</span>
        <span class="phone px-2">{{ postalCode }}</span>
        <span class="span joiner divider hidden sm:inline-block">||</span>
        <span class="phone px-2">{{ city }}</span>
        <span class="joiner bracket hidden sm:inline-block">)</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Identification',
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.joiner {
  @apply font-thin;
  @apply text-gray-100;
  @apply mx-2;
  @apply font-mono;
  @apply p-1;
}
</style>
