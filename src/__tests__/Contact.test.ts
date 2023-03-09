import { test, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

describe('Contact renders', () => {
  test('with correct name when passed prop name', () => {
    const wrapper = mount(Contact, {
      props: {
        contact: testData()
      }
    })

    expect(wrapper.get('[data-test="name"]').text()).toBe('Julia')
  })
})

describe('Contact events', () => {
  test('called edit emit with correct arguments', () => {
    const wrapper = mount(Contact, {
      props: {
        contact: testData()
      }
    })

    wrapper.get('[data-test="edit-btn"]').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('edit')
  })
})

function testData() {
  return {
    id: '1',
    name: 'Julia',
    phone: '9888881111',
    email: 'test1@mail.ru'
  }
}
