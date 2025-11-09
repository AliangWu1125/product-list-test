<script setup>
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <el-select
    :model-value="modelValue"
    placeholder="排序"
    clearable
    @update:model-value="emit('update:modelValue', $event)"
  >
    <el-option label="不排序" value="" />
    <el-option label="價格：高到低" value="price-desc" />
    <el-option label="價格：低到高" value="price-asc" />
    <el-option label="庫存：高到低" value="stock-desc" />
    <el-option label="庫存：低到高" value="stock-asc" />
  </el-select>
</template>
