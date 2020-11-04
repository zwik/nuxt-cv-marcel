<template>
  <div class="card mt-2 mb-4 pt-2">
    <h2 class="flex flex-wrap items-center justify-left mt-2">
      <fa class="mr-2 icon w-5" :icon="['fas', 'star-of-life']" />
      {{ title }}
    </h2>
    <p v-if="timespan" class="text-xs text-pubrown">
      {{ timespan }}
    </p>
    <p>{{ description }}</p>
    <ul class="flex flex-wrap items-baseline justify-left">
      <li v-for="t in getIcons" :key="t.name">
        <div
          v-if="t.icon"
          class="tech flex flex-no-wrap items-center justify-left pt-1 pb-2 px-2 mr-1 rounded text-pubrown"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span class="tech-icon" v-html="t.icon" />
          <span class="tech-title opacity-0 text-xs ml-2">{{ t.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icons from '~/plugins/tech-icons'

export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    timespan: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: true
    },
    tech: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  computed: {
    getIcons (props) {
      return Icons(props.tech)
    }
  }
}
</script>

<style>
.tech-icon svg {
  width: 1.2rem;
  fill: theme('colors.pubrown');
}
.card {
  border-top: 1px dotted;
  @apply border-gray-400;
}
ul .tech {
  z-index: 1;
  position: relative;
}

.tech span.tech-title {
  @apply opacity-100;
}
</style>
