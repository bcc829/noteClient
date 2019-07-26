import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/Auth'
import Post from '@/components/Post'
import PostDetail from '@/components/PostDetail'
import PostWrite from '@/components/PostWrite'

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  if (localStorage.accessToken != undefined) return next()
  next('/')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/callback',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/post',
      name: 'Post',
      component: Post,
      beforeEnter: requireAuth()
    },
    {
      path: '/post/:postSeqId',
      name: 'PostDetail',
      component: PostDetail,
      beforeEnter: requireAuth()
    },
    {
      path: '/postWrite',
      name: 'PostWrite',
      component: PostWrite,
      beforeEnter: requireAuth()
    }
  ]
})
