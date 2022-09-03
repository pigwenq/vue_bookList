<template>
    <div id="background">
      <div id="contain">
        <h1>Register</h1>

        <div class="form">
          <label>用户名：</label><input type="text" v-model="name"><br/>
        </div>
        <div class="form">
          <label>密码：</label><input type="password" v-model="password"><br/>
        </div>
        <div class="form">
          <label>邮箱：</label><input type="email" v-model="mail"><br/>
        </div>
        <div class="form">
          <label>手机号：</label><input type="tel" v-model="tel"><br/>
        </div>
        <button @click.prevent="handlefinish">提交</button>
      </div>
    </div>
</template>

<script>
    export default {
      name:'register',
      data:function(){
          return{
            name:"",
            password:"",
            mail:"",
            tel:""
          }
      },
      methods:{
      //点击完成按钮触发handlefinish
        handlefinish:function()
        {
          if(this.name==='')
          {
            alert("用户名不能为空");
          }
          else if(this.password==='')
          {
            alert("密码不能为空");
          }
          else{//将新用户信息存储到localStorage

            var user = JSON.parse(localStorage.getItem('!!!user!!!'))

            for(var i=0;user!=null&&i<user.length;i++){
              if(user[i].username===this.name){
                alert("用户名已存在")
                return;
              }
            }
            if(user==null){
              user=[]
            }
            
            user.push({'username':this.name,'password':this.password,'mail':this.mail,'tel':this.tel})
            localStorage.setItem('!!!user!!!',JSON.stringify(user))
            alert("注册成功");
            this.$router.push('/Login');//完成注册后跳转至登录页面
          }
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
#contain{
  width: 580px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
}
#contain h1{
  color: white;
}
.form{
  color: white;
  margin-left: 20%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
}
</style>
