import VueRouter from 'vue-router'
import index from 'pages/index.vue'
import waitRead from 'pages/waitRead.vue'
import waitReadDetail from 'pages/waitReadDetail.vue'
const router = new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/waitRead',name: 'waitRead', component: waitRead},
    { path: '/waitRead/:id', component: waitReadDetail},
    { path: '/share', component: ()=>import('pages/share.vue')}
  ]
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