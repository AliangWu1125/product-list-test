<script setup>
import { ElMessage } from 'element-plus'

const props = defineProps({
  modelValue: Number,
  productName: String,
})
const emit = defineEmits(['update:modelValue'])

function handleChange(val) {
  if (!Number.isInteger(val) || val < 0) {
    ElMessage.error('請輸入有效整數')
    return
  }
  ElMessage.success(`「${props.productName}」庫存更新為 ${val}`)
  emit('update:modelValue', val)
}
</script>

<template>
  <el-input-number :model-value="modelValue" @change="handleChange" :min="0" size="small" />
</template>
