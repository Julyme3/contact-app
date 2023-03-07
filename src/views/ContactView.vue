<template>
  <main class="contact-page">
    <h1 class="heading-1">Информация о контакте</h1>
    <ul class="contact-info">
      <li class="contact-item"><span class="contact-field">ФИО</span>: значение ФИО</li>
      <li class="contact-item"><span class="contact-field">Телефон</span>: значение Телефон</li>
      <li class="contact-item"><span class="contact-field">Email</span>: значение Email</li>
    </ul>
    <div class="contacts-btns">
      <Button @click="deleteContact" type="button" label="Удалить" color="primary" />
      <Button @click="editContact" type="button" label="Редактировать" color="second" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Button from '@/components/Base/Button/Button.vue'

const deleteContact = () => {}
const editContact = () => {}
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
