<script setup>
import { ref, computed, watch } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import SortBar from '@/components/SortBar.vue'
import StockControl from '@/components/StockControl.vue'

const products = ref([
  { id: 1, name: 'iPhone 15 Pro', category: '手機', price: 38900, stock: 8 },
  { id: 2, name: 'MacBook Air M3', category: '筆電', price: 42900, stock: 5 },
  { id: 3, name: 'iPad Pro 13"', category: '平板', price: 35900, stock: 6 },
  { id: 4, name: 'Sony WH-1000XM5', category: '耳機', price: 12900, stock: 10 },
  { id: 5, name: 'ASUS Zenbook 14', category: '筆電', price: 36900, stock: 4 },
  { id: 6, name: 'AirPods Pro 2', category: '耳機', price: 7490, stock: 9 },
  { id: 7, name: 'Samsung Galaxy S24', category: '手機', price: 32900, stock: 7 },
  { id: 8, name: 'Lenovo Tab P11', category: '平板', price: 10900, stock: 12 },
])
const searchText = ref('')
const selectedCategory = ref('全部')
const sortOrder = ref('')
const currentPage = ref(1)
const itemsPerPage = 5

const sortStrategies = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'stock-asc': (a, b) => a.stock - b.stock,
  'stock-desc': (a, b) => b.stock - a.stock,
}

const filteredProducts = computed(() => {
  const kw = searchText.value.trim().toLowerCase()
  const sortFn = sortStrategies[sortOrder.value]
  let list = products.value
    .filter((p) => p.name.toLowerCase().includes(kw))
    .filter((p) => selectedCategory.value === '全部' || p.category === selectedCategory.value)
  return sortFn ? [...list].sort(sortFn) : list
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
watch(filteredProducts, () => {
  if (currentPage.value > totalPages.value) currentPage.value = 1
})
</script>

<template>
  <div class="product-list">
    <h1>商品列表</h1>

    <el-row :gutter="20" class="filter-box" align="middle">
      <el-col :xs="24" :sm="12" :md="6"><SearchBar v-model="searchText" /></el-col>
      <el-col :xs="24" :sm="12" :md="6"><SortBar v-model="sortOrder" /></el-col>
      <el-col :xs="24" :sm="12" :md="6">
        <el-select v-model="selectedCategory" placeholder="分類" clearable>
          <el-option label="全部商品" value="全部" />
          <el-option label="手機" value="手機" />
          <el-option label="筆電" value="筆電" />
          <el-option label="平板" value="平板" />
          <el-option label="耳機" value="耳機" />
        </el-select>
      </el-col>
    </el-row>

    <el-table :data="paginatedProducts" border stripe style="margin-top: 20px">
      <el-table-column prop="name" label="商品名稱" />
      <el-table-column prop="category" label="分類" />
      <el-table-column label="價格">
        <template #default="{ row }">NT${{ row.price.toLocaleString() }}</template>
      </el-table-column>
      <el-table-column label="庫存">
        <template #default="{ row }">
          <StockControl v-model="row.stock" :productName="row.name" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.product-list {
  padding: 24px;
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 100px;
}
.filter-box {
  margin-bottom: 20px;
}

.mobile-card-list {
  display: none;
}

.desktop-table {
  display: table;
}
.footer {
  position: fixed;
  bottom: 3%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dcdfe6;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  z-index: 10;
}

.total {
  text-align: left;
  font-weight: 500;
}

.pagination {
  justify-self: center;
}

@media (max-width: 768px) {
  .desktop-table {
    display: none;
  }

  .mobile-card-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  .mobile-card {
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    padding: 16px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

    h3,
    p {
      margin: 4px 0;
      color: #333;
      font-size: 14px;
    }

    h3 {
      font-weight: 600;
    }
  }

  .stock {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .footer {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 6px;
    padding: 10px 0;
  }

  .total {
    text-align: center;
  }

  .pagination {
    justify-self: center;
  }
}
</style>
