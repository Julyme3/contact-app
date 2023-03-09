import { test, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/Base/Button/Button.vue'

describe('Button renders', () => {
  test('with default label when prop label not passed', () => {
    const wrapper = mount(Button)
    expect(wrapper.text()).toBe('Button')
  })

  test('with passed label prop', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test Button'
      }
    })

    expect(wrapper.text()).toBe('Test Button')
  })
})

describe('Button events', () => {
  test('called emit when user clicked', () => {
    const wrapper = mount(Button)

    wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
