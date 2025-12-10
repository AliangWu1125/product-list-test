<script setup lang="ts">
import { ElMessage } from 'element-plus'

const props = defineProps<{ modelValue: number; productName: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

function handleChange(val: number | null) {
  if (val === null || !Number.isInteger(val) || val < 0) {
    ElMessage.error('請輸入有效的數值')
    return
  }
  emit('update:modelValue', val)
}
</script>

<template>
  <el-input-number :model-value="props.modelValue" @change="handleChange" :min="0" size="small" />
</template>
