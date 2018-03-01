<template>
    <div>
        <!--头部  -->
        <head-top></head-top>
        <!--头部  end-->
        <div class="store-img">
            <img src="../../assets/paisong.jpg" alt="">
        </div>
        <div class="store-head">
            <div class="photo">
                <img src="../../assets/paisong.jpg" alt="">
            </div>
            <p class="store-name">
                郑州夜色酒吧
            </p>
        </div>
        <div class="topic">
            <p class="title">2017上海MAO万圣节活动2017上海MAO万圣节活动2017上海MAO万圣节活动2017上海MAO万圣节活动</p>
            <p class="title-detail">详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说</p>
            <ul class="service">
                <li><i class="iconfont icon-yiwancheng"></i>服务时间：<span>2017-08-05 22:00</span></li>
                <li><i class="iconfont icon-tishicuohao"></i>联系电话：<span>2017-08-05 22:00</span></li>
                <li><i class="iconfont icon-tishicuohao"></i>服务地址：<span>2017-08-05 22:00</span></li>
            </ul>
        </div>
        <div class="partydetail-detail">
            <div class="partydetail-detail-top">2017上海MAO万圣节活动</div>
            <div class="partydetail-detail-center">
              <img src="../../assets/paisong.jpg" alt="">
              详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说详细解说
            </div>
        </div>
        <div class="partydetail-pay">
          <div class="partydetail-pay-now" @click="handlepay">立即购票</div>
          <mt-popup v-model="popupVisible" position="bottom"  >
            <div class="partydetail-model" @touchmove.prevent>
              <div class="partydetail-model-head">确认订单</div>
              <div class="partydetail-model-content">
                <p class="partydetail-model-mold pd4">类型</p>
                <div class="partydetail-model-ticket ">
                    <div class="model-ticket-big">
                        <div class="model-ticket" @click="modelTicket(0)" :class="{color: ticket==0}">家庭票</div>
                    </div>
                     <div class="model-ticket-big">
                        <div class="model-ticket" @click="modelTicket(1)" :class="{color: ticket==1}">亲子票</div>
                    </div>
                     <div class="model-ticket-big">
                        <div class="model-ticket" @click="modelTicket(2)" :class="{color: ticket==2}">VIP票</div>
                    </div>
                     <div class="model-ticket-big">
                        <div class="model-ticket" @click="modelTicket(3)" :class="{color: ticket==3}">早鸟通票</div>
                    </div>
                </div>
                <p class="partydetail-model-count pd4">数量 <span><span>-</span><span>1</span><span>+</span></span></p>
                <p class="partydetail-model-bill pd4">票据类型<span>电子票</span></p>
                <p class="partydetail-model-total pd4">合计<span>￥2000.00</span></p>
              </div>
              <div class="partydetail-nowpay">
                立即支付
              </div>
            </div>
          </mt-popup>
        </div>
    </div>
</template>

<script>
  import { Picker } from 'mint-ui';
  import { Popup } from 'mint-ui'; 
  import headTop from '../../components/head/head';
  export default {
      data() {
          return {
            popupVisible:false,
            ticket:''
          }
      },
      components: {
          headTop
      },
      created() {

      },
      methods: {
        handlepay(){
          this.popupVisible = true;
        },
        modelTicket(index){
            this.ticket = index
        }
      }
  }
