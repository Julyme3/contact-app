import { defineStore } from 'pinia'
import type { IContact } from '@/types/contact'

export type RootState = {
  isContactModalShown: boolean
  isEditingContact: boolean
  currentContact: IContact | null
  contactsData: IContact[]
}
export const useContactsStore = defineStore('contacts', {
  state: () => {
    return {
      isContactModalShown: false,
      isEditingContact: false,
      currentContact: null,
      contactsData: []
    } as RootState
  },
  getters: {
    // getContactById: (state) => {
    //   return (id: string = state.currentContactId) =>
    //     state.contactsData.find((contact) => {
    //       return contact.id === id
    //     })
    // }
  },
  actions: {
    toggleContactModal() {
      this.isContactModalShown = !this.isContactModalShown
    },
    setCurrentContact(payload: IContact | null) {
      this.currentContact = payload
    },
    setContact(payload: IContact) {
      this.contactsData.push(payload)
    },
    deleteContact(index: number) {
      this.contactsData = this.contactsData.splice(1, index)
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
