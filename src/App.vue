<template>
<div id="app">
    <router-view/>
</div>
  
</template>
<script>
export default {
    name:"app",
    created:function(){
        //刷新页面时进行数据获取
        //已登录
        if(sessionStorage.getItem("logintag")){

            var cart = JSON.parse(localStorage.getItem("!!!"+sessionStorage.getItem("logintag")+"!!!"))
            if(cart==null)return
            
            this.$store.state.carts=cart
            this.$store.state.cartsnum=cart.length
            this.$store.state.username = sessionStorage.getItem("logintag")
        }
       
    }
}
</script>



