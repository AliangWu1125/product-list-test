// import './assets/main.css'

// ✅ 1. 匯入 Vue 基本套件
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ✅ 2. 匯入主元件與路由
import App from './App.vue'
import router from './router'

// ✅ 3. 匯入 Element Plus 套件與樣式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ✅ 4. （可選）設定中文語系（Element Plus 內建多語）
import zhTw from 'element-plus/es/locale/lang/zh-tw'

// ✅ 5. 建立 Vue App 並掛載
const app = createApp(App)

app.use(createPinia())
app.use(router)

// ✅ 6. 啟用 Element Plus 並套用語系
app.use(ElementPlus, { locale: zhTw })

app.mount('#app')
