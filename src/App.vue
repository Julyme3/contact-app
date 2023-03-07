<template>
  <div class="container">
    <transition name="contact">
      <ContactModal v-if="contactsStore.isContactModalShown" />
    </transition>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContactModal from '@/components/ContactModal.vue'
import { useContactsStore } from '@/stores/contacts'
const contactsStore = useContactsStore()
</script>

<style scoped>
.container {
  max-width: 1024px;
  padding: 30px;
  margin: 0 auto;
  outline: 1px solid;
}
</style>
