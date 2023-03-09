<template>
  <main class="home">
    <SearchAndAdd v-model:query.trim="query" @openContactModal="contactsStore.toggleContactModal" />
    <Contact
      v-for="contact in filteredContact"
      :key="contact.id"
      :contact="contact"
      data-test="contact"
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
import { ContactKeyUnion } from '@/types/contact'

const contactsStore = useContactsStore()

const query = ref('')
const searchByField: ContactKeyUnion[] = ['name', 'email', 'phone', 'tags']
const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ')
})

const filteredContact = computed(() => {
  return contactsStore.contactsData.filter((contact) => {
    return searchByField.some((key) => contact[key]?.includes(trimmedQuery.value))
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
