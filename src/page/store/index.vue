<template>
  <div class="store">
    <!--头部  -->
    <head-top></head-top>
    <!--头部  end-->
    <!--搜素框  -->
    <router-link to="/Qsearch">
      <mt-search v-model="value" placeholder="请输入关键词" cancel-text="" class="search" :class="{'fixed':showIcon}">
      </mt-search>
    </router-link>
    <!--搜素框  end-->
  
    <!--轮播  -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./../../assets/shop/banner.jpg" alt="" class="banner">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../assets/shop/banner.jpg" alt="" class="banner">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./../../assets/shop/banner.jpg" alt="" class="banner">
      </mt-swipe-item>
    </mt-swipe>
    <!--轮播 end  -->
    <!--分类  -->
    <div class="classify">
      <ul>
        <li>
          <i class="iconfont icon-jingxi"></i>
          <p>主题套餐</p>
        </li>
        <li>
          <i class="iconfont icon-promotion"></i>
          <p>促销活动</p>
        </li>
          <li>
        <router-link to="/Qsearch">
            
            <i class="iconfont icon-fenlei"></i>
            <p>产品分类</p>
            </router-link>
          </li>
        
      </ul>
    </div>
    <!--分类 end  -->
    <!--派对必备  -->
    <div class="party floor">
      <div class="title">
        <p>
          <i class="iconfont icon-crown"></i>派对必备
          <span>More
            <i class="iconfont icon-smallxiangyou"></i>
          </span>
        </p>
      </div>
      <div class="start">
        <img src="./../../assets/shop/birthday@2x.png" alt="">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../assets/shop/banner1@2x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../assets/shop/banner1@2x.png" alt="">
          </div>
  
        </div>
  
      </div>
    </div>
  
    <!--派对必备  end-->
  
    <!--为你推荐   -->
    <div class="foryou floor">
      <div class="title">
        <p>
          <i class="iconfont icon-zan"></i>为您推荐
          <span>More
            <i class="iconfont icon-smallxiangyou"></i>
          </span>
        </p>
      </div>
      <ul class="props">
        <li>
          <img src="./../../assets/shop/tuijian-1@2x.png" alt="">
          <span>专业DJ</span>
        </li>
        <li>
          <img src="./../../assets/shop/tuijian-2@2x.png" alt="">
          <span>仿真手捧花</span>
        </li>
        <li>
          <img src="./../../assets/shop/tuijian-3@2x.png" alt="">
          <span>精致托盘</span>
        </li>
      </ul>
      <div class="myscroll">
        <div class="scroll-wrap">
          <div class="foryou-detail">
            <img src="./../../assets/shop/tuijian-4@2x.png" alt="">
            <p class="foryou-title">
              <span>专业互动小丑</span>
              <i>￥500.00</i>
            </p>
          </div>
          <div class="foryou-detail">
            <img src="./../../assets/shop/tuijian-5@2x.png" alt="">
            <p class="foryou-title">
              <span>派对必备策划师</span>
              <i>￥500.00</i>
            </p>
          </div>
          <div class="foryou-detail">
            <img src="./../../assets/shop/tuijian-6@2x.png" alt="">
            <p class="foryou-title">
              <span>激光灯</span>
              <i>￥500.00</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <!--为你推荐  end-->
  
    <!--猜你喜欢   -->
    <div class="youlike floor">
      <div class="title">
        <p>
          <i class="iconfont icon-cainixihuan"></i>猜你喜欢
          <span>More
            <i class="iconfont icon-smallxiangyou"></i>
          </span>
        </p>
      </div>
  
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./../../assets/shop/fenlei-1@2x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../assets/shop/fenlei-2@2x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../assets/shop/fenlei-3@2x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./../../assets/shop/fenlei-4@2x.png" alt="">
          </div>
  
        </div>
      </div>
  
      <ul class="taocan">
        <li :key="n" v-for="n in 4">
          <div class="img-box">
            <img src="./../../assets/shop/taocan1.jpg" alt="">
          </div>
          <div class="text">
            <p class="des-text">生日PARTY氢气球套餐生日PARTY氢气球套餐</p>
            <p class="price">￥500.00
              <i>800.00</i>
            </p>
          </div>
        </li>
      </ul>
  
    </div>
  
    <!--猜你喜欢  end-->
  
    <!--查看更多  -->
    <div class="more">
  
      <span class="line"> MORE</span>
      <span class="txt">查看更多</span>
  
    </div>
    <!--查看更多 end -->
    <!--底部  -->
    <footer class="footer"></footer>
    <foot-guide></foot-guide>
  
    <!--底部 end  -->
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footGuide from '../../components/footer/footGuide'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data() {
    return {
      value: '',
      scroll: '',
    }
  },
  components: {
    footGuide,
    headTop
  },
  created() {

  },
  computed: {
    showIcon: function () {
      this.changeShow();
      return this.scroll > 64;
    }

  },
  mounted() {
    window.addEventListener('scroll', this.changeShow)
  },
  methods: {
    handleClose() {

    },
    changeShow() {
      this.scroll = document.body.scrollTop;
    },

  },
  components: {
    footGuide,
    headTop
  },
  filter: {
    //保留两位小数点
    two: function (value) {
      if (!value) { return '' };
      return value.toFixed(2);
    }

  }
}
</script>





<style>
.store {
  background: #ece5f4;
}



/*搜索框  */

.store .mint-search {
  height: auto;
  position: absolute;
  width: 100%;
  z-index: 100;
}

.store .fixed {
  position: fixed;
  top: 0;
}

.store .mint-searchbar {
  background: linear-gradient(to right, rgba(146, 110, 183, 0.6), rgba(222, 49, 147, 0.6))
}

