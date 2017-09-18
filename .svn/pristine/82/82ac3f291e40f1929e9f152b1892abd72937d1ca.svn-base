<template>
    <div class="orderpay">
        <div class="order-goods">
            <div class="order-goods-wraper" v-for="(item,index) in orderList.orderItems" :key="index">
                <div class="img-box">
                    <img :src="item.itemPic" alt="">
                </div>
                <div class="order-text">
                    <p class="text">{{item.itemGoodName}}</p>
                    <p class="price">¥{{item.itemPrice | two}}
                        <span>{{item.itemPrice | two}}</span>
                    </p>
                </div>
            </div>

        </div>
        <div class="package-order-wraper" v-if="orderList.orderType == 1">
            <div class="stage">
                <p class="stage-pay" v-text="orderList.orderStatus == '定金未付'? '阶段1：未完成' : '阶段1：已完成'"></p>
                <p class="stage-detail">商品定金
                    <span>¥{{orderList.orderPromiseMoney | two}}</span>
                </p>
            </div>
            <div class="stage">
                <p class="stage-pay" v-text="orderList.orderStatus == '定金已付'? '阶段2：已完成' : '阶段2：未完成'"></p>
                <p class="stage-detail">商品总额
                    <span>¥{{orderList.orderTotalFee | two}}</span>
                </p>
                <p class="stage-detail">定金优惠
                    <span>－¥ 00.00</span>
                </p>

            </div>
            <div class="stage staging">
                <p class="stage-pay" v-text="orderList.orderStatus == '定金未付'? '待付定金：¥' +orderList.orderPromiseMoney:'待付尾款¥' +orderList.orderTotalFee - orderList.orderPromiseMoney">
                    <!-- 待付尾款：
                    <i>{{orderList.orderTotalFee - orderList.orderPromiseMoney | two}}</i> -->
                </p>
            </div>
            <div class="others">

                <p class="pay-detail" @click="showDetail">套餐所含商品
                    <i class="iconfont " :class="[test?'icon-arrow_down':'icon-smallxiangyou']"></i>
                </p>
                <!--隐藏的商品详细  -->
                <div class="goods-detail" :class="[test?'goods-detail-block':'goods-detail']" v-if="orderPackageDetailList">
                    <div class="order-goods" v-for="item in orderPackageDetailList" :key="item.id">
                        <div class="img-box">
                            <img :src="item.goodFirstPicUrl" alt="">
                        </div>
                        <div class="order-text">
                            <p class="text">{{item.goodName}}</p>
                            <p class="price">¥{{item.goodSalePrice}}
                                <span>{{item.goodPrice}}</span>
                            </p>
                            <p class="num">×{{item.quantity}}</p>
                        </div>
                    </div>
                </div>
                <!--end  -->

            </div>
            <div class="others">

                <p class="pay-detail">加选商品
                    <i class="iconfont icon-smallxiangyou"></i>
                </p>

            </div>
        </div>
        <div v-else-if="orderList.orderType == 2" class="good-order-pay">
            <p>商品总额：¥{{orderList.orderTotalFee}}</p>

        </div>

        <ul class="order-detail">
            <li>订单编号：{{orderList.orderNo}}</li>
            <li>下单时间：{{this.createTime}}</li>
            <li>服务地址：{{orderList.orderReceiverAddress}}</li>
            <li>服务时间：{{this.orderPormiseDate}}</li>
        </ul>
        <div class="pay"  @click="payMoney">
            {{bottomPayText}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: false,
            orderList: [],
            orderPackageDetailList: [],
            onlyOne: true,
            createTime: '',
            orderPormiseDate: '',
            bottomPayText:'',
        }
    },
    computed: {



    },
    created() {
        this.getOrderList();
    },
    methods: {
        showDetail() {
            this.test = !this.test;
            if (this.onlyOne) {
                this.$http.get('/api/partypkg/partypkgdetail?id=' + this.orderList.orderItems[0].itemGoodId).then(res => {
                    this.orderPackageDetailList = res.data
                    console.log(res);
                })
            }
            this.onlyOne = false;

        },
        getOrderList() {
            this.$http.get('/api/order/detail?id=' + this.$route.query.orderId).then(res => {
                this.orderList = res.data;
                console.log(res);
                this.createTime = this.orderList.createTime.replace(/T/, ' ').slice(0, 19);
                this.orderPormiseDate = this.orderList.orderPormiseDate.replace(/T/, ' ');
                if(this.orderList.orderType == 1){
                    if(this.orderList.orderStatus == '定金未付'){
                        this.bottomPayText = '支付定金'
                    }else{
                        this.bottomPayText = '支付尾款'
                    }
                }else{
                    this.bottomPayText = '确认支付'
                }
            })
            //  

        },
        payMoney() {
            let payType = '';
            if (this.orderList.orderType == 1) {
                if (this.orderList.orderStatus == '定金未付') {
                    payType = 1;
                } else if (this.orderList.orderStatus == '定金已付'){
                    payType = 2
                }
            }else if(this.orderList.orderType == 1 || this.orderList.orderStatus == '等待支付'){
                payType = 3
            }

            this.$http.post('/api/order/pay?id=' + this.$route.query.orderId + '&payType=' + payType).then(res => {
                console.log(res);
            })
        }

    },
    filters: {
        //保留两位小数点
        two: function(value) {
            if (!value) { return '' };
            return value.toFixed(2);
        },
    }
}
</script>
<style>
/*不显示center内容  */

