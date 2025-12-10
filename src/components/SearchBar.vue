<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <el-input
    :model-value="props.modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    placeholder="搜尋商品名稱"
    clearable
    prefix-icon="Search"
  />
</template>
