<template>
  <div qsearch>
    <head-top></head-top>
    <div class="qsearch">
      <div class="qsearch-head">
        <div class="head-left" @click="qsearchBack()">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="head-right">
          <input type="text" placeholder="请输入关键词" v-model="value" @blur="Seach" @keyup.enter="Seach">
          <i class="iconfont icon-sousuo1 qsearch-enter" @click="Seach"></i>
        </div>
      </div>
      <div class="qsearch-content">
        <p>热门搜索</p>
        <ul class="qsearch-content-title">
          <li v-for="item in hotGoods" @click="goGoods(item.id)" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div class="qsearch-content qsearch-content2 " v-if="historySearch.length !=0">
        <p>历史搜索</p>
        <ul class="qsearch-content-title">
          <li v-for="(item,index) in historySearch" :key="index" @click="getValue(item,index)">{{item.title}} <i class="iconfont icon-cuohao" @click.stop="deleteSingle(index)"></i></li>
        </ul>
        <span class="clearall" @click="clearall">清空历史搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from '../../components/head/head';
import { mapState, mapMutations } from 'vuex';
import { setStore, getStore, removeStore } from '../../config/mUtils';
export default {
  data() {
    return {
      hotGoods: [],
      value: '',
    }
  },

  computed: {
    ...mapState([
      'historySearch'
    ]),
  },
  methods: {
    ...mapMutations([
      'HISTORY_SEARCH', 'GET_HISTORY_SEARCH', 'CLEAR_HISTORY_SEARCH','CLEAR_SINGLE_HISTORY'
    ]),
    Seach() {
      if (this.value != ' ' && this.value) {
        this.HISTORY_SEARCH({
          title: this.value,
        });
        this.$router.push({ path: '/shoplist', query: { id: 0, value: this.value } })

      }
    },
    getValue(item){
      this.value = item.title;
    },
    deleteSingle(index){
        this.CLEAR_SINGLE_HISTORY(index);
    },
    clearall(){
      this.CLEAR_HISTORY_SEARCH();
    },
    qsearchBack() {
      this.$router.go(-1)
    },
    //传输热门商品
    hotData() {
      this.$http.get('/api/partypkgcat/partycatlist').then(res => {
        this.hotGoods = res.data;
        if (this.hotGoods.length > 8) {
          this.hotGoods = this.hotGoods.slice(0, 8);
        }
        this.hotGoods = res.data;
      })
    },
    goGoods(classifyId) {

      this.$router.push({ path: '/shopmeal', query: { classifyId } }, )
    }
  },
  created() {
    this.hotData();
    this.GET_HISTORY_SEARCH();
    // this.CLEAR_HISTORY_SEARCH()
  },
  components: {
    headTop
  }
}
</script>

<style>
.head-left {
  width: 10%;
  float: left;
  height: .933333rem;
  line-height: .933333rem;
  margin-left: 2%;
}

.head-left i {
  font-size: .56rem;
}

.head-right {
  width: 85%;
  float: right;
  height: .933333rem;
  line-height: .933333rem;
  position: relative;
  background: #eeecf1;
  border-radius: 5px;
  margin-right: 3%;
}

.head-right input {
  width: 90%;
  height: .8rem;
  padding: 0px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 15%;
  background: #eeecf1;
  box-sizing: border-box;
  color: #c5bcce;
  font-size: 12px;
  line-height: 0.8rem;
}

.qsearch-head {
  margin-top: 10px;
  height: .933333rem;
}

.qsearch {
  width: 9.2rem;
  margin: 0 auto;
  min-height: 8rem;
}

.qsearch-enter {
  position: absolute;
  font-size: .453333rem;
}

.qsearch-content {
  margin-top: .533333rem;
  color: #c5bcce;
  overflow: hidden;
}
.qsearch-content2{
  min-height: 3rem;
  overflow: visible;
  position: relative;
}
.qsearch-content-title {
  width: 100%;
  margin-top: .4rem;
  margin-left: 0.2rem;
  overflow: hidden;
  padding: .2rem 0;
}
.qsearch-content2 .qsearch-content-title li{
  width: auto;
  padding:0 .2rem;
}
.qsearch-content-title li {
  width: 20%;
  margin-right: 4%;
  float: left;
  height: .666667rem;
  line-height: .666667rem;
  text-align: center;
  border: 1px solid #c5bcce;
  color: #c5bcce;
  border-radius: 3px;
  margin-bottom: .266667rem;
  position: relative;
}
.qsearch-content-title li i{
  position: absolute;
  right: -.2rem;
  top: -.3rem;
}
 .clearall{
  display: block;
  font-size: .4rem;
  width: 50%;
  text-align: center;
  background: #eeecf1;
  line-height: 1rem;
  border-radius: .133333rem;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  margin-left: -25%
}
</style>

