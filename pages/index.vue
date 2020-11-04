<template>
  <div class="wrap">
    <Identification
      name="Marcel van den Bosch"
      phone-number="+31 (0) 6 10 44 51 85"
      email="m.v.d.bosch@gmail.com"
      address="Middenveld 9"
      postal-code="5126DH"
      city="Gilze"
    />
    <div class="container">
      <div class="lg:flex items-top">
        <Introduction
          class="introduction lg:w-3/5 flex px-4 py-2 m-2"
          :introduction="introduction"
        />
        <Skills class="skills lg:w-2/5 flex px-10 py-5 m-2" :skills="skills" />
      </div>
      <div class="md:flex items-top">
        <Experience class="experience md:w-3/5" :experience="experience" />
        <div class="side md:w-2/5">
          <Strengths
            class="strenghts flex-1 px-10 py-5 m-2"
            :strengths="strengths"
          />
          <Interests
            class="interests flex-1 px-10 py-5 m-2"
            :interests="interests"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/assets/data/data'
import Identification from '~/components/Identification'
import Introduction from '~/components/Introduction'
import Skills from '~/components/Skills'
import Experience from '~/components/Experience'
import Strengths from '~/components/Strengths'
import Interests from '~/components/Interests'

export default {
  components: {
    Identification,
    Introduction,
    Skills,
    Experience,
    Strengths,
    Interests
  },
  data () {
    return {
      ...data
    }
  },
  head () {
    return {
      title: 'Marcel van den Bosch, Front End Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Marcel van den Bosch - CV'
        }
      ]
    }
  }
}
</script>
