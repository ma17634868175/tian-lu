/*
 * @Author: marx
 * @Date: 2020-06-27 18:13:10
 * @LastEditTime: 2020-06-27 20:00:44
 * @Description: 组件描述
 * @FilePath: /tian-lu/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible'

import "@/assets/scss/base.scss"
import "@/assets/scss/reset.scss"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
