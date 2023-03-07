import { defineStore } from 'pinia'
import type { IContact } from '@/types/contact'

export type RootState = {
  isContactModalShown: boolean
  isEditingContact: boolean
  activeContactId: null | string
  contactsData: IContact[]
}
export const useContactsStore = defineStore('contacts', {
  state: () => {
    return {
      isContactModalShown: false,
      activeContactId: null,
      isEditingContact: false,
      contactsData: []
    } as RootState
  },
  getters: {
    getContactById(state): IContact | null {
      const activeContact = state.contactsData.find(
        (contact: IContact) => contact.id === state.activeContactId
      )
      if (!activeContact) {
        return null
      }

      return activeContact
    }
  },
  actions: {
    toggleContactModal() {
      this.isContactModalShown = !this.isContactModalShown
    },
    setActiveContactId(id: string) {
      this.activeContactId = id
    },
    setContact(payload: IContact) {
      this.contactsData.push(payload)
    },
    deleteContact(id: string) {
      this.contactsData = this.contactsData.filter((contact) => contact.id !== id)
    },
    updateContact(updatedContact: IContact) {
      this.contactsData = this.contactsData.map((contact) => {
        return contact.id === updatedContact.id ? updatedContact : contact
      })
    },
    setEditingContact(payload: boolean) {
      this.isEditingContact = payload
    }
  }
})
