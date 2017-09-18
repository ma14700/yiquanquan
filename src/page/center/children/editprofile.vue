<template>
  <div class="editprofile">
    <div class="personal-pic">头像
        <span>
          <img :src="this.mydata.headImage" alt="">
        </span>
      </div>
    <ul class="personal-data">
      
      <li>昵称
        <span>{{this.mydata.nickName}}</span>
      </li>
      <li>性别
        <span v-if="this.mydata.gender == true">男</span>
        <span v-else>女</span>
      </li>
      <li>个性签名
        <input type="text" placeholder="个性签名">
      </li>
    </ul>
    
  </div>
</template>
<script>
import { Picker } from 'mint-ui';
import {setStore,getStore} from '../../../config/mUtils'
export default {
  data() {
    return {
      sex: '',
      mydata:[]
    }
  },
  created(){
    this.sex = getStore('userInfo');
    this.mydata = JSON.parse(this.sex);
    console.log(this.mydata)
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

/*  */
.editprofile{
  background: #ece5f4;
  min-height: 16rem;
}
.editprofile  .personal-pic{
  height: 1.333333rem;
  padding: 0 .4rem;
  background: #fff;
  line-height: 1.333333rem;
  font-size: .4rem;
  overflow: hidden;
  color: #492b67;
  margin-bottom: .266667rem;
}
.editprofile  .personal-pic span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  overflow: hidden;
  float: right;
  margin-top: 0.16rem;
}

.editprofile  .personal-pic span img {
  width: 100%;
}



.editprofile  .personal-data {
  line-height: 1.333333rem;
  font-size: .4rem;
  overflow: hidden;
  color: #492b67;
}

.editprofile  .personal-data li {
  height: 1.333333rem;
  padding: 0 .4rem;
  background: #fff;
}
 


.editprofile  .personal-data li span,
input {
  float: right;
  text-align: right;
  color: #b0a4bc;
  height: 1.2rem;
  width: 7rem;
  border: none;
}

.editprofile  ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #b0a4bc;
  font-size: .4rem
}

.editprofile   :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #b0a4bc;
  font-size: .4rem
}

.editprofile   ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b0a4bc;
  font-size: .4rem
}

.editprofile   :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b0a4bc;
  font-size: .4rem
}

.editprofile  .choose-sex{
  height: auto;
  padding: 0 .4rem;
  line-height: 1.333333rem;
  font-size: .4rem;
  color: #492b67;
  background: #fff;
}
</style>

