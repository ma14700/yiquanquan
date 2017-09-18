<template>
    <div class="collect">

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">潮趴</mt-tab-item>
            <mt-tab-item id="2">套餐</mt-tab-item>
            <mt-tab-item id="3">商品</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                    <!--空白页  -->
                    <div class="blankpage">
                        <i class="iconfont icon-shangpin"></i>
                        <p>您还没有收藏的内容</p>
                    </div>
                    <!--空白页  end-->
                    <!--猜你喜欢  -->
                    <div class="youlike">
                        <p class="title">
                            <span class="line"></span>猜你喜欢
                            <span class="line"></span>
                        </p>
                    </div>
                    <!-- <div class="allcollect" v-for="n in 3" :key="n">
                        <div class="goods-img">
                            <img src="../../assets/shopcart/goods.png" alt="">
                        </div>
                        <div class="goods-text">
                            <p class="text">生日套餐生日套餐生日套餐生日套餐生日套餐生日套餐生 日套餐生日套餐生日套餐生日套餐生日套餐生日套餐
                            </p>
                            <p class="price">￥500.00
                                <span>￥500.00</span>
                                <i class="iconfont icon-shouCang"></i>
                            </p>
                        </div>
                    </div> -->
                    <!--猜你喜欢 end  -->
            </mt-tab-container-item>
             <!-- 套餐 -->
            <mt-tab-container-item id="2">
                <div v-if="packageCollect.length == 0">
                    <!--空白页  -->
                    <div class="blankpage">
                        <i class="iconfont icon-shangpin"></i>
                        <p>您还没有收藏的内容</p>
                    </div>
                    <!--空白页  end-->
                </div>

                <div class="allcollect" v-for="(item,index) in packageCollect" :key="item.id">
                    <div class="goods-img">
                        <img :src="item.mainImg" alt="" @click="goDetail(item)">
                    </div>
                    <div class="goods-text">
                        <p class="text">{{item.name}}
                        </p>
                        <p class="price">￥{{item.discountPrice}}
                            <span>￥{{item.salePrice}}</span>
                            <i class="iconfont icon-huabanfuben" @click="unCollect(item, index)"></i>
                        </p>
                    </div>
                </div>

            </mt-tab-container-item>
            <!-- 商品 -->
            <mt-tab-container-item id="3">
                <div v-if="goodCollectList.length == 0">
                    <!--空白页  -->
                    <div class="blankpage">
                        <i class="iconfont icon-shangpin"></i>
                        <p>您还没有收藏的内容</p>
                    </div>
                    <!--空白页  end-->
                </div>
                <div class="allcollect" v-for="(item,index) in goodCollectList" :key="item.id">
                    <div class="goods-img">
                        <img :src="item.goodPicUrl" alt="" @click="goDetail(item)">
                    </div>
                    <div class="goods-text">
                        <p class="text">{{item.goodName}}
                        </p>
                        <p class="price">￥{{item.goodPrice}}
                            <span>￥{{item.goodPrice}}</span>
                            <i class="iconfont icon-huabanfuben" @click="unCollect(item, index)"></i>
                        </p>
                    </div>
                </div>
            </mt-tab-container-item>
            

        </mt-tab-container>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { Navbar, TabItem } from 'mint-ui';

export default {
    data() {
        return {
            selected: '1',
            goodCollectList: '',
            packageCollect: '',
            readyToDelIndex: -1,
        }
    },
    created() {
        this.showGoodCollectList();
    },

    methods: {
        showGoodCollectList: function() {
            //我的收藏--商品
            this.$http.get('/api/userFavorite/userfavlist?favType=3').then(res => {
                console.log(res);
                this.goodCollectList = res.data;
            }).catch(err => {
                console.log(err)
            })

            //我的收藏--套餐
            this.$http.get('/api/userFavorite/userfavlist?favType=2').then(res => {
                console.log(res);
                this.packageCollect = res.data;
            }).catch(err => {
                console.log(err)
            })
        },
        unCollect: function(item, index) {
            this.readyToDelIndex = index;
            this.goodCollectList.splice(this.readyToDelIndex, 1);
            this.packageCollect.splice(this.readyToDelIndex, 1);
            this.$http.post("/api/userFavorite/userfavdel", { "Id": item.id, }).then(res => {
                console.log(res);
            })
        },
        goDetail(item){
            let id = '';
            let url = '';
            if(this.selected==2){
                id = item.partyId;
                url = '/mealdetail'
            }else if(this.selected == 3){
                id = item.goodInfoId
                url = '/shopdetail'
            }
            
            this.$router.push({ path: url , query:{id} })
        }
    },
}
</script>

<style>
/*不显示center内容  */


/* .center {
    background: #fff;
}

.collect {
    background: #ece5f4;
}

.makecard,
.footGuide,
.mypic,
.myorder,
.mymsg,
footer {
    display: none;
} */

.collect .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 1px solid #492b67;
    color: #492b67;
    margin: 0;
}

.collect .mint-navbar .mint-tab-item {
    padding: 0;
    height: 1.17333rem;
    color: #b0a4bc;
    border-bottom: 1px solid #ece5f4;
}

.collect .mint-navbar .mint-tab-item .mint-tab-item-label {
    line-height: 1.17333rem;
    font-size: .4rem;
}

.collect .mint-tab-container {
    background: #fff;
}




/*全部  */

.collect .allcollect {
    margin: .533333rem 0;
    padding: 0 .4rem;
    overflow: hidden;
}

.collect .goods-img {
    width: 2.66rem;
    height: 2.66rem;
    border: 1px solid #ece5f4;
    border-radius: 0.1333rem;
    float: left;
    overflow: hidden;
}

.collect .goods-img img {
    width: 100%;
}

.collect .goods-text {
    float: left;
    width: 6.4rem;
    padding: .4rem .2rem 0;
    box-sizing: border-box
}

.collect .goods-text .text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal!important;
    line-height: .506667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .4rem;
    color: #492b67;
}

.collect .goods-text .price {
    color: #de3163;
    font-size: .4rem;
    margin-top: .4rem;
    line-height: .6rem;
    font-weight: 700;
}

.collect .goods-text .price span {
    margin-left: .2rem;
    color: #b0a4bc;
    text-decoration: line-through;
    font-size: .36rem;
    font-weight: normal;
}

.collect .goods-text .price i {
    float: right;
    font-size: .48rem;
}





/*空白页  */

.collect .blankpage {
    text-align: center;
    font-size: .4rem;
    color: #b0a4bc;
    padding: .906667rem 0;
}

.collect .blankpage i {
    font-size: 3.066667rem;
}





/*猜你喜欢  */

.collect .youlike {
    font-size: .4rem;
    color: #b0a4bc;
    text-align: center;
}

.collect .youlike .title {
    line-height: 1rem;
    background: #ece5f4;
    height: 1rem;
}

.collect .youlike .title .line {
    width: .933333rem;
    height: 1px;
    display: inline-block;
    background: #b0a4bc;
    margin: .1rem .4rem;
}
</style>
