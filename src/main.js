import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// createApp(App).use().mount('#app')

// khởi tạo ứng dụng
const app = createApp(App);

// sử dụng các tiện ích
app.use(router);

// gán giao diện
app.mount("#app")
