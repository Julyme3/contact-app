<template>
  <div class="tags">
    <div class="tags-input-wrap">
      <div class="tags-field-group">
        <label for="tags" class="tags-label">Теги:</label>
        <input
          class="tags-input"
          id="tags"
          type="text"
          v-model.trim="tagValue"
          placeholder="Добавить теги"
        />
      </div>
      <Button
        class="tags-btn"
        color="second"
        label="Добавить"
        @click="addTag"
        :disabled="!tagValue.length"
      />
    </div>
    <div class="tags-list">
      <div v-for="tag in tags" :key="tag" class="tags-item">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import Button from '@/components/Base/Button/Button.vue'

interface Props {
  tags?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => []
})

const emit = defineEmits(['update:tags'])
const tagValue = ref('')

const addTag = () => {
  if (props.tags.includes(tagValue.value)) {
    alert('This tag already exist')
    return
  }

  emit('update:tags', [...props.tags, tagValue.value])
  tagValue.value = ''
}
</script>

<style lang="less">
.tags {
  &-input {
    width: 100%;
    color: var(--blue);
    border-radius: 4px;
    padding: 12px 10px;
    border: none;
    flex: 2 1 0;
  }

  &-label {
    display: block;
    font-size: 12px;
    margin-bottom: 6px;
  }

  &-input-wrap {
    display: flex;
    gap: 20px;
    align-items: end;
    margin-bottom: 10px;
  }

  &-field-group {
    flex: 1;
  }

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

  &-btn {
    margin: 0;
  }
}
</style>
