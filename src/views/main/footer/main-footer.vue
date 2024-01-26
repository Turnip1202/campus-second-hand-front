<script lang="ts" setup>
import { ref } from 'vue';

import { copyright } from './config/footer.config.ts';
import { ICopyright } from './types';
const copyrightInfo = ref<ICopyright>(copyright);
</script>

<template>
  <div style="background-color: #fff">
    <div class="copyright">
      <el-text type="info" class="name">
        Copyright © {{ copyrightInfo.year }}
        &nbsp;
        <el-link type="info" class="link" :href="copyrightInfo.github">
          {{ copyrightInfo.name }}
        </el-link>
        &nbsp; All Rights Reserved.
      </el-text>
      <el-text type="info">
        {{ copyrightInfo.license }}
      </el-text>
    </div>
  </div>
</template>

<style scoped lang="scss">
.copyright {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 5vw;
  padding: 2vw;
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    .link {
      font-weight: 700;
    }
  }
}
</style>
