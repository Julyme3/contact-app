<template>
  <main class="contact-page">
    <h1 class="heading-1">Информация о контакте</h1>
    <template v-if="contact">
      <ul class="contact-info">
        <li class="contact-item"><span class="contact-field">ФИО</span>: {{ contact.name }}</li>
        <li class="contact-item">
          <span class="contact-field">Телефон</span>: {{ contact.phone }}
        </li>
        <li class="contact-item"><span class="contact-field">Email</span>: {{ contact.email }}</li>
      </ul>
      <div class="contacts-btns">
        <Button @click="deleteContact" type="button" label="Удалить" color="primary" />
        <Button @click="editContact" type="button" label="Редактировать" color="second" />
      </div>
    </template>
    <div v-else>Контакт не найден</div>
  </main>
</template>

<script setup lang="ts">
import Button from '@/components/Base/Button/Button.vue'
import { useContactsStore } from '@/stores/contacts'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const contactsStore = useContactsStore()

contactsStore.setActiveContactId(route.params.id as string)
const contact = contactsStore.getContactById

const deleteContact = () => {
  contactsStore.deleteContact(contact!.id)
  router.push({ name: 'home' })
}
const editContact = () => {
  contactsStore.setEditingContact(true)
  contactsStore.toggleContactModal()
}
</script>

<style scoped lang="less">
.contact {
  &-info {
    margin-bottom: 20px;
  }
  &-item {
    margin-bottom: 8px;
  }
  &-field {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
