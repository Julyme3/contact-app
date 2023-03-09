import { describe, beforeEach, test, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useContactsStore } from '@/stores/contacts'

describe('Contact Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('increments contactData after additing new contact', () => {
    const contactsStore = useContactsStore()

    expect(contactsStore.contactsData.length).toBe(0)
    contactsStore.setContact(testData())

    expect(contactsStore.contactsData.length).toBe(1)
  })

  test('increments contactData after additing new contact', () => {
    const contactsStore = useContactsStore()

    expect(contactsStore.contactsData.length).toBe(0)
    contactsStore.setContact(testData())

    expect(contactsStore.contactsData.length).toBe(1)
  })

  test('decrements contactData after deleting contact', () => {
    const contactsStore = useContactsStore()
    contactsStore.$patch({
      contactsData: [testData()]
    })
    expect(contactsStore.contactsData.length).toBe(1)

    contactsStore.deleteContact('1')

    expect(contactsStore.contactsData.length).toBe(0)
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
