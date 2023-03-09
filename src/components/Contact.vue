<template>
  <router-link class="contact flex" :to="{ name: 'contact', params: { id: contact.id } }">
    <div class="contact-group flex-column">
      <span class="contact-title" data-test="name">{{ contact.name }}</span>
    </div>
    <div class="flex contact-edit">
      <button @click.prevent="editContact" type="button" data-test="edit-btn">
        <SvgIcon name="edit-icon" />
      </button>
      <button @click.prevent="deleteContact" type="button"><SvgIcon name="delete-icon" /></button>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/Base/SvgIcon.vue'
import { defineProps } from 'vue'
import type { IContact } from '@/types/contact'

interface Props {
  contact: IContact
}
const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'edit', id: string): void
  (e: 'delete', id: string): void
}>()

const editContact = () => {
  emits('edit', props.contact.id)
}
const deleteContact = () => {
  emits('delete', props.contact.id)
}
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
