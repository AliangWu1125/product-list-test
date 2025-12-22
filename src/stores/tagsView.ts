import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTagsViewStore = defineStore('tagsView', () => {
  const storedTags = localStorage.getItem('visitedViews')
  const visitedViews = ref<any[]>(storedTags ? JSON.parse(storedTags) : [])

  function addView(view: any) {
    if (visitedViews.value.some((v) => v.path === view.path)) return

    visitedViews.value.push({
      path: view.path,
      name: view.name,
      meta: view.meta,
      query: view.query,
      params: view.params,
      title: view.meta?.title || '未命名',
    })
  }

  function delView(view: any) {
    const index = visitedViews.value.findIndex((v) => v.path === view.path)
    if (index > -1) {
      visitedViews.value.splice(index, 1)
    }
  }
  watch(
    visitedViews,
    (newVal) => {
      localStorage.setItem('visitedViews', JSON.stringify(newVal))
    },
    { deep: true },
  )

  return { visitedViews, addView, delView }
})
