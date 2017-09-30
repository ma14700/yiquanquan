<template>
    <div class="bacolor">
        <head-top></head-top>
        <div class="partyContent">
            <img src="../../assets/paisong.jpg" alt="">
            <div class="partyContent-content">
                <p class="partyContent-content-title">2017年喵星人侵占地球名猫展北京站</p>
                <p class="partyContent-content-title1">2017年喵星人侵占地球名猫展北京站 <span><i class="iconfont icon-shouCang"></i></span></p>
            </div>
            <div class="partyContent-pray">
                <div>￥180.00起</div>
                <div class="partyContent-prayCart" @click="gocart()">带我上车</div>
            </div>
        </div>
        <div class="partyContent">
            <img src="../../assets/paisong.jpg" alt="">
            <div class="partyContent-content">
                <p class="partyContent-content-title">2017年喵星人侵占地球名猫展北京站</p>
                <p class="partyContent-content-title1">2017年喵星人侵占地球名猫展北京站 <span><i class="iconfont icon-shouCang"></i></span></p>
            </div>
            <div class="partyContent-pray">
                <div>￥180.00起</div>
                <div class="partyContent-prayCart">带我上车</div>
            </div>
        </div>
        <div class="partyContent">
            <img src="../../assets/home/paisong.jpg" alt="">
            <div class="partyContent-content">
                <p class="partyContent-content-title">2017年喵星人侵占地球名猫展北京站</p>
                <p class="partyContent-content-title1">2017年喵星人侵占地球名猫展北京站 <span><i class="iconfont icon-shouCang"></i></span></p>
            </div>
            <div class="partyContent-pray">
                <div>￥180.00起</div>
                <div class="partyContent-prayCart">带我上车</div>
            </div>
        </div>
        <footer></footer>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
    import headTop from '../../components/head/head';
    import footGuide from '../../components/footer/footGuide'
    export default {
        data() {
            return {
                swiperimg:[
          {
            id:1,
            img:'http://www.yqqparty.com/index/images/198-1.jpg',
            name:'马戈',
            introduce:'前端工程师，今天写博客，写的不错，hahahah'
          },
          {
            id:2,
            img:'http://www.yqqparty.com/index/images/198-2.jpg',
            name:'dnf',
            introduce:'《地下城与勇士》是一款韩国网络游戏公司NEOPLE开发的免费角色扮演2D游戏，由三星电子发行，并于2005年8月在韩国正式发布',
          },
          {
            id:3,
             img:'http://www.yqqparty.com/index/images/198-3.jpg',
             name:'英雄联盟',
             introduce:'《地下城与勇士》是一款韩国网络游戏公司NEOPLE开发的免费角色扮演2D游戏，由三星电子发行，并于2005年8月在韩国正式发布',
          },
          {
            id:4,
            title:'面具主题派对',
            img:'http://www.yqqparty.com/index/images/198-4.jpg',
            name:'炉石传说',
            introduce:'《地下城与勇士》是一款韩国网络游戏公司NEOPLE开发的免费角色扮演2D游戏，由三星电子发行，并于2005年8月在韩国正式发布',
          },
          {
            id:5,
            title:'疯狂酒吧趴',
            img:'http://www.yqqparty.com/index/images/198-4.jpg',
            name:'兰帝魅晨',
            introduce:'《地下城与勇士》是一款韩国网络游戏公司NEOPLE开发的免费角色扮演2D游戏，由三星电子发行，并于2005年8月在韩国正式发布',
          },
        ]
            }
        },
        components: {
            headTop,
            footGuide
        },
        created() {
            this.$http.get('/api/good/goodlist',{params:{catid:1}}).then(res=>{
                console.log(res)
            })
            this.$http.get('/api/good/goodlist?catid=1').then(res=>{
                console.log(res)
            })    
        },
        methods: {
            gocart(){
                this.$router.push({path:'/partydetail'})
            }
        }
    }
</script>
<style>
    .bacolor{
        background: #f3eef7;
    }
    footer{
        height: 1.466667rem;
    }
    .partyContent{
        width: 100%;
        margin-bottom: .4rem;
        background: #fff;
    }
    .partyContent>img{
        width: 10rem;
        height: 5.333333rem;
    }
    .partyContent-content{
        width: 10rem;
        padding: 0 .4rem;
        box-sizing: border-box;
        margin:0 auto;
        border-bottom: 1px solid #eeecf1;
    }
    .partyContent-content-title{
        padding-top: .4rem;
        font-size: .426667rem;
        color: #492b67;
        letter-spacing: 0px;
        font-weight: 600;
    }
    .partyContent-content-title1{
        padding-top: .266667rem;
        padding-bottom: .403333rem;
        font-size: 12px;
        color: #b0a4bc;
    }
    .partyContent-content-title1>span{
        float: right;
        display: block;
        position: relative;
        top:-5px;
    }
    .partyContent-content-title1>span>i{
        font-size: .613333rem;
    }
     .partyContent-pray{
        height: 1.6rem;
        width: 9.2rem;
        margin:0 auto;
        font-size: .426667rem;
        font-weight: 700;
        color: #de3163;
    } 
    .partyContent-pray>div:first-child{
        height: 100%;
        line-height: 1.6rem;
        width: 50%;
        float: left;
    }
    .partyContent-prayCart{
        width: 3.2rem;
        height: 1rem;
        line-height: 1.1rem;
        border-radius: 8px;
        display: inline-block;
        margin-top: .333333rem;
        float: right;
        text-align: center;
        color: #fff;
        font-weight: normal;
        font-size:.4rem;
        background:linear-gradient(to right, #946cb6 , #da3494);
    }
</style>
