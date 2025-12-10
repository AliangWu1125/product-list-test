<script setup lang="ts">
import { SORT_OPTIONS, type SortOrder } from '@/types/product'
const props = defineProps<{
  modelValue: SortOrder
}>()
const emit = defineEmits<{ (e: 'update:modelValue', value: SortOrder): void }>()
</script>

<template>
  <el-select
    :model-value="modelValue"
    placeholder="排序"
    clearable
    @update:model-value="emit('update:modelValue', $event)"
  >
    <el-option v-for="opt in SORT_OPTIONS" :key="opt.value" :label="opt.label" :value="opt.value" />
  </el-select>
</template>
