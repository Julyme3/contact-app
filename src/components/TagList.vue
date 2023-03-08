<template>
  <div class="tags">
    <div class="tags-list">
      <div v-for="tag in tags" :key="tag" class="tags-item">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  tags?: string[]
}

withDefaults(defineProps<Props>(), {
  tags: () => []
})
</script>

<style lang="less">
.tags {
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 0;
  }

  &-item {
    display: flex;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 8px;
    user-select: none;
    background-color: var(--grey);
    color: var(--brend);
  }
}
</style>
