<template>
    <div class="orderdetail">
        <div class="order-goods">
            <div class="goods-wraper" :key="n" v-for="n in 3">
                <div class="img-box">
                    <img src="../../../assets/order/goods.png" alt="">
                </div>
                <div class="order-text">
                    <p class="text">生日氢气球套餐生日生日氢气球套餐生日氢气球套餐生日氢气球套餐</p>
                    <p class="price">￥500.00
                        <span>800.00</span>
                    </p>
                </div>
            </div>
    
        </div>
        <div class="needpay">
            <p>应付款：<span>￥200.00</span></p>
            <p>优惠券满减：<span>－￥200.00</span></p>
            <p class="fact">实付款：<span>￥200.00</span></p>
        </div>
        <ul class="order-detail">
            <li>订单编号：12345678901234567890</li>
            <li>下单时间：2017-07-17 17:13:45</li>
            <li>服务地址：郑州市金水区建业总部港</li>
            <li>服务时间：2017-08-10 09:00</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
/*不显示center内容  */

.center {
    background: #fff;
}


.orderdetail{
    background: #ece5f4;
}
.makecard,
.footGuide,
.mypic,
.myorder,
.mymsg,
footer {
    display: none;
}




/*不显示center内容  end*/

.orderdetail  .order-goods {
    overflow: hidden;
    padding: .4rem;
    border-bottom: 1px solid #ece5f4;
    background: #fff;
}
.orderdetail  .goods-wraper{
    margin-bottom: .266667rem;
    overflow: hidden;
}
.orderdetail  .order-goods .img-box {
    width: 2.666667rem;
    height: 2.666667rem;
    overflow: hidden;
    float: left;
    border-radius: .133333rem;
    border: 1px solid #ece5f4;
    margin-right: .266667rem;
}

.orderdetail  .order-goods .img-box img {
    width: 100%;
}

.orderdetail  .order-goods .order-text {
    width: 6.133333rem;
    float: left;

    font-size: .4rem;
    box-sizing: border-box;
    padding: .4rem 0;
}

.orderdetail  .order-text .text {
    color: #492b67;
    line-height: .533333rem;
}

.orderdetail  .order-text .price {
    color: #de3163;
    margin-top: .4rem;
    font-size: .48rem;
}

.orderdetail  .order-text .price span {
    font-size: .36rem;
    color: #c5bcce;
    text-decoration: line-through;
}

.orderdetail  .order-text .num {
    float: right;
    color: #c5bcce
}
/*  */
.orderdetail  .needpay{
    background: #fff;
    padding: .266667rem .4rem;

}
.orderdetail  .needpay p{
    line-height: .72rem;
    font-size: .4rem;
    color: #b0a4bc;
    
}
.orderdetail  .needpay p span{
    float: right;
}
.orderdetail  .needpay p.fact{
    color: #492b67;
    font-size: .48rem;
    line-height: .8rem;
}
.orderdetail  .needpay p.fact span{
    color: #de3163;
}
/*  */


.orderdetail  .order-detail {
    padding:.4rem;
    margin-bottom: 1.25rem;
    background: #fff;
    margin-top: .266667rem;
}

.orderdetail  .order-detail li {
    font-size: .36rem;
    color: #b0a4bc;
    line-height: .6rem;
}
</style>