</script>
<style>
.pd4{
    box-sizing: border-box;
    padding: 0 0.4rem;
}
.color{
    color: #492b67 !important;
    border:1px solid #492b67 !important;
}
.mint-popup{
  width: 10rem;
  background: #fff;
}
  .store-img{
      width: 100%;
      height: 5.266667rem;
      overflow: hidden;
  }
  .store-img img{
      width: 100%;
  }
  .store-head{
      height: 1rem;
    
      padding: 0 .4rem;
      position: relative;
  }
  .store-head .photo{
      width: 2rem;
      height: 2rem;
      border-radius: .2rem;
      border: 1px solid #dddddd;
      position: absolute;
      top: -100%;
  }
  .store-head .photo img{
      width: 100%;
  }
  .store-head .store-name{
      line-height: 1rem;
      font-size: .4rem;
      padding-left: 2.4rem;
      color: #4a2c68;
  }
  .topic{
      padding: .533333rem .4rem .533333rem .4rem;
      line-height: .666667rem;
      border-bottom: 1px solid #ebebeb;
  }
  .topic .title{
      color:#4a2c68;
      font-size: .426667rem;
      font-weight: 600;
      
  }
  .topic .title-detail{
      color: #b0a4bc;
      font-size: .36rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      letter-spacing: 1px;
  }
  .topic i{
    position: relative;
    top:2px;
  }
  .topic .service{
      font-size: 0.36rem;
      color: #4a2c68;
  }
  .topic .service li span{
      color: #b0a4bc;
  }
  .topic .service li i{
      margin-right: .266667rem;
  }
  .partydetail-detail{
    width: 9.2rem;
    margin: 0 auto;
    padding-bottom: .8rem;
  }
  .partydetail-detail-top{
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    font-size: .42rem;
    color: #4a2c68;
    font-weight: 600;
  }
  .partydetail-detail-center{
    text-indent: 2em;
    font-size: 14px;
    color: #b0a4bc;
    letter-spacing: 1px;
  }
  .partydetail-detail-center img{
    width: 9.2rem;
    height: 5.066667rem;
    float: left;
    margin-bottom: .346667rem;
  }
  .partydetail-pay-now,.partydetail-nowpay{
    width: 10rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background:linear-gradient(to right, #946cb6 , #da3494);
    text-align: center;
    font-size: .426667rem;
    color: #fff;
  }
  .partydetail-modal{
    width: 10rem;
    background: #fff;
  }
  .partydetail-model{
    width: 10rem;
    background: #fff;
  }
  .partydetail-model-head{
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #b0a4bc;
    text-align: center;
    font-size: .426667rem;
    color: #fff;
    letter-spacing: 1px;
  }
  .partydetail-model-content{
    width:10rem;
  }
  .partydetail-model-mold{
    width: 100%;
    color: #492b67;
    font-size: .346667rem;
    margin-top: .4rem;
  }
  .partydetail-model-ticket{
    width: 100%;
    height: 1.6rem;
    display: flex;
  }
  .model-ticket-big{
      flex: 1;
      width: 25%;
      height: 100%;
  }
  .model-ticket{
    border:1px solid #b0a4bc;
    width: 1.9rem;
    height: .666667rem;
    line-height: .666667rem;
    text-align: center;
    color: #b5aac0;
    font-size: .346667rem;
    border-radius: 5px;
    margin-top: .4rem;
    margin-right: .533333rem;
    margin-left: 0.2rem;
  }
  .partydetail-model-count{
      height: 1.333333rem;
      line-height: 1.333333rem;
      width: 100%;
      font-size: .346667rem;
      color: #492b67;
      border-bottom: 1px solid #eeecf1;
  }
  .partydetail-model-count>span{
      display: inline-block;
      float: right;
      font-size: 12px;
      width: 30%;
      height: .746667rem;
      line-height: .746667rem;
      border:1px solid #b0a4bc;
      display: flex;
  }
  .partydetail-model-count>span>span{
      flex: 1;
      text-align: center;
      color: #b0a4bc;
      font-size: .373333rem;
  }
  .partydetail-model-count>span>span:nth-of-type(2){
      color: #492b67;
      font-size: 12px;
  }
  .partydetail-model-bill,.partydetail-model-total{
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .346667rem;
      color: #492b67;
       border-bottom: 1px solid #eeecf1;
  }
  .partydetail-model-bill span{
      display: inline-block;
      float: right;
      color: #b0a4bc;
      font-size: 12px;
  }
  .partydetail-model-total span{
      display: inline-block;
      float: right;
      color: #e03d6c;
      font-size: .4rem;
  }
</style>

