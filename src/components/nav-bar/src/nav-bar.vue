<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';
import type { PropType } from 'vue';
import { INavBar } from '../types';
import { Search } from '@element-plus/icons-vue';
import { defaultConfig } from '../config/default.config';
const props = defineProps({
  config: {
    type: Object as PropType<INavBar>,
    default() {
      return defaultConfig;
    },
  },
});

const refProps = ref<INavBar>(props.config);
const searchValue = ref<null>();

const toLogin = () => router.push('/login');
const toRegister = () =>
  ElNotification({
    title: 'Info',
    type: 'info',
    message: '该功能未开放',
    position: 'bottom-right',
  });
</script>

<template>
  <div class="nav-header">
    <a href="/" class="title">{{ refProps.title }}</a>
    <div class="fooOne fooCommon">
      <slot name="fooOne">{{ refProps.fooOne }}</slot>
    </div>
    <div class="search">
      <div class="mt-4">
        <el-input
          size="large"
          :placeholder="refProps.searchText"
          class="input-with-select"
          v-model="searchValue"
        >
          <template #append>
            <el-button :icon="Search"></el-button>
          </template>
        </el-input>
      </div>
    </div>
    <div class="fooTwo fooCommon">
      <slot name="fooTwo">{{ refProps.fooTwo }}</slot>
    </div>
    <div class="loginAndRegister">
      <el-link type="primary" :underline="false" @click="toLogin" class="login">
        {{ refProps.login }}</el-link
      >

      <el-link
        type="primary"
        :underline="false"
        @click="toRegister"
        class="register"
        >{{ refProps.register }}</el-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav-header {
  height: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .title {
    font-size: 1.5vw;
    line-height: 2vw;
    font-family: '微软雅黑', 'Courier New', Courier, monospace;
    font-weight: 400;
    font-style: normal;
    color: $global-color;
    text-decoration: none;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fooCommon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vw;
  }

  .loginAndRegister {
    width: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    .login {
      flex: 3;
    }
    .register {
      flex: 2;
    }
  }
}
</style>
