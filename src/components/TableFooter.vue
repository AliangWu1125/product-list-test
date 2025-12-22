<template>
  <footer class="table-footer">
    <div class="footer-total">
      <slot name="total"></slot>
    </div>

    <div class="footer-pagination">
      <slot name="pagination"></slot>
    </div>
  </footer>
</template>

<style scoped>
.table-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #dcdfe6;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  transition:
    width 0.3s,
    left 0.3s;
}

.footer-total {
  text-align: left;
  font-weight: 500;
  color: #606266;
}
.footer-pagination {
  justify-self: center;
}

@media (max-width: 768px) {
  .table-footer {
    width: 100%;
    left: 0;
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
}
</style>
