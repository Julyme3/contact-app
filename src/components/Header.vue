<template>
  <header class="header">
    <h1 class="heading-1">Список контактов</h1>
    <div class="header-wrap">
      <div class="search-wrap">
        <input class="search-input" type="text" placeholder="Поиск" />
      </div>
      <button>
        <SvgIcon name="plus-icon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/Base/SvgIcon.vue'
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
