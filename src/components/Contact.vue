<template>
  <router-link
      class="contact flex"
      to="/"
  >
    <div class="contact-group flex-column">
      <span class="contact-title">Имя</span>
      <span class="contact-email">Email</span>
    </div>
    <div class="contact-group flex">
      <span class="contact-title">Телефон</span>
    </div>
    <div class="flex contact-edit">
      <SvgIcon name="edit-icon" />
      <SvgIcon name="delete-icon" />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/Base/SvgIcon.vue';
</script>

<style scoped lang="less">
.contact {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 28px 32px;
  background-color: var(--blue);
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
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
    gap: 10px;
    align-items: center;
  }
}
</style>
