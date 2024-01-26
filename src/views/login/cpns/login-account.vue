<script lang="ts" setup>
import { UserFilled, Lock } from '@element-plus/icons-vue';
import router from '@/router';

const toMain = () => router.push('/');
</script>

<template>
  <div class="login-form">
    <el-form status-icon>
      <el-form-item prop="pass" class="form">
        <template v-slot:label> 账户: </template>
        <el-input type="text" autocomplete="off">
          <template #prepend>
            <el-icon><UserFilled /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <template v-slot:label> 密码: </template>
        <el-input type="password" autocomplete="off">
          <template #prepend>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <div class="bottom">
        <el-button type="primary">登陆</el-button>
        <el-button type="warning">注册</el-button>
      </div>
      <div class="footer">
        <el-link type="primary" @click="toMain">返回首页</el-link>
        <el-link type="primary">管理员登陆</el-link>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  display: flex;
  width: 100%;
  height: 100;
  justify-content: center;
  align-items: center;
  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1vw;
  }
}
</style>
