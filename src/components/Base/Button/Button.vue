<template>
  <button
      :class="[
      `btn btn-${color}`,
      {
        'btn-large': size === 'large'
      }
    ]"
      type="button"
      @click="onClickBtn"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Size } from './types'
interface Props {
  label?: string
  color?: string
  size?: Size
}

withDefaults(defineProps<Props>(), {
  label: 'Button',
  color: 'primary',
  size: Size.normal
})

const emit = defineEmits(['click'])
const onClickBtn = () => {
  emit('click')
}
</script>

<style lang="less">
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s background-color;

  &-primary {
    background-color: var(--primary);
    border: 1px solid var(--primary);

    &:enabled:hover {
      background-color: var(--primary-hover);
    }
  }

  &-second {
    background-color: var(--second);
    border: 1px solid var(--second);

    &:enabled:hover {
      background-color: var(--second-hover);
    }
  }
}
</style>
