<template>
  <div>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
     
  </div>
</template>
<script>
    
    export default {
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        },
        components:{
            
        }
    }
  
</script>
<style>
    .router-fade-enter-active, .router-fade-leave-active {
            transition: opacity .05s;
        }
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>


