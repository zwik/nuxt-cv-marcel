import { shallowMount } from '@vue/test-utils'
import defaultLayout from '../../layouts/default.vue'

describe('default.vue', () => {
  it('should have a default template', () => {
    const wrapper = shallowMount(defaultLayout, {
      stubs: {
        Nuxt: true
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
