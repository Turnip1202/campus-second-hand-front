import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 自动导入图标
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

// 全局路径
const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [ElementPlusResolver(), IconsResolver()],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  server: {
    open: true, //设置server，则preview也默认开启
  },
  preview: {
    port: 3001,
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/index.scss";',
      },
    },
  },
});
