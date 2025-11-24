# 後台產品列表功能

這是簡單的Demo，使用Vue 3 和Element Plus 實作。

您可以透過以下連結，直接瀏覽線上運作的成果：

網站連結:https://aliangwu1125.github.io/product-list-test/

---

## 專案介紹 (About The Project)

## ✨ 已實作功能 (Features)

* **產品列表**：使用 `el-table` 展示所有產品資料。
* **搜尋功能**：可依「商品名稱」即時篩選產品 。
* **庫存調整**：可手動調整單一產品的庫存數量，並有成功提示 。
* **UI/UX 優化**
    * **排序功能**：可依價格、庫存進行升冪/降冪排序。
    * **分類篩選**：可依產品分類進行篩選。
    * **分頁功能**：當資料過多時，自動顯示分頁。
    * **響應式設計**：篩選器在小畫面上會自動換行。

## 使用技術 (Tech Stack)

* **Vue 3** (使用 `<script setup>` 語法的組合式 API)
* **Vite** (作為建置工具)
* **Element Plus** (用於快速建構 UI 介面，如 Table, Select, InputNumber 等)
* **GitHub Actions** (用於自動化 CI/CD 部署至 GitHub Pages)

## 如何在本地運行 (Getting Started)

如果您想在本地端運行此專案：

1.  複製此儲存庫
    ```bash
    git clone [https://github.com/AliangWu1125/product-list-test.git](https://github.com/AliangWu1125/product-list-test.git)
    ```
2.  進入專案資料夾
    ```bash
    cd product-list-test
    ```
3.  安裝依賴
    ```bash
    npm install
    ```
4.  啟動開發伺服器
    ```bash
    npm run dev
    ```
