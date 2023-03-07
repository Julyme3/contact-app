<template>
  <header class="header">
    <h1 class="heading-1">Список контактов</h1>
    <div class="header-wrap">
      <div class="search-wrap">
        <input v-model="localFilterState" class="search-input" type="text" placeholder="Поиск" />
      </div>
      <button type="button" @click="emits('openContactModal')">
        <SvgIcon name="plus-icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/Base/SvgIcon.vue'
import { computed } from 'vue'
const props = defineProps<{
  query: string
}>()

const emits = defineEmits<{
  (e: 'openContactModal'): void
  (e: 'update:query', value: string): void
}>()

const localFilterState = computed({
  get() {
    return props.query
  },
  set(value) {
    emits('update:query', value)
  }
})
</script>

<style scoped lang="less">
.header-wrap {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.search {
  &-wrap {
    flex: 1;
  }

  &-input {
    color: var(--blue);
    font-size: 16px;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid var(--blue);
  }
}
</style>
