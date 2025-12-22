<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useTagsViewStore } from '@/stores/tagsView' 
import { storeToRefs } from 'pinia'
import { Close } from '@element-plus/icons-vue'
import { onMounted, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const tagsStore = useTagsViewStore()
const { visitedViews } = storeToRefs(tagsStore)

function isAffix(tag: any) {
  return tag.meta && tag.meta.affix
}
function initTags() {
  const routes = router.getRoutes()
  routes.forEach((item) => {
    if (item.meta && item.meta.affix) {
      const tagPath = {
        path: item.path,
        name: item.name,
        meta: { ...item.meta },
      }
      tagsStore.addView(tagPath)
    }
  })
}
function isActive(tag: any) {
  return tag.path === route.path
}

function closeTag(tag: any) {
  if (isAffix(tag)) return
  tagsStore.delView(tag)
  if (isActive(tag)) {
    const latest = visitedViews.value.slice(-1)[0]
    if (latest) router.push(latest.path)
    else router.push('/')
  }
}
function addTags() {
  if (route.name) {
    tagsStore.addView(route)
  }
}
watch(route, () => {
  if (route.name) tagsStore.addView(route)
})
onMounted(() => {
  initTags()
  addTags()
})
</script>

<template>
  <div class="tags-view-container">
    <router-link
      v-for="tag in visitedViews"
      :key="tag.path"
      :to="tag.path"
      class="tags-view-item"
      :class="{ active: isActive(tag) }"
    >
      {{ tag.title }}
      <el-icon v-if="!isAffix(tag)" class="close-icon" @click.prevent.stop="closeTag(tag)"
        ><Close
      /></el-icon>
    </router-link>
  </div>
</template>

<style scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.tags-view-item {
  display: inline-flex;
  align-items: center;
  height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  text-decoration: none;
}
.tags-view-item.active {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
.close-icon {
  margin-left: 5px;
  border-radius: 50%;
}
.close-icon:hover {
  background-color: #b4bccc;
  color: #fff;
}
</style>
