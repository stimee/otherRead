import VueRouter from 'vue-router'
import index from 'pages/index.vue'
import waitRead from 'pages/wait_read.vue'
import myArticle from 'pages/my_article.vue'
const router = new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/waitRead', name: 'waitRead', component: waitRead },
    { name: 'myArticle', path: '/myArticle', component: myArticle },
    {
      name: 'share',
      path: '/share',
      component: () => import('pages/share.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  next()
  // let username = localStorage.getItem('username')
  // if(username){
  //   next()
  // }else{

  // }
})
export default router
