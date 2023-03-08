<template>
  <main class="home">
    <SearchAndAdd v-model:query.trim="query" @openContactModal="contactsStore.toggleContactModal" />
    <Contact
      v-for="(contact, index) in filteredContact"
      :key="contact.id"
      :contact="contact"
      :index="index"
      @edit="editContact"
      @delete="deleteContact"
    />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Contact from '@/components/Contact.vue'
import SearchAndAdd from '@/components/SearchAndAdd.vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()

const query = ref('')
const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ')
})

const filteredContact = computed(() => {
  return contactsStore.contactsData.filter(({ name, email, phone }) => {
    return Boolean(
      email.includes(trimmedQuery.value) ||
        name.includes(trimmedQuery.value) ||
        phone.includes(trimmedQuery.value)
    )
  })
})
const editContact = (id: string) => {
  contactsStore.setActiveContactId(id)
  contactsStore.setEditingContact(true)
  contactsStore.toggleContactModal()
}

const deleteContact = (id: string) => {
  contactsStore.deleteContact(id)
}
</script>
