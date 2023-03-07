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

const contactsStore = useContactsStore()

const editContact = (id: string) => {
  contactsStore.setActiveContactId(id)
  contactsStore.setEditingContact(true)
  contactsStore.toggleContactModal()
}

const deleteContact = (id: string) => {
  contactsStore.deleteContact(id)
}
</script>
