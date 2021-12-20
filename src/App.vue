<template>
  <div id="app">
    <div class="header"></div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 48px;
  background-color: #181818;
  border-bottom: 1px solid #f1f1f1;
}
</style>