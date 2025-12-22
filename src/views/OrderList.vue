<script setup lang="ts">
import TableFooter from '@/components/TableFooter.vue'
</script>
<template>
  <div>
    <h1>訂單列表</h1>
    <p>這裡是訂單管理的頁面</p>
  </div>
  <TableFooter>
    <template #total>商品總數:{{}}筆</template>
    <template #pagination>
      <el-pagination background layout="prev, pager, next" />
    </template>
  </TableFooter>
</template>
