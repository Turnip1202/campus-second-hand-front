<script lang="ts" setup>
import navHeader from './navHeader/nav-header.vue';
// import commodityComponent from './commodityCategory/commodity-category.vue';
import mainFooter from './footer/main-footer.vue';
</script>

<template>
  <div>
    <el-container class="main-container">
      <div class="main-header">
        <navHeader></navHeader>
      </div>
      <el-main class="main-content">
        <!--目前就是为了展示物品列表， 后续可增加扩展性，如增加更多展示页面 -->
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer height="6vw" class="main-footer">
        <mainFooter></mainFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  //背景设置浅灰色
  background-color: rgba($color: #000000, $alpha: 0.05);
}
.main-header {
  // background-color: #ccc;
  position: sticky;
  top: 0;
  z-index: 999;
}
.main-content {
  // background-color: $global-color;

  display: flex;
  justify-content: center;
  min-height: 30vw;

  .content {
    background-color: #fff;
    width: 72vw;
    /* 阴影 */
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  }
}
.main-footer {
  // background-color: #eee;
  padding: 0;
}
</style>
