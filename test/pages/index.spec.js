import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'
import index from '../../pages/index.vue'

jest.mock('../../assets/data/introduction.md', () => {
  return 'jest introduction'
})

describe('index.vue', () => {
  it('should have the proper head meta', () => {
    const localVue = createLocalVue()
    localVue.use(VueMeta, { keyName: 'head' })

    const wrapper = shallowMount(index, {
      localVue
    })
    expect(wrapper.vm.$metaInfo.title).toBe('Marcel van den Bosch, Front End Developer')
  })
})
