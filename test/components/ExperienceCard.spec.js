import { mount } from '@vue/test-utils'
import ExperienceCard from '../../components/ExperienceCard.vue'

describe('Experience.vue', () => {
  it('should display a card with info', () => {
    const wrapper = mount(ExperienceCard, {
      propsData: {
        experience: [{ title: 'title', timespan: '2021', description: 'description' }]
      },
      stubs: {
        fa: true
      }
    })
    expect(wrapper.text()).toContain('Ervaring')
    expect(wrapper.text()).toContain('title')
    expect(wrapper.text()).toContain('2021')
    expect(wrapper.text()).toContain('description')
  })
})
