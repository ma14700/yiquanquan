<template>
    <div class="colormeal">
        <loading v-if="isLoading"></loading>
        <div v-if="!isLoading">
            <div class="homeHeader">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item in detailImg" :key="item"><img :src="item" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="mealdetail-content">
                <p class="mealdetail-content-title">
                    <span>{{mealDetail.name}}</span>
                    <span @click="packageCollect(mealDetail.id)" v-if="!mealDetail.isFavrite">
                        <i class="iconfont icon-wujiaoxingshoucang"></i>
                    </span>
                    <span @click="unPackageCollect(mealDetail.id)" v-if="mealDetail.isFavrite">
                        <i class="iconfont icon-huabanfuben" style="color:#de3163"></i>
                    </span>
                </p>
                <p class="mealdetail-content-sale">
                    <span>{{mealDetail.discountPrice | two}}</span>
                    <span>{{mealDetail.salePrice | two}}</span>
                    <span>销量{{mealDetail.virtualSales}}件</span>
                </p>
                <!-- 标签 -->
                <div class="mealdetail-content-label" v-if="labels.length>0">
                    <div class="mealdetail-content-labelContent" v-for="item in labels" :key="item">
                        {{item}}
                    </div>
                </div>
                <!-- 标签 end-->
            </div>
            <div class="mealdetail-footer">
                <div class="mealdetail-footer-head" :class="{'fixed':showIcon}">
                    <div class="mealdetail-footer-headLeft" :class="{mealcolor:mealcolorr == 0}" @click="mealColor(0)">套餐介绍</div>
                    <div class="mealdetail-footer-headRight" :class="{mealcolor:mealcolorr == 1}" @click="mealColor(1)">套餐明细</div>
                </div>
                <div class="mealdetail-footer-headLeftContent" v-if="mealcolorr == 0" :class="{'mgt':showIcon}">
                    <div class="partydetail-detail" v-html="mealDetail.content">
                    
                    </div>
                </div>
                <div class="mealdetail-footer-headLeftContent" v-if="mealcolorr == 1" :class="{'mgt':showIcon}">
                    <div class="mealdetail-footer-headContent clearfix" v-for="(item,index) in packageDetail" :key="index" @click="mealdetail(item.id)">
                        <img :src="item.goodFirstPicUrl" alt="">
                        <p>
                            <span>{{item.goodName}}</span>
                            <span class="mealred">{{item.goodPrice | two}}
                                <span>x{{item.quantity}}</span>
                            </span>

                        </p>
                    </div>
                </div>

            </div>
            <div class="mealdetail-footer-pay" @click="nowBuy(mealDetail.id)">
                立即抢购
            </div>
            <div class="detail-collect" v-show="collect">
                <div class="detail-collect-content" v-if="collectState == 1">
                    收藏成功
                </div>
                <div class="detail-collect-content" v-else>
                    取消收藏
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import headTop from '../../components/head/head';
import Loading from '../../components/loading/loading'
import { mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            mealcolorr: "",
            catId: '',//套餐接口参数
            mealDetail: [],//套餐数据
            detailImg: [], //轮播图
            packageDetail: '',//套餐明细
            isCollect: false,//是否收藏
            labels: [],//标签
            scroll: '',
            collect: false,
            collectState: 1,
            isLoading: true,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.changeShow)
    },
    created() {
        this.getDetailData();
    },
    computed: {
        showIcon: function() {
            this.changeShow();
            return this.scroll > 375;
        }
    },
    methods: {
        ...mapMutations([
            'SETTLE_PACKAGE_ACCOUNTS', 'CLEAR_PACKAGE'
        ]),
        mealdetail(index) {
            this.$router.push({ path: '/mealdetail', query: { id: index } })
        },
        changeShow() {
            this.scroll = document.body.scrollTop;
        },
        mealColor(index) {
            this.mealcolorr = index;
            if (index == 1) {
                this.$http.get('/api/partypkg/partypkgdetail?id=' + this.catid).then(res => {
                    console.log(res)
                    this.packageDetail = res.data.data;
                })
            }
        },
        //获取详情数据
        getDetailData() {
            this.catid = this.$route.query.id;
            this.$http.get('api/partypkg/partypkginfo?id=' + this.catid).then(res => {
                console.log(res);
                if (!res.data.data) {
                    alert('没有此商品');
                    this.$router.push('/shopstore')
                } else {
                    this.mealDetail = res.data.data;
                    this.detailImg = res.data.data.thumbImgList.split(",");
                    if (res.data.data.labels) {
                        this.labels = res.data.data.labels.split(",");
                    }
                    this.isLoading = false;

                }

            })

        },
        //收藏套餐
        packageCollect(id) {
            this.mealDetail.isFavrite = !this.mealDetail.isFavrite
            this.isCollect = true;
            this.collectState = 1;
            this.collect = true;
            var self = this;
            setTimeout(function() {
                self.collect = false
            }, 1000);
            this.$http.post('api/userFavorite/tofavrite/', { "FavType": 2, "FavToId": id }).then(res => {
                console.log(res)
            })
        },
        unPackageCollect(id) {
            this.mealDetail.isFavrite = !this.mealDetail.isFavrite
            this.isCollect = false;
            this.collectState = 0;
            this.collect = true;
            var self = this;
            setTimeout(function() {
                self.collect = false
            }, 1000);
            this.$http.post('api/userfavorite/userfavdel', { "Id": 0, "FavType": 2, "FavToId": id }).then(res => {
                console.log(res);
            })
        },
        //立即抢购
        nowBuy(id) {
            this.CLEAR_PACKAGE();
            this.$router.push({ path: '/cartpackage', query: { id } });
            this.SETTLE_PACKAGE_ACCOUNTS({
                packageId: this.mealDetail.id,
                discountPrice: this.mealDetail.discountPrice,
                downPayment: this.mealDetail.downPayment,
                imgUrl: this.mealDetail.mainImg,
                name: this.mealDetail.name,
                summary: this.mealDetail.summary,
            });
        },
    },
    components: {
        Loading
    },
    filters: {
        //保留两位小数点
        two: function(value) {
            if (!value) { return '' };
            return '¥' + value.toFixed(2);
        }
    }
}
</script>

