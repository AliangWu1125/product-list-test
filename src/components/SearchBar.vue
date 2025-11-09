<script setup>
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <el-input
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    placeholder="搜尋商品名稱"
    clearable
    prefix-icon="Search"
  />
</template>