.store .mint-searchbar-inner {
  background-color: rgba(255, 255, 255, 0);
  position: relative;
  padding: 0;
  border-radius: .133333rem;
  border: 1px solid rgba(232, 229, 244, 0.5);
  height: .666667rem
}

.store .mint-searchbar-inner .mintui-search {
  font-size: .48rem;
  position: absolute;
  right: .4rem;
  margin-top: -.24rem;
  top: 50%;
}

.store .mint-searchbar-core {
  width: 80%;
  margin-left: .4rem;
  background: rgba(255, 255, 255, 0);
  color: #fff
}

 ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #fff;
  font-size: .4rem
}

 :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
  font-size: .4rem
}

 ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: .4rem
}

 :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
  font-size: .4rem
}



/*轮播  */

.store .mint-swipe-items-wrap {
  width: 100%;
  height: 240px;
}

.store .banner {
  width: 100%;
  height: 100%;
}



/*分类  */

.store .classify {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: .266667rem 0;
  text-align: center;
  font-size: .36rem;
  color: #b0a4bc;
}

.store .classify ul {
  overflow: hidden;
}

.store .classify ul li {
  float: left;
  width: 33.3%;
  /* height: 1.36rem; */
}

.store .classify ul li i {
  font-size: .7rem;
  color: #492b67
}

.store .classify ul li p {
  line-height: .4rem;
  color: #b0a4bc
}



/*派对必备  */

.store .floor {
  margin: .4rem 0;
  width: auto;
  padding: .4rem;
  background: #fff;
}

.store .floor .title {
  font-size: .48rem;
  color: #492b67;
  margin-bottom: .266667rem;
}

.store .floor .title p span {
  float: right;
  color: #e8ddf2;
  font-size: .4rem;
  position: relative;
  bottom: -.1rem
}

.store .floor .title p span i {
  margin: 0;
  font-size: .36rem
}

.store .floor .title i {
  font-size: .52rem;
  margin-right: .266667rem
}

.store .party .start {
  padding: .133333rem 0;
}

.store .party .start img {
  width: 100%;
}

.store .floor .swiper-container {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

.store .floor .swiper-wrapper {
  overflow: hidden;
  width: 147%;
}

.store .floor .swiper-slide {
  width: 6.666667rem;
  height: 4.266667rem;
  padding: .133333rem 0;
  box-sizing: border-box;
  float: left;
  margin-right: .133333rem;
}

.store .floor .swiper-slide:last-child {
  margin-right: 0;
}

.store .youlike .swiper-slide {
  width: 2.266667rem;
  height: 2.8rem
}

.store .youlike .swiper-wrapper {
  width: 103%
}

.store .floor .swiper-slide img {
  width: 100%;
}



/*为你推荐  */

.store .foryou .props {
  overflow: hidden;
  margin-top: .266667rem;
}

.store .foryou .props li {
  float: left;
  width: 32.3%;
  position: relative;
  margin-right: .133333rem;
  overflow: hidden;
}

.store .foryou .props li:last-child {
  margin-right: 0;
}

.store .foryou .props li img {
  width: 100%;
}

.store .foryou .props li span {
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.45);
  font-size: .36rem;
  text-align: center;
  width: 100%;
  height: .64rem;
  line-height: .64rem;
  color: #333;
}

.store .myscroll {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}

.store .scroll-wrap {
  width: 132.7%;
  overflow: hidden;
}

.store .foryou-detail {
  width: 3.866667rem;
  float: left;
  margin-right: .266667rem;
}

.store .foryou-detail:last-child {
  margin-right: 0;
}

.store .foryou-detail img {
  width: 100%;
  margin: .266667rem 0;
}

.store .foryou-detail .foryou-title {
  color: #333333;
  font-size: .36rem;
}

.store .foryou-detail .foryou-title span {
  width: 2.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}

.store .foryou-detail .foryou-title i {
  color: #de3163;
  font-size: .36rem;
  float: right;
  font-weight: 700
}



/*猜你喜欢  */

.store .youlike .taocan {
  overflow: hidden;
}

.store .youlike .taocan li {
  width: 48.5%;
  float: left;
  margin-right: .266667rem;
  margin-bottom: .4rem;
  overflow: hidden;
}

.store .youlike .taocan li:nth-child(even) {
  margin-right: 0;
}

.store .youlike .taocan li .img-box {
  width: 100%;
  border: 1px solid #ece5f4;
  border-radius: .133333rem;
  box-sizing: border-box;
}

.store .youlike .taocan li .img-box img {
  width: 100%
}

.store .youlike .taocan li .des-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .4rem;
  color: #492b67;
  line-height: .88rem;
  width: 95%;
}

.store .youlike .taocan li .price {
  font-size: .4rem;
  color: #de3163;
  font-weight: 700
}

.store .youlike .taocan li .price i {
  color: #b0a4bc;
  font-size: .36rem;
  margin-left: .266667rem;
  text-decoration: line-through;
  font-weight: normal;
}



/*查看更多  */

.store .more {
  text-align: center;
  color: #b0a4bc;
  font-size: .36rem;
  margin-bottom: .4rem;
}

.store .more .txt {
  letter-spacing: .066667rem;
  margin: .1rem;
  display: block;
}

.store .more .line {
  display: block;
  font-size: .36rem;
  border-bottom: 1px solid #b0a4bc;
  width: 1.8rem;
  margin: 0 auto;
}



/*去除滚动条  */

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  background-color: #fff
}

::-webkit-scrollbar-button {
  background-color: #fff
}

::-webkit-scrollbar-corner {
  background-color: #fff;
}
</style>