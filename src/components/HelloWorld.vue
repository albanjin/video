<template>
  <div class="main-box">
    <h2>音乐测试</h2>
    <button @click="toPage"> click me</button>
    <div class="section" v-for='(v,k) in videoArr'>
      <videoplayer1 :poster="v.poster" :src="v.src"></videoplayer1>
    </div>
  </div>
</template>

<script>
import videoplayer1 from './videoplayer.vue'
  export default {
    components:{
      videoplayer1
    },
    data() {
      return {
        videoArr: [
          {
            src: "http://video.ivwen.com/users/5291192/1530770605799.mp4",
            poster: "http://video.ivwen.com/users/5291192/1530770605799.mp4?vframe/jpg/offset/0"
        },{
            src: "http://video.ivwen.com/users/13988035/1501987394007.mp4",
            poster: "http://video.ivwen.com/users/13988035/1501987394007.mp4?vframe/jpg/offset/0"
        },{
            src: "http://video.ivwen.com/users/2027075/1505315869187.mp4",
            poster: "http://video.ivwen.com/users/2027075/1505315869187.mp4?vframe/jpg/offset/0"
        },{
            src: "http://video.ivwen.com/users/5291192/1530770605799.mp4",
            poster: "http://video.ivwen.com/users/5291192/1530770605799.mp4?vframe/jpg/offset/0"
        },
        ]
      }
    },methods:{
      toPage(){
        this.$router.push("/vuextest")
      }
    }
  }
</script>

<style lang="scss">
  .main-box {
    position: relative;
    width: 100%;
    .section{
      position: relative;
      margin: 40px 0;
      width:100%;
    }
  }
</style>
