<template>
<div id="background">
    <div class="container">
        <form action="">
          <h1>Login</h1>
          <div class="form">
              <div class="item">
                <label>用户名：</label><input type="text" name="username" v-model="username" placeholder="请输入用户名">
                <!-- v-model把输入的值传输给name变量 -->
                <br/>
              </div>
              <div class="item">
                <label>密码：</label><input type="password" name="password" v-model="password" placeholder="请输入密码">
                <br/>
              </div>
          </div>
        </form>
              <button  type="submit" @click.prevent="handlelogin">登录			</button>
              <!-- v-on点击按钮触发handlelogin方法 -->
              <button  @click.prevent="handleregister">注册</button>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      username:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password:""//密码
    };
  },
  methods:{
      //登录判断
    handlelogin:function()
    {
        if(this.username==='')//名字为空
       {
         alert('用户名不为空');
       }
       else if(this.password==='')//密码为空
       {
         alert('密码不为空');
       }
      else{
        
          var user = JSON.parse( localStorage.getItem("!!!user!!!"))
          
          if(user==null||0==user.length){
                   alert('账号不存在，请注册后登录');//查无此号
                   this.password=""
                   return
              }
          for(var i=0;i<user.length;i++){
              if(user[i].username==this.username){ //用户名存在
              
                  if(user[i].password==this.password){
                      sessionStorage.setItem("logintag",this.username)
                      //加载数据
                      
                      var cart = JSON.parse(localStorage.getItem("!!!"+sessionStorage.getItem("logintag")+"!!!"))
                      if(cart!=null){                        
                        this.$store.state.carts=cart
                        this.$store.state.cartsnum = cart.length
                      }
                        this.$store.state.username = sessionStorage.getItem("logintag")
                      //跳转
                      this.$router.push('/')
                      return
                  }else{
                      alert('密码不正确')
                      this.password=""
                      return
                  }
              }
              
              if(i==user.length-1){
                alert("用户名不存在")
                this.password=""
                      return
              }
              
          }
       
        }
    },
    handleregister:function()
    {
      this.$router.push('/register')//点击注册按钮，跳转至注册页面
    }
  }
};
</script>


<style scoped>
#background{
    width: 100%;
    height: 100%;
    background-image: url("../img/bg2.jpg");
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.container{
  width: 480px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#0000008f;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container h1{
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  margin-left: 15%;
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
}
.item label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input{
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 23px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button{
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;

}

</style>
