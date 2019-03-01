// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 先安装echarts
// import 'echarts/lib/echarts'
// import VueECharts from 'vue-echarts'
// Vue.component('v-chart', VueECharts)

// 引入VueSocketIO
// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//   debug: process.env.NODE_ENV !== 'production',
//   connection: '/'
// }))
import anime from 'animejs'
import echart from 'echarts'
import '@/style/normalize.css'
Vue.prototype.$echart = echart
Vue.prototype.$anime = anime

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
