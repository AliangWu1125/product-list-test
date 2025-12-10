export interface Product {
  id: number
  name: string
  category: Category
  price: number
  stock: number
}
export const CATEGORY_LIST = ['手機', '筆電', '平板', '耳機'] as const
export type Category = (typeof CATEGORY_LIST)[number]
export type FilterCategory = Category | '全部'

export type SortOrder = '' | 'price-asc' | 'price-desc' | 'stock-asc' | 'stock-desc'
export const SORT_OPTIONS: { label: string; value: SortOrder }[] = [
  { label: '不排序', value: '' },
  { label: '價格：高到低', value: 'price-desc' },
  { label: '價格：低到高', value: 'price-asc' },
  { label: '庫存：高到低', value: 'stock-desc' },
  { label: '庫存：低到高', value: 'stock-asc' },
]