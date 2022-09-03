<template>
  <div id="lishi">
    <ul id='spList'>
        <li id='sp' v-for="ms in books" :key="ms.id" @click="onClick(ms.id)">
            <img :src="ms.img">
            <p>名称：{{ms.bookName}}</p>
            <p style="color:red">价格：￥{{ms.price}}元</p>
        </li>
    </ul>

  </div>
</template>


<script>
import {books} from '@/data/data.js'
export default {
    name:"lishi",
    data:function(){
        return {
        
        }
    },
    computed:{
        //筛选数据
        books:function(){
            var rebooks=[]
            for(var i=0;i<books.length;i++){
                if(books[i].type=="历史类"){
                    var book = books[i]
                    rebooks.push(book)
                }
            }
            return rebooks
        }
    },
    methods:{
        onClick:function(id){
            this.$router.push({path:'/book',query:{id}})
        }
    }
}
</script>

<style>
     #lishi{
        height: auto;
        position: relative;
        padding: auto; 
        /* top:50px*/
     }
    #spList{
        list-style: none;
        margin: auto;
        position: relative;
    }
    #sp{
        width: 200px;
        height: auto;
        background-color: rgba(199, 143, 143, 0.192);
        cursor: pointer;
        text-align: center;
        display: inline-block;
        margin-top: 20px;
        margin-left: 20px;
    }
    
    #spList li>img{
        cursor: pointer;
        width: 200px;
        height: 200px;
    }

</style>