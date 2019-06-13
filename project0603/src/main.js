// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'

import '@/assets/css/common.css'

import $ from 'jquery'

// import '@/assets/css/swiper-3.4.2.min.css';
// import axios from 'axios'

/*引入资源请求插件*/
import VueResource from 'vue-resource'

/*使用VueResource插件*/
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(ElementUI);
// import VueAxios from 'vue-axios'
// Vue.prototype.$ajax = axios
// Vue.use(axios)
// import 'bootstrap'
// import 'bootstrap/js/bootstrap.min.js'
// import 'bootstrap/css/bootstrap.min.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

// Vue.config.productionTip = false

(function ($) {
  setInterval(function () {
    if ($(".animated-circles").hasClass("animated")) {
      $(".animated-circles").removeClass("animated");
    } else {
      $(".animated-circles").addClass("animated");
    }
  }, 2000);
  var wait = setInterval(function () {
    $(".livechat-hint")
      .removeClass("show_hint")
      .addClass("hide_hint");
    clearInterval(wait);
  }, 4500);
  $(".livechat-girl")
    .hover(
      function () {
        clearInterval(wait);
        $(".livechat-hint")
          .removeClass("hide_hint")
          .addClass("show_hint");
      },
      function () {
        $(".livechat-hint")
          .removeClass("show_hint")
          .addClass("hide_hint");
      }
    )
    .click(function () {
      if (isMobile) {
        window.location.href = "http://www.baidu.com";
      } else {
        var oWidth = 606,
          oHeight = 630,
          top = $(window).height() / 2 - oHeight / 2,
          left = $(window).width() / 2 - oWidth / 2;
        window.open(
          "http://www.baidu.com",
          "",
          "width=" +
          oWidth +
          ",height=" +
          oHeight +
          ",scrollbars=yes,top=" +
          top +
          ",left=" +
          left +
          ",resizable=yes"
        );
      }
    });
})(jQuery);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
