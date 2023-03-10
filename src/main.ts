import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import { store, key } from "./store/index.js";
// or use cdn, uncomment cdn link in `index.html`

import "@/styles/index.scss";
// If you want to use ElMessage, import it.
// import "element-plus/theme-chalk/src/message.scss"
const app = createApp(App);

app.use(router);
app.use(store,key);

app.mount("#app");
