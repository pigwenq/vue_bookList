<template>
    <div id="book">
        <div id='left'>
            <img :src="book.img">
        </div>

        <div id='right'>
            <p>书名:{{book.bookName}}</p>
            
            <p>单价:￥{{book.price}}</p>
            <br/>
            <div>
                <button class="change" @click="change(-1)">-</button>
                <input id="binp" disabled :value="sum">
                <button class="change" @click="change(1)">+</button>
            </div>
            <br/>
            <button id="addCart" @click="add()">加入购物车</button>
        </div>
        <div id="msg">
            <h2><br/><br/>详 细 介 绍 :</h2>
            <p>&nbsp;&nbsp;{{book.msg}}<br/><br/></p>
        </div>
    </div>
</template>

<script>
import {books} from "../data/data.js"
export default {
     data:function(){
        return {
            sum:1
        }
    },
    computed:{
        book:function(){
            for(var i=0;i<books.length;i++){
                if(books[i].id==this.$route.query.id){
                    return books[i]
                }
            }
            return null
        }
       
    },
    methods:{
        //改变计数器数据
        change:function(num){
            if(this.sum<=1&&num==-1)return;
            this.sum+=num;
        },
        add(){
            if(sessionStorage.getItem("logintag")==null){
                this.$router.push("/login")
                return
            }
            this.$store.commit('addCart',{'book':this.book,'sum':this.sum})
            alert("添加成功！")
        }
    }
}
</script>

<style>
    #book{
        width: auto;
        position: relative;
    }
    #left {
        width: 250px;
        margin: 20px;
    }
    #left img{
        width: 250px;
        height: 270px;
    }
    #right{
        width: 750px;
        position: absolute;
        text-align: left;
        top:0;
        right: -40px;
    }
    .change{
        border: none;
        height: 35px;
        width: 35px;
    }
    #addCart{
        width: 160px;
        height: 40px;
        font-size: 18px;
        color: #fff;
        background-color: #df3033;
        border: none;
        cursor: pointer;
    }
    #binp{
        border: none;
        outline: none;
        height: 35px;
        background-color: #f5f5f5;
        text-align: center;
        width: 60px;
        font-size: 18px;
        position: relative;
        top:2px
    }
    #msg{
        width: 100%;
        position: relative;
        background-color: #dabbbcbd;
        
    }
    #msg p{
        margin: 50px;
        margin-top: 20px;
        line-height: 40px;
        font-size: 20px;
        white-space: pre-wrap;
        
    }
    #msg h2{
        position: relative;
        left: 50px;
        color: rgb(78, 45, 5);
    }
</style>