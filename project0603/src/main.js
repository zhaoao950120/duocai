// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/common.css'
import $ from 'jquery'
// import axios from 'axios'

/*引入资源请求插件*/
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueResource)
// import VueAxios from 'vue-axios'
// Vue.prototype.$ajax = axios
// Vue.use(axios)
// import 'bootstrap'
// import 'bootstrap/js/bootstrap.min.js'
// import 'bootstrap/css/bootstrap.min.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
