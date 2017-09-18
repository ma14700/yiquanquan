<template>
    <div class="coupons">
        <p class="coupons-num">录入优惠券代码<i class="iconfont icon-smallxiangyou"></i></p>
        <ul class="mycoupons">
            <li>
                <div class="coupons-price">
                    <p><span class="num"><i>￥</i>200</span>
                    <span class="type">优惠券</span></p>
                </div>
                <div class="usetime">
                    <p class="money">满1000元<span>立减200元</span></p>
                    <p class="time">有效期2017.08.08-2017.08.31</p>
                </div>
                <div class="coupons-status">已使用</div>
            </li>
            <li>
                <div class="coupons-price">
                    <p><span class="num"><i>￥</i>200</span>
                    <span class="type">优惠券</span></p>
                </div>
                <div class="usetime">
                    <p class="money">满1000元<span>立减200元</span></p>
                    <p class="time">有效期2017.08.08-2017.08.31</p>
                </div>
                <div class="coupons-status expired">已过期</div>
            </li>
            <li>
                <div class="coupons-price">
                    <p><span class="num"><i>￥</i>200</span>
                    <span class="type">优惠券</span></p>
                </div>
                <div class="usetime">
                    <p class="money">满1000元<span>立减200元</span></p>
                    <p class="time">有效期2017.08.08-2017.08.31</p>
                </div>
                <div class="coupons-status expired">已过期</div>
            </li>
        </ul>
    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style scoped>
/*不显示center内容  */
.center{
    background: #fff;
}
.coupons {
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
.coupons{
    background: #fff;
}
.coupons  .coupons-num {
    line-height: 1.333333rem;
    font-size: .4rem;
    color: #492b67;
    padding: 0 .4rem;
    border-bottom: 1px solid #ece5f4;
    background: #fff;
}

.coupons  .coupons-num  i {
    float: right;
    color: #b0a4bc;
}
.coupons  .mycoupons{
    padding: 0 .4rem;
}
.coupons  .mycoupons li{
    width: 100%;
    height: 2.2rem;
    border: 1px solid #ece5f4;
    margin-top: .4rem;
    overflow: hidden;
    position: relative;
}
.coupons  .coupons-price{
    width: 2.9rem;
    border-right: 1px dashed #ece5f4;
    height: 100%;
    text-align: center;
    font-size: .4rem;
    color: #de3163;
    box-sizing: border-box;
    padding-top: .6rem;
    position: relative;
    float: left;
    text-align: right;
    padding-right: .6rem

}
.coupons  .coupons-price .num{
    font-size: .68rem;
    width: 100%;
    display: inline-block
}
.coupons  .coupons-price .num i{
    font-size: .4rem;
}
.coupons  .coupons-price .type{
    color: #b0a4bc;
    display: block;
}
.coupons  .usetime{
    float: left;
    height: 100%;
    width: 6rem;
    text-align: center;
    box-sizing: border-box;
    padding: .5rem 0;
}
.coupons  .usetime .money{
    font-size: .48rem;
    color: #b0a4bc;
    line-height: .6rem;
}
.coupons  .usetime .money span{
    color:#de3163;
    
}
.coupons  .usetime .time{
    background: #b0a4bc;
    color: white;
    border-radius:10px;
    width: 5rem;
    padding: 0 .2rem;
    font-size: .32rem;
    height: .533333rem;
    line-height: .533333rem;
    margin-left: .4rem;
    margin-top: .1rem;
}
.coupons  .coupons-status{
    width: 4rem;
    height: .45rem;
    line-height: .45rem;
    background:#de3163;
    position: absolute;
    text-align: right;
    right: -.2rem;
    transform: rotate(45deg);
    top: 1rem;
    font-size: .32rem;
    color: #fff;
    transform-origin: right;
    padding-right: .44rem;
}
.coupons  .expired{
    background: #b0a4bc;
}
</style>
