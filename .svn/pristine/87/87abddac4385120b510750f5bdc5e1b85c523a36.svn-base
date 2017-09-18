<template>
  <div class="feedColor">
    <div class="feedBack">
      <div class="feed-question">
        <p>问题和意见</p>
        <textarea name="" id="" cols="30" rows="10" v-model="question" >

        </textarea>
      </div> 
      <div class="feed-button" @click="questionPush">
        提交
      </div>
    </div>
  </div>

</template>

<script>
export default {
    data(){
      return{
        question:null
      }
    },
    created(){

    },
    methods:{
      questionPush(){
        if(!this.question){
          alert('请输入问题')
        }else{
          this.$http.post('/api/service/create?content='+this.question).then(res=>{
            alert('反馈成功')
          })
        }
      }
    }
}
</script>

<style >
.feedColor{
  background: #ece5f4;
  min-height:16rem;
}
.feedBack{
  width: 100%;
  box-sizing: border-box;
  padding: 0 .4rem;
  margin: 0 auto;
  background: #fff;
  min-height: 16rem;
}
.feed-question{
  width: 100%;
}
.feed-question p{
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  font-size: 0.4rem;
  color: #333;
}
.question-detai{
  width: 100%;
  min-height: 5.333333rem;
  max-height: 8rem;
  _height:5.333333rem; 
    margin-left: auto; 
    margin-right: auto; 
    outline: 0; 
    border: 1px solid #a0b3d6; 
    font-size: 12px; 
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    _overflow-y: visible;
}
textarea{
  width: 100%;
  height: 5.333333rem;
  padding: 10px;
  box-sizing: border-box;
}
.feed-button{
  width: 100%;
  margin-top: .533333rem;
  background: linear-gradient(to right, #9869b4, #d93595);
  height: 1.333333rem;
  line-height: 1.333333rem;
  font-size: .4rem;
  color: #fff;
  text-align: center;
  border-radius: .266667rem;
}
</style>