.center {
    background: #fff;
}

.makecard,
.footGuide,
.mypic,
.myorder,
.mymsg,
footer {
    display: none;
}

.orderpay {
    background: #ece5f4;
}

.orderpay .order-goods {
    overflow: hidden;
    padding: .4rem;
    border-bottom: 1px solid #ece5f4;
    background: #fff;
}

.orderpay .order-goods .img-box {
    width: 2.666667rem;
    height: 2.666667rem;
    overflow: hidden;
    float: left;
    border-radius: .133333rem;
    border: 1px solid #ece5f4;
    margin-right: .266667rem;
}

.orderpay .order-goods .img-box img {
    width: 100%;
}

.orderpay .order-goods .order-text {
    width: 6.133333rem;
    float: left;

    font-size: .4rem;
    box-sizing: border-box;
    padding: .4rem 0;
}

.orderpay .order-text .text {
    color: #492b67;
    line-height: .533333rem;
}

.orderpay .order-text .price {
    color: #de3163;
    margin-top: .4rem;
    font-size: .48rem;
}

.orderpay .order-text .price span {
    font-size: .36rem;
    color: #c5bcce;
    text-decoration: line-through;
}

.orderpay .order-text .num {
    float: right;
    color: #c5bcce
}




/*  */

.orderpay .stage {
    font-size: .4rem;
    background: #fff;

    padding: .4rem;
    border-bottom: 1px solid #ece5f4;
}

.orderpay .stage.staging .stage-pay {
    margin-bottom: 0;
}

.orderpay .stage.staging .stage-pay i {
    float: right;
    color: #de3163;
}

.orderpay .stage .stage-pay {
    color: #492b67;
    margin-bottom: .266667rem;
}

.orderpay .stage .stage-detail {
    color: #b0a4bc;
    line-height: .533333rem;
}

.orderpay .stage .stage-detail span {
    float: right;
}

.orderpay .others {
    margin-top: .266667rem;
}

.orderpay .others .pay-detail {
    background: #fff;
    font-size: .4rem;
    color: #492b67;
    line-height: 1.266667rem;
    padding: 0 .4rem;
    border-bottom: 1px solid #ece5f4;
}

.orderpay .others p i {
    float: right;
    font-size: .58rem;
}

.orderpay .others .others-money i {
    color: #de3163;
}

.orderpay .others .pay-detail i {
    color: #b0a4bc;
}

.orderpay .good-order-pay {
    height: 1rem;
    background: #fff;
    line-height: 1rem;
    padding: 0 .4rem;
    text-align: right;
    font-size: .4rem;
    color: #de3163;
}

.orderpay .order-detail {
    padding: .4rem;
    margin-bottom: 1.25rem;
    background: #fff;
    margin-top: .266667rem;
}

.orderpay .order-detail li {
    font-size: .36rem;
    color: #b0a4bc;
    line-height: .6rem;
}

.orderpay .pay {
    height: 1.306667rem;
    background: linear-gradient(to right, #926eb7, #de3193);
    text-align: center;
    line-height: 1.306667rem;
    color: #fff;
    font-size: .48rem;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.orderpay .goods-detail {
    display: none;
}

.orderpay .goods-detail-block {
    display: block;
}
</style>
