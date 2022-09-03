<template>
    <div id="cart">
        <h1 style="text-align:center;color:red">我 的 购 物 车</h1>
        <div class="no-data" v-if="carts.length==0">购物车空空如也</div>
        <table v-else>
            <br/>
            <tr>
                <th>图片</th>
                <th>书名</th>
                <th>价格</th>
                <th>数量</th>
                <th>操作</th>
            </tr>
            
            <tr id="tr" v-for="(cart,index) in carts" :key="cart.id">
                <td><img id="cart-img" :src="cart.book.img"></td>
                <td>{{cart.book.bookName}}</td>
                <td>￥{{cart.book.price}}</td>
                <td>
                    <button @click="downCart(index)">-</button>
                    {{cart.sum}}
                    <button @click="upCart(index)">+</button>
                </td>
                <td><button @click="dele(index);settotal(index)">移除订单</button></td>
            </tr>
            <br/>
            <br/>
           <tr>
               <td colspan="4" style="color:red">当前总价：  ￥{{total}}元</td>
               <td><button id="pay" @click="topay()">去支付</button></td>
           </tr>
        </table>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default {
    name:"cart",
    data:function(){
        return{
        }
    },
    computed:{
        ...mapState(['carts','total']),
        total(){
            var total=0
            for(var i=0;i<this.carts.length;i++){
                total  += this.carts[i].book.price*this.carts[i].sum
            }
            return total.toFixed(2);
        }
    },
    methods:{
        ...mapMutations(['dele','downCart','upCart']),
        //点击选择事件
        ...mapActions(['topay'])
    }
}
</script>

<style scoped>
    #pay{
        width: 160px;
        height: 40px;
        font-size: 18px;
        color: #fff;
        background-color: #df3033;
        border: none;
        cursor: pointer;
    }
    #cart-img{
        width: 80px;
        height: 100px;   
    }
    .no-data{
        height: 200px;
        text-align: center;
        line-height: 200px;
        background-image: url('../img/no-data.751bed26.gif');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 45%;
    }
     #cart{
        height: auto;
        position: relative;
        padding: auto; 
        width: 1000px;
        
    }
    #cart td{
        width: 100px;
        margin-left: 100px;
    }
    #tr{
        background-color: #ecd0d059;
        margin-bottom: 20px;
    }
    table{
        width:100%;
        text-align: center;
        font-size: 25px;
    }
    .change{
        border: none;
        height: 35px;
        width: 35px;
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
    
</style>>


