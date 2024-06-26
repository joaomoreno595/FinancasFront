import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Bar } from 'vue-chartjs'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
