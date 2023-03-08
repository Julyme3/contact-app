<template>
  <div class="form-add">
    <div class="form-add-wrap">
      <div class="form-add-field">
        <label for="tags" class="form-add-label">Теги:</label>
        <input
          class="form-add-input"
          id="tags"
          type="text"
          v-model.trim="tagValue"
          placeholder="Добавить теги"
        />
      </div>
      <Button
        class="form-add-btn"
        color="second"
        label="Добавить"
        @click="addTag"
        :disabled="!tagValue.length"
      />
    </div>
    <TagList :tags="tags" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import TagList from '@/components/TagList.vue'
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

<style scoped lang="less">
.form-add {
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

  &-wrap {
    display: flex;
    gap: 20px;
    align-items: end;
    margin-bottom: 10px;
  }

  &-field {
    flex: 1;
  }

  &-btn {
    margin: 0;
  }
}
</style>
