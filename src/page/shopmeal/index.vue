<template>
    <div>
        <head-top></head-top>
        <div class="meal-top">
            <ul class="meal-top-content">
                <li @click="chooseParty(null,-1)" :class="{colorPurle:currentIndex==-1}">全部</li>
                <li v-for="(item,index) in partyList" :key="index" @click="chooseParty(item,index)" :class="{colorPurle:currentIndex==index}">{{item.name}}</li>
            </ul>
        </div>
        <div class="meal-content" v-for="(item,index) in partyDetail" :key="index">
            <img :src="item.mainImg" alt="" @click="mealdetail(item)">
        </div>
    </div>
</template>
<script>
import headTop from '../../components/head/head';
export default {
    data() {
        return {
            partyList: '',
            currentIndex: -1,
            catId: 0,
            partyDetail: '',
        }
    },
    mounted() {

    },
    computed: {

    },
    created() {
        this.getPartyList();
        this.chooseParty(null, -1)

    },
    methods: {
        mealdetail(item) {
            let id = item.id
            this.$router.push({ path: '/mealdetail', query: { id } })
        },
        getPartyList() {
            this.$http.get('/api/partypkgcat/partycatlist').then(res => {
                this.partyList = res.data;
                console.log(this.partyList)
            })

        },
        chooseParty(item, index) {
            if (this.$route.query.classifyId != null) {
                this.catId = this.$route.query.classifyId;
                this.currentIndex = this.$route.query.classifyId-1;
            } else {
                if (index == -1) {
                    this.currentIndex = -1;
                    this.catId = 0
                } else {
                    this.currentIndex = index;
                    this.catId = item.id;
                }

            }

            this.$http.post('api/partypkg/partylist', {
                catId: this.catId,
                page: 1,
                row: 10,
                recommend: true
            }).then(res => {
                console.log(res)
                this.partyDetail = res.data;
            })

        },

    },
    components: {
        headTop
    }
}
</script>

<style>
.colorPurle {
    color: #4a2c68 !important;
}

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

.meal-top {
    width: 100%;
    height: 1.2rem;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-x: scroll;
}

.meal-top-content {
    overflow: hidden;
    min-width: 10rem;
    display: flex;
    justify-content: flex-start;
    width: 180%;
}

.meal-top-content li {
    display: inline-block;
    font-size: .4rem;
    padding: 0 .4rem;
    box-sizing: border-box;
    color: #b0a4bc;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
    height: 1.2rem;
    line-height: 1.2rem;
}

.meal-content {
    width: 100%;
}

.meal-content img {
    width: 100%;
    height: 5.266667rem;
}
</style>

