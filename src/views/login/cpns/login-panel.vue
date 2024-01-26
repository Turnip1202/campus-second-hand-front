<script lang="ts" setup>
import { UserFilled, Message } from '@element-plus/icons-vue';
import loginAccount from './login-account.vue';
</script>

<template>
  <div class="login-panel">
    <h1 class="title">校园交易平台</h1>
    <div class="panel-main-content">
      <el-tabs type="card" stretch>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账户登陆</span>
            </span>
          </template>
          <loginAccount></loginAccount>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <el-icon><Message /></el-icon>
            <span>邮箱登陆</span>
          </template>
          <loginAccount></loginAccount>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-panel {
  width: 30vw;
  padding: 1vw;
  box-sizing: border-box;
  // 阴影
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  .title {
    margin: 0;
    padding: 0;
    color: $global-color;
    height: 3vw;
    font-weight: 400;
    font-size: 2vw;
    line-height: 3vw;
    text-align: center;
  }

  .panel-main-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
