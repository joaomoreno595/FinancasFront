import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { EventBus } from '../event-bus';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/salario',
    name: 'Salario',
    component: function () {
      return import(/* webpackChunkName: "salario" */ '../views/SalarioView.vue')
    }
  },
  {
    path: '/casa',
    name: 'Casa',
    component: function () {
      return import(/* webpackChunkName: "casa" */ '../views/CasaView.vue')
    }
  },
  {
    path: '/carro',
    name: 'Carro',
    component: function () {
      return import(/* webpackChunkName: "salario" */ '../views/CarroView.vue')
    }
  },
  {
    path: '/diversos',
    name: 'Diversos',
    component: function () {
      return import(/* webpackChunkName: "diversos" */ '../views/DiversosView.vue')
    }
  },
  {
    path: '/hitorico',
    name: 'Historico',
    component: function () {
      return import(/* webpackChunkName: "hitorico" */ '../views/HistoricoView.vue')
    }
  },
  {
    path: '/graficos',
    name: 'Graficos',
    component: function () {
      return import(/* webpackChunkName: "graficos" */ '../views/GraficosView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
