<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<template>
  <div class="commdity-category">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="全部" name="first">全部</el-tab-pane>
      <el-tab-pane label="数码" name="second">数码</el-tab-pane>
      <el-tab-pane label="家电" name="third">家电</el-tab-pane>
      <el-tab-pane label="户外" name="fourth">户外</el-tab-pane>
      <el-tab-pane label="图书" name="fifth">图书</el-tab-pane>
      <el-tab-pane label="其他" name="sixth">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped></style>
