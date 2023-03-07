<template>
  <component class="svg-container" :is="icon" />
</template>

<script setup lang="ts">
import {defineAsyncComponent, defineProps} from "vue";

interface Props {
  name: string
}

const props = defineProps<Props>()

const icon = defineAsyncComponent(() => import(`../../assets/${props.name}.svg`));
</script>

<style scoped lang="less">
.svg-container {
  display: inline-flex;
  cursor: pointer;
}
</style>
