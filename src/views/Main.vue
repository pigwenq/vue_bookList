<template>
  <div id="main">
        <img id="img1" src="@/img/ad.f6f4649c.jpg">
        <div id="login">
            <div v-if="login">{{msg}} &nbsp;  <button class="lo" @click="changelogin()">退出登陆</button>  </div>
            <div v-if="!login">{{msg}} &nbsp;  <button class="lo" @click="changelogin()">请登陆</button>   </div>
        </div>
        <div id="inpDiv"> 
            <img id="img2" src="@/img/logo.9d476f20.png">
            <input id="inp" placeholder="请输入书名..." v-model="input">
            <button id="gobtn" @click="find">查找</button>
            <div id="mycart" @click="entermycart()" >
                我的购物车
                <div class="num">{{cartsnum}}</div>
            </div>
        </div>
        <div id="nav">
            <ul id='dh'>
                <li @click="topath('/')">首页</li>
                <li @click="topath('/renwen')">人文类</li>
                <li @click="topath('/lishi')">历史类</li>
                <li @click="topath('/yishu')">艺术类</li>
                <li @click="topath('/keji')">科技类</li>
            </ul>
            
        </div>
         <router-view/>
         <br/>
         <br/>
         <br/>
         <div style="text-align:center">-------------------------------我也是有底线的--------------------------------</div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
    </div>
</template>

<script>
import {books} from '@/data/data.js'
import {mapState} from 'vuex'
export default {
 
     name:'main',
  data:function(){
      return {
          books,
          input:'',
          login:false
         
      } 
  },
  computed:{
       ...mapState(['cartsnum']),
      msg:function(){
          var msg=""
          if(this.$store.state.username!=""){
              
              msg = "欢迎您："+this.$store.state.username 
          }else{
              
              msg="未登录"
          }
          return msg
      }
  },
  mounted:function(){
       if(this.$store.state.username!=""){
       
              this.login=true
          }else{
              
              this.login = false
          }
  },
  methods:{
      find:function(){
          this.$router.push({path:'/',query:{input:this.input}})
      },
      entermycart:function(){
          this.$router.push('/mycart')
      },
      changelogin(){
          if(this.login){
              this.$store.state.username="" //全局变量改变
              this.$store.state.carts=[]
              this.$store.state.cartsnum=0
              sessionStorage.removeItem("logintag")
              this.login=false
          }else{
              this.login = true
              this.$router.push("/login")
          }
      },
      topath(to){
          
          this.$router.push(to)
      }
  }
}
</script>

<style scoped>
    .num{
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        border-radius: 50%;
        color: #fff;
        background-color: red;
        position: absolute;
        top: 0;
        right: 0;
    }
    .lo{
        position: relative;
        height: 30px;
        color: red;
    }
    #login{
        height: 40px;
        font-size: 16px;
        text-align: right;
        background-color: #f5f5f5;
        color: rgb(12, 4, 4);
        position: relative;
    }
    #main{
        width:1000px;
        margin: auto;
    }
    #img1{
        width: 100%;
        height: 160px;
    }
    #img2{
        width: 100px;
        height: 160px;
        float: left;
    }
    #inpDiv{
        position: relative;
        left: 40px;
        width: 100%;
        height: 160px;
        line-height: 150px;
    }
    #inp{
        position: relative;
        left: 80px;
        width: 450px;
        height: 40px;
        border: 2px solid red;
        outline: none;
    }
    #gobtn{
        position: relative;
        left: 80px;
        width: 100px;
        height: 45px;
        border: none;
        background-color: #e1251b;
        color: #fff;
        box-sizing: border-box;
    }

    #nav{
        height: 40px;
    }

    #dh{
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    }
    #dh li{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 200px;

        cursor: pointer;
        background-color: #42b983;
        color: #fff;
        text-align: center;
    }
    #dh li:hover{
        background-color: red;
    }
    #mycart{
        position: absolute;
        height: 40px;
        width: 140px;
        line-height: 50px;
        background-color: #f5f5f5;
        margin-top: -20px;
        top: 45%;
        border-radius: 6px;
        cursor: pointer;
        right: 90px;
        text-align: center;
        color: #000;
    }
</style>


