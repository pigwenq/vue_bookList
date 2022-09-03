<template>
  <div id="allshop">

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
    name:"allshop",
    data:function(){
        return {
        }
    },
    computed:{
        //筛选数据
        books:function(){
            var book = []
            if(this.$route.query.input==undefined){
                return books
            }

            for(var i=0;i<books.length;i++){
                
                if(books[i].bookName.indexOf(this.$route.query.input)>=0){
                    book.push(books[i])
                }
            }
            return book
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
     #allshop{
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