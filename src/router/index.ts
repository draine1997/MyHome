import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab-my-home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab-my-home'
      },
      {
        path: 'tab-my-home',
        component: () => import('@/views/TabPage.MyHome.vue')
      },
      {
        path: 'tab-tasks',
        component: () => import('@/views/TabPage.Tasks.vue')
      },
      {
        path: 'tab-me',
        component: () => import('@/views/TabPage.Me.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
