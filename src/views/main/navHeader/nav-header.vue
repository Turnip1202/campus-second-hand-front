<script lang="ts" setup>
import { useRouter } from 'vue-router';
import navBar from '@/components//nav-bar';
import { Plus, ChatDotRound } from '@element-plus/icons-vue';
import { navBarConfig } from './config/navBar.config';
const router = useRouter();
const toGoods = () => {
  //跳转到物品发布页面
  router.push('/main/publish');
};
</script>

<template>
  <div class="nav-header">
    <navBar :config="navBarConfig">
      <template v-slot:fooOne>
        <el-button
          type="primary"
          @click="toGoods"
          :icon="Plus"
          class="fooCommon"
        >
          物品发布
        </el-button>
      </template>
      <template v-slot:fooTwo>
        <el-button type="primary" :icon="ChatDotRound" class="fooCommon">
          消息通知
        </el-button>
      </template>
    </navBar>
  </div>
</template>

<style scoped lang="scss">
.nav-header {
  //设置下方阴影效果
  box-shadow: 0 2px 4px 0 rgba(113, 106, 106, 0.05);
  background-color: #fff;
}
</style>
