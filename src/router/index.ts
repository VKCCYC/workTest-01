import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/aboutView.vue')
    },
    {
      path: '/activityItinerary',
      name: '活動行程',
      component: () => import('../views/activityItinerary.vue')
    },
    {
      path: '/celebrationsView',
      name: '慶典活動',
      component: () => import('../views/celebrationsView.vue')
    },
    {
      path: '/cultureArt',
      name: '文化藝術',
      component: () => import('../views/cultureArt.vue')
    },
    {
      path: '/donateMoney',
      name: '油箱喜添',
      component: () => import('../views/donateMoney.vue')
    },
    {
      path: '/lanternCeremony',
      name: '安燈禮斗',
      component: () => import('../views/lanternCeremony.vue')
    },
    {
      path: '/servicesView',
      name: '服務項目',
      component: () => import('../views/servicesView.vue')
    },
    {
      path: '/trafficInformation',
      name: '交通資訊',
      component: () => import('../views/trafficInformation.vue')
    }
  ]
})

export default router
