<template>
  <section class="skills justify-center items-center">
    <ul class="flex mt-0 text-center lg:mt-10 lg:block lg:w-full">
      <li v-for="icon in getIcons" :key="icon.name" class="item lg:inline-block">
        <div v-if="icon.icon" class="tech py-4 px-4">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span class="tech-icon" v-html="icon.icon" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Icons from '~/plugins/tech-icons'

export default {
  name: 'SkillsContainer',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  computed: {
    getIcons (props) {
      return Icons(props.skills)
    }
  }
}
</script>

<style scoped>
.tech-icon >>> svg {
  width: 100%;
  fill: theme('colors.pured');
}

.skills >>> li .tech-icon svg {
  max-width: 80px;
}
</style>
