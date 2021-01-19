import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// css 
// import "@/styles/index.scss";
// normalize.css
import 'normalize.css/normalize.css'
Vue.config.productionTip = false
// wowjs 
import 'wowjs/css/libs/animate.css'
// element ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);
// 字体图标库
import "font-awesome/css/font-awesome.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
