<template>
  <main class="home">
    <Header @openContactModal="contactsStore.toggleContactModal" />
    <Contact
      v-for="(contact, index) in contactsStore.contactsData"
      :key="contact.id"
      :contact="contact"
      :index="index"
      @edit="editContact"
      @delete="deleteContact"
    />
  </main>
</template>

<script setup lang="ts">
import Contact from '@/components/Contact.vue'
import Header from '@/components/Header.vue'
import { useContactsStore } from '@/stores/contacts'
import type { IContact } from '@/types/contact'

const contactsStore = useContactsStore()

const editContact = (contact: IContact) => {
  contactsStore.setCurrentContact(contact)
  contactsStore.setEditingContact(true)
  contactsStore.toggleContactModal()
}

const deleteContact = (index: number) => {
  contactsStore.deleteContact(index)
}
</script>
