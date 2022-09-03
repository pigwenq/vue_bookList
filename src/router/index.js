import Vue from 'vue'
import VueRouter from 'vue-router'
import AllShop from '../views/AllShop.vue'
import LiShi from '../views/LiShi.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:"/",
    name:"main",
    component:()=>import('../views/Main.vue'),
    children:[
      {
        path:"/",
        name:"allshop",
        component:AllShop
      },
      {
        path:"/lishi",
        name:"lishi",
        component:LiShi
      },
      {
        path:"/renwen",
        name:"renwen",
        component:()=>import('../views/RenWen.vue'),
      },
      {
        path:"/yishu",
        name:"yishu",
        component:()=>import('../views/YiShu.vue'),
      },
      {
        path:"/keji",
        name:"keji",
        component:()=>import('../views/KeJi.vue'),
      },
      {
        path:'/book',
        name:'book',
        component:()=>import('../views/Book.vue'),
      }  ,
      {
        path:'/mycart',
        name:'mycart',
        component:()=>import('../views/MyCart.vue'),
      }
    ]
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('../views/Login.vue')
  },
  {
    path:"/register",
    name:"register",
    component:()=>import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>
{


  //到购物车
  if(to.path=='/mycart'){
    //是否登陆登陆
    if(sessionStorage.getItem('logintag')!=null){
      next();
    }else{
      next('/login')
    }
  }
  next();
})

export default router
