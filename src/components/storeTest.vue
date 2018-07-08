<template>
    <div class="vuex-text">
        <h3>this is page1</h3>
        <button @click="increment">添加</button>
        <button>减少</button>
        <p>{{count}}</p>
        <button @click="toPage">click me</button>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'vuextest',
    data(){
        return{
            msg:'vuex Test'
        }
    },
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // }
    computed:{
        ...mapGetters(["count"])
    },methods:{
        ...mapActions(['increment']),
        toPage(){
            this.$router.push({
                path:'/vuextest2'
            })
        }
    },
    mounted(){
        setTimeout(()=>{
            //console.log("this.$router",this.$router);
            // this.$router.push({
            //     path:'/vuextest2',name:'vuextest2'
            // })
        },5000)
    }
    
}
</script>
<style>
    
</style>