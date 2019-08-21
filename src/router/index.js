import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/questions/Questions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions
    }
  ]
})
