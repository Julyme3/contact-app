<template>
  <router-link class="contact flex" :to="{ name: 'contact', params: { id: 1 } }">
    <div class="contact-group flex-column">
      <span class="contact-title">Имя</span>
    </div>
    <div class="flex contact-edit">
      <button @click.prevent="editContact" type="button">
        <SvgIcon name="edit-icon" />
      </button>
      <button @click.prevent="deleteContact" type="button"><SvgIcon name="delete-icon" /></button>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/Base/SvgIcon.vue'

const editContact = () => {
  console.log(1)
}
const deleteContact = () => {}
</script>

<style scoped lang="less">
.contact {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 18px 32px;
  background-color: var(--blue);
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &-title {
    font-size: 24px;
  }

  &-group {
    flex: 1;
    gap: 5px;
  }

  &-edit {
    margin-left: auto;
    gap: 20px;
    align-items: center;
  }
}
</style>
