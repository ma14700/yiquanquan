<template>
    <div class="comment">
        <p class="test" @click="showReviews">点击我写评价</p>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom">
            <div class="reviews">
                <div class="pleased">服务满意度：
                    <span class="all">
                        <input type="radio" name="b" value="0" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                        <input type="radio" name="b" value="1" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                        <input type="radio" name="b" value="2" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                        <input type="radio" name="b" value="3" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                        <input type="radio" name="b" value="4" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                        <input type="radio" name="b" value="5" v-model="inputdata" />
                        <span class="iconfont icon-shouCang"></span>
                    </span>
                </div>
                <!--  -->
                <ul class="comments">
                    <li>服务周到</li>
                    <li>态度好</li>
                    <li>热情</li>
                    <li>专业素养高</li>
                    <li>非常专业</li>
                </ul>
                <div class="write">
                    <textarea name="" id="" class="write-here" v-model="RateContent"></textarea>
                    <ul class="picture">

                        <li>
                            <i class="iconfont icon-yanjing"></i>
                            <p>添加图片</p>
                        </li>
                        <li>
                            <img src="../../../assets/order/goods.png" alt="">
                        </li>
                        <li>
                            <i class="iconfont icon-yanjing"></i>
                            <p>1/3</p>
                        </li>
                    </ul>
                </div>


            </div>
            <div class="confirm-reviews" @click="submitComment">提交评论</div>
        </mt-popup>
    </div>
</template>

<script>
import { Popup } from 'mint-ui';
export default {
    data() {
        return {
            popupVisible: false,
            test: false,
            inputdata: '5',
            RateContent:'写下体会，帮助其他小伙伴吧~'
        }
    },
    watch:{

    },
    created(){
        //console.log(this.inputdata);
    },
    methods: {
        showReviews() {
            this.popupVisible = true;
        },
        Test() {
            this.test = true;

        },
        submitComment(){
             this.popupVisible = false;
             this.$http.post('/api/rate/add',{
                 "RateContent":this.RateContent,
                 "RateResult":this.RateContent,
                 "RateOrderId":this.RateContent,
                 "RateScore":this.RateContent,

             }).then(res=>{

             })
        }
    }
}
</script>
<style>
.comment .test {
    font-size: .48rem;
    text-align: center;
    margin-top: .4rem;
}

.comment .reviews {
    padding: .4rem;
    width: 10rem;
    box-sizing: border-box;
}

.comment .reviews .pleased {
    font-size: .4rem;
    color: #492b67;
}

.comment .all>input {
    opacity: 0;
    position: absolute;
    width: .426667rem;
    height: .426667rem;
    margin: 0;
}

.comment .all>input:nth-of-type(1),
.comment .all>span:nth-of-type(1) {
    display: none;
}

.comment .all>span {
    font-size: .533333rem;
    color: #de3163;
    -webkit-transition: color .2s;
    transition: color .2s;
}

.comment .all>input:checked~span {
    color: #b0a4bc;
}

.comment .all>input:checked+span {
    color: #de3163;
}



/*  */

.comment .comments {
    margin-top: .4rem;
}

.comment .comments li {
    line-height: .8rem;
    padding: 0 .6rem;
    border-radius: .133333rem;
    height: .8rem;
    border: 1px solid #b0a4bc;
    float: left;
    margin-right: .266667rem;
    margin-bottom: .266667rem;
    color: #b0a4bc;
    font-size: .4rem
}



/*xie  */

.comment .write {
    box-sizing: border-box;
    color: #b0a4bc;
    text-align: center;
    position: relative;
}
.comment .write-here{
    width: 100%;
    height: 5.533333rem;
    padding: .4rem;
    box-sizing: border-box;
    color: #b0a4bc;
    font-size: .36rem;
    border: 0;
    line-height: .48rem;
}
.comment .write .picture{
    position: absolute;
    bottom: 0;
    left: .266667rem;
}
.comment .write .picture li{
    margin-right: .266667rem;
    overflow: hidden;
    float: left;
    width: 1.8rem;
    height: 1.8rem;
    border: 1px dashed #b0a4bc;
}

.comment .picture li img {
    width: 100%;
}
.comment .picture li i{
    margin-top: .4rem;
    display: block;
    font-size: .533333rem;
}
/*  */

.comment .confirm-reviews {
    height: 1.306667rem;
    line-height: 1.306667rem;
    text-align: center;
    font-size: .48rem;
    color: #fff;
    background: linear-gradient(to right, #926eb7, #de3193);
}
</style>
