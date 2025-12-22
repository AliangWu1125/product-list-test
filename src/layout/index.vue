<script setup lang="ts">
import TagsView from '@/components/TagsView/index.vue'
</script>
<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <el-menu
        router
        background-color="#304156"
        text-color="#fff"
        active-text-color="#409EFF"
        style="border: none"
      >
        <el-menu-item index="/dashboard">首頁</el-menu-item>
        <el-menu-item index="/products">商品列表</el-menu-item>
        <el-menu-item index="/orders">訂單列表</el-menu-item>
      </el-menu>
    </div>

    <div class="main-container">
      <div class="header">Header</div>

      <TagsView />

      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}
.sidebar-container {
  width: 210px;
  background-color: #304156;
  height: 100%;
  overflow-y: auto;
}
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.header {
  height: 50px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.app-main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
}
</style>
