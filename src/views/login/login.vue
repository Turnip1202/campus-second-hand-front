<script lang="ts" setup>
import loginPanel from './cpns/login-panel.vue';
</script>

<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