<style>
.partydetail-detail img {
    width: 100%
}

.detail-collect-content {
    width: 3.666667rem;
    height: 0.8666667rem;
    line-height: 0.866667rem;
    color: #fff;
    margin: 0 auto;
    border: 1px solid #333;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
}

.detail-collect {
    background: transparent;
    height: 0.866667rem;
    line-height: 0.8667rem;
    position: fixed;
    text-align: center;
    bottom: 1.333333rem;
    width: 100%;
}

.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%)
}

.mgt {
    margin-top: 2.033333rem !important;
}

.fixed {
    position: fixed;
    top: 0;
}

.mealred {
    color: #de3163;
    font-size: .4rem;
}

.mealdetail-footer-headContent {
    width: 100%;
    height: 2.666667rem;
    font-size: .4rem;
    color: #b0a4bc;
    padding: 0 .4rem;
}

.mealdetail-footer-headContent img {
    width: 2.666667rem;
    height: 2.666667rem;
    border-radius: 10px;
    border: 1px solid #ece5f4;
    float: left;
}

.mealdetail-footer-headContent>p:nth-of-type(1) {
    width: 6.1rem;
    height: 100%;
    margin-left: .32rem;
    float: left;
    margin-top: .8rem;
}

.mealdetail-footer-headContent>p:nth-of-type(2) {
    width: 1.066667rem;
    margin-right: .4rem;
    float: right;
    margin-top: 1.555rem;
}

.mealdetail-footer-headContent>p:nth-of-type(1)>span {
    display: block;
    width: 100%;
    line-height: .666667rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mealdetail-footer-headContent>p>span:nth-of-type(1) {
    width: 80%;
}

.colormeal {
    background: #f3eef7;
}

.mealdetail-footer-headContent>p>span>span {
    color: #b0a4bc;
    display: block;
    float: right;
    margin-right: 0.4rem;
}

.mealdetail-footer-pay {
    width: 10rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: linear-gradient(to right, #946cb6, #da3494);
    text-align: center;
    font-size: .52rem;
    color: #fff;
    position: fixed;
    bottom: 0px;
    z-index: 999;
}

.mealdetail-footer-headLeftContent {
    width: 100%;
    margin-top: .453333rem;
    min-height: 16.666667rem;
    overflow: hidden;
    padding: 0 0.4rem;
    box-sizing: border-box;
}

.partydetail-detail {
    width: 9.2rem;
    margin: 0 auto;
    padding-bottom: .8rem;
}

.partydetail-detail p img {
    width: 100%;
}

.partydetail-detail-top {
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    font-size: .4rem;
    color: #4a2c68;
    font-weight: 600;
}

.partydetail-detail-center {
    font-size: 14px;
    color: #b0a4bc;
    letter-spacing: 1px;
}

.partydetail-detail-center img {
    width: 9.2rem;
    height: 5.066667rem;
    margin-bottom: 0.4rem;
}

.mealcolor {
    color: #492b67 !important;
    border-bottom: 2px solid #492b67 !important;
}

.homeHeader {
    width: 100%;
    height: 6.666667rem;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
}

.homeHeader img {
    width: 100%;
    height: 100%;
}

.mint-swipe-indicator.is-active {
    background: #9c154b;
}

.mint-swipe-indicator {
    background: #b4bac1;
}

.mealdetail-content {
    width: 10rem;
    margin: 0 auto;
    background: #fff;
    padding: .4rem;
    box-sizing: border-box
}

.mealdetail-content-title {
    width: 100%;
    overflow: hidden;
    line-height: .8rem;
    font-size: .48rem;
    color: #492b67;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.mealdetail-content-title>span:first-child {
    float: left;
    display: block;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.mealdetail-content-title>span {
    float: right;
}

.mealdetail-content-title>span>i {
    font-size: .6rem;
}

.mealdetail-content-sale {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
}

.mealdetail-content-sale>span:nth-of-type(1) {
    font-size: .45rem;
    color: #de3163;
    font-weight: 600;
}

.mealdetail-content-sale>span:nth-of-type(2) {
    font-size: 12px;
    color: #b0a4bc;
    padding-left: 20px;
    text-decoration: line-through;
}

.mealdetail-content-sale>span:nth-of-type(3) {
    font-size: 12px;
    color: #b0a4bc;
    float: right;
    display: block;
}

.mealdetail-content-label {
    width: 100%;
    height: 1.2rem;
    display: flex;
}

.mealdetail-content-labelContent {
    flex: 1;
    width: 1.866667rem;
    height: .666667rem;
    border: 1px solid #beb5ca;
    border-radius: 3px;
    line-height: .666667rem;
    margin-right: .266667rem;
    text-align: center;
    color: #beb5ca;
    margin-top: .266667rem;
    font-size: .4rem;
}

.mealdetail-content-labelContent:last-child {
    margin-right: 0px;
}

.mealdetail-footer {
    width: 100%;
    background: #fff;
    margin-top: .4rem;
    padding-bottom: 1.6rem;
}

.mealdetail-footer-head {
    width: 100%;
    display: flex;
    background: #fff;
}

.mealdetail-footer-headLeft,
.mealdetail-footer-headRight {
    flex: 1;
    text-align: center;
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: .42rem;
    color: #b0a4bc;
    border-bottom: 1px solid #b0a4bc;
}
</style>


