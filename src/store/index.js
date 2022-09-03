import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    username:"",
    cartsnum:0
  },
  mutations: {
    //添加商品
    //加入购物车
    addCart:function(state,poyload){
      //poyload=[{book:{},sum:x]

      for(var i=0;i<state.carts.length;i++){
          if(state.carts[i].book.id==poyload.book.id){
              state.carts[i].sum+=poyload.sum;
              break;
          }
          if(i==state.carts.length-1){
              state.carts.push(poyload)
              break;
          }
      }

      if(state.carts.length==0){
        state.carts.push(poyload)
      }
      localStorage.setItem("!!!"+sessionStorage.getItem("logintag")+"!!!",JSON.stringify(state.carts))
   
      state.cartsnum = state.carts.length
  },
    //删除商品
    dele(state,index){
      //删除购物车数据
      state.carts.splice(index,1)
      //删除模拟数据本地数据
      localStorage.setItem("!!!"+sessionStorage.getItem("logintag")+"!!!",JSON.stringify(state.carts))
      state.cartsnum = state.carts.length
    },
    //购物车--
    downCart(state,index){
      //如果数量为1，不进行修改
      if(state.carts[index].sum==1)return

      //购物车数据进行修改
      state.carts[index].sum--

      //修改模拟本地数据信息
      localStorage.setItem("!!!"+sessionStorage.getItem("logintag")+"!!!",JSON.stringify(state.carts))
      state.cartsnum = state.carts.length
    },
    //购物车++
    upCart(state,index){

      //购物车
      state.carts[index].sum++
      //修改模拟本地数据信息
      localStorage.setItem("!!!"+sessionStorage.getItem("logintag")+"!!!",JSON.stringify(state.carts))
      state.cartsnum = state.carts.length
    }

  },
  
  actions: {
    //模拟支付
    topay({state}){
      setTimeout(function(){
        state.carts=[]
        localStorage.setItem("!!!"+sessionStorage.getItem("logintag")+"!!!",JSON.stringify(state.carts))
        alert("支付完成")
      },1000)
    }
  },
  modules: {
  }
})
