<template>
    <div>
        <loading v-if="isLoading"></loading>
        <div v-if="!isLoading" ref="mealul"  >
          <div class="meal-top" ref="ulbox" >
                <ul class="meal-top-content"  ref="ulist">
                    <li  @click="getPartyList(0)" :class="{colorPurle:catId==0}" ><span>全部</span></li>
                    <li v-for="(item,index) in partyCateList" :key="index" @click="getPartyList(item.id)" class="test"  :class="{colorPurle:item.id==catId}"><span>{{item.name}}</span></li>
                </ul>
            </div>
            <div class="meal-content-wraper">
                <div class="blankpage" v-if="partyList.length == 0">
                    <p>暂时还没有上架哦</p>
                </div>
                <div class="meal-content" v-for="(item,index) in partyList" :key="index" v-else>
                    <div class="meal-content-shadow">
                        <p>{{item.name | dot}}</p>
                        <p>￥{{item.discountPrice | two}}</p>
                    </div>
                    <img :src="item.mainImg" alt="" @click="mealdetail(item)">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import loading from "../../components/loading/loading";
import Velocity from "velocity-animate";
export default {
  data() {
    return {
      partyCateList: [],
      partyList: [],
      partyListCache: {},
      currentIndex: -1,
      catId: 0,
      isLoading: false,
      scrolled: "",
      scrollLeft: 0
    };
  },
  computed: {},
  watch: {
    // scrollLeft(){
    //     this.scrollLeft = this.$refs.mealul.offsetLeft;
    //     console.log(this.scrollLeft)
    //     return this.scrollLeft
    // }
  },
  created() {
    this.getPartyCateList();
    var queryId = this.$route.query.classifyId || 0;
    this.getPartyList(queryId);
  },
  methods: {
    mealdetail(item) {
      let id = item.id;
      this.$router.push({ path: "/mealdetail", query: { id } });
    },
    getPartyCateList() {
      this.$http.get("/api/partypkgcat/partycatlist").then(res => {
        this.partyCateList = res.data;
      });
    },
    getPartyList(cateId) {
      this.catId = cateId;
      var cache = this.partyListCache["cate-" + cateId];
      if (!!cache) {
        this.partyList = cache;
        this.moveUl(cateId);
        return;
      }
      this.$http
        .post("api/partypkg/partylist", {
          catId: cateId,
          page: 1,
          row: 1000,
          recommend: false
        })
        .then(res => {
          this.partyList = res.data;
          this.moveUl(cateId);
          this.partyListCache["cate-" + cateId] = res.data;
        });
    },
    moveUl(cateId) {
      this.$nextTick(function() {
        var index = this.partyCateList.findIndex(function(s) {
          return s.id == cateId;
        });
        var list = this.$refs.ulist.children;
        var current = list[index + 1];
        var move = - Math.round(
          window.outerWidth / 2 - current.clientWidth / 2
        );
        //this.$refs.ulbox.scrollLeft = move > 0 ? move : 0;
        Velocity(current,'scroll', {
          offset: move,
          container: this.$refs.ulbox,
          axis: 'x'
        });


      });

    }
  },
  components: {
    loading
  },
  filters: {
    //保留两位小数点
    two: function(value) {
      if (!value) {
        return "";
      }
      return value.toFixed(2);
    },
    dot: function(value) {
      if (!value) {
        return value;
      } else {
        if (value.length > 10) {
          return value.slice(0, 10) + "...";
        } else {
          return value;
        }
      }
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
        otherPageFrom() {
            if (this.$route.query.classifyId != undefined) {
                this.catId = this.$route.query.classifyId;
                this.currentIndex = this.$route.query.classifyId -1;
                this.$nextTick(function () {
                    // DOM is now updated
                    // `this` is bound to the current instance
                    this.moveUl(this.currentIndex);
                })
                
            }
            this.$http.post('api/partypkg/partylist', {
                catId: this.catId,
                page: 1,
                row: 1000,
                recommend: false
            }).then(res => {
                this.partyDetail = res.data;
                // if (res.data) {
                //     this.isLoading = false;
                // }
            });
        },
        chooseParty(item, index) {
            if (index == -1) {
                this.currentIndex = -1;
                this.catId = 0
            } else {
                this.currentIndex = index;
                this.moveUl(index);
                this.catId = item.id;
            }
            this.$http.post('api/partypkg/partylist', {
                catId: this.catId,
                page: 1,
                row: 1000,
                recommend: false
            }).then(res => {
                this.partyDetail = res.data; 
            })
        },
        moveUl(index){
            let count = index-1; 
            this.$refs.mealul.getElementsByClassName('meal-top')[0].scrollLeft = count*60;
        }

    },
    components: {
        loading
    },
    filters: {
        //保留两位小数点
        two: function(value) {

            if (!value) { return '' };
            return value.toFixed(2);
        },
        dot: function(value) {
            if (!value) {
                return value
            } else {
                if (value.length > 10) {
                    return value.slice(0, 10) + '...'
                } else {
                    return value
                }
            }
        }
    }
  }
};
</script>

<style>
.move-transition {
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.colorPurle {
  font-weight: bolder;
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
  background-color: #fff;
}

::-webkit-scrollbar-button {
  background-color: #fff;
}

::-webkit-scrollbar-corner {
  background-color: #fff;
}

.meal-top {
  height: 1.2rem;
  box-shadow: 0 0 2px 0 #aaa;
  background: #fff;
  width: 10rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}

.meal-top-content {
  display: block;
  float: left;
  width: auto;
  height: 100%;
  list-style: none;
  padding: 0;
  overflow: hidden;
}

.meal-top-content li {
  display: table-cell;
  overflow: hidden;
  color: #b0a4bc;
}
.meal-top-content li span {
  display: block;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;

  /* padding:0 .4rem; */
  min-width: 2rem;
  text-align: center;
}

.meal-content-wraper {
  width: 9.2rem;
  margin: 0 auto;
  margin-top: 0.3rem;
}
.meal-content {
  width: 100%;
  height: 5.075862rem;
  margin-bottom: 0.4rem;
  border-radius: 0.266667rem;
  position: relative;
}
.meal-content-shadow {
  width: 4.3rem;
  height: 1.8rem;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0%;
  bottom: 3%;
}
.meal-content-shadow p {
  width: 100%;
  color: #fff;
  font-size: 0.38rem;
  text-align: left;
  padding-left: 0.2rem;
  line-height: 0.4rem;
}
.meal-content-shadow p:first-child {
  margin-top: 0.5rem;
}
.meal-content-shadow p:last-child {
  margin-top: 0.2rem;
  font-size: 0.32rem;
}
.meal-content img {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}

.blankpage {
  min-height: 14.8rem;
  background: #fff;
  text-align: center;
  font-size: 0.48rem;
  color: #b0a4bc;
}

.blankpage p {
  line-height: 14rem;
}
</style>

