<template>
  <div class="footGuide">
    <div class="footGuide-dot"  @click = "gotoAddress('/')" >
      <img  v-bind:src=" $route.path.indexOf('store') == -1 && $route.path.indexOf('cart') == -1 && $route.path.indexOf('center') == -1?foothome1:foothome" >
        <span v-bind:class="[$route.path.indexOf('store') == -1 && $route.path.indexOf('cart') == -1 && $route.path.indexOf('center') == -1?'footcolor':'footcolor1']">首页</span>
    </div>
    <!-- <div class="footGuide-dot" @click = "gotoAddress('/party')">
      <img  v-bind:src="$route.path.indexOf('party') !== -1?footparty:footparty1" >
        <span v-bind:class="[$route.path.indexOf('party') !== -1?'footcolor':'footcolor1']">潮趴</span>
    </div> -->
    <div class="footGuide-dot" @click = "gotoAddress('/shopstore')">
      <img  v-bind:src="$route.path.indexOf('store') !== -1?footshop:footshop1" >
        <span v-bind:class="[$route.path.indexOf('store') !== -1?'footcolor':'footcolor1']">商城</span>
    </div>
    <div class="footGuide-dot" @click = "gotoAddress('/shopcart')">
         <img  v-bind:src="$route.path.indexOf('cart') !== -1?footshopcart:footshopcart1" >
        <span v-bind:class="[$route.path.indexOf('cart') !== -1?'footcolor':'footcolor1']">购物车</span>
    </div>
    <div class="footGuide-dot" @click = "gotoAddress('/center')">
      <img  v-bind:src="$route.path.indexOf('center') !== -1?footcenter:footcenter1" v-if="this.userInfo.gender == true">
      <img v-bind:src="$route.path.indexOf('center') !== -1?footcenter:footcenter1" alt="" v-else>

        <span v-bind:class="[$route.path.indexOf('center') !== -1?'footcolor':'footcolor1']">我的</span>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';
import {setStore,getStore} from '../../config/mUtils'
export default {
    data(){
        return {
          foothome:require('../../assets/icons/shouy.png'),
          foothome1:require('../../assets/icons/shouye.png'),
          footparty:require('../../assets/icon/icon-chaop-a.png'),
          footparty1:require('../../assets/icon/icon-chaopa.png'),
          footshop:require('../../assets/icons/icon-shangcheng.png'),
          footshop1:require('../../assets/icons/icon-shangchen.png'),
          footshopcart:require('../../assets/icons/icon-gouw-u.png'),
          footshopcart1:require('../../assets/icons/icon-gouwu.png'),
          footshopcenter1:require('../../assets/icon/icon-wod.png'),
          footcenter1:require('../../assets/icons/icon-wod.png'),
          footcenter:require('../../assets/icons/icon-wode.png'),
          footcenter2:require('../../assets/icons/icon-wode2.png'),
          userInfo:[]
        }
    },
    created(){
        this.userInfo = JSON.parse(getStore('userInfo'));
    },
    methods:{
      gotoAddress(path){
        		this.$router.push(path)
        	}
    }
}
</script>
<style>
.footcolor{
  color: #d83061;
}
.footcolor1{
  color: #c2b6ca;
}
.footGuide{
  width: 10rem;
  height: 1.466667rem;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index:99;
  background: #fff;
  border-top: 1px solid #d3ced8;
}
.footGuide-dot{
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #c2b6ca;
}
.footGuide-dot img{
  width: .633333rem;
  height: .633333rem;
  display: block;
  margin: 0 auto;
  margin-top: .22rem;
  margin-bottom: 6px;
}
</style>


