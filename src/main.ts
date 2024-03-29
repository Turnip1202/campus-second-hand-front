import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(router).use(store).mount('#app');

console.log(import.meta.env.VITE_APP_NAME);
