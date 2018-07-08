<template>
    <div class="vuex-text">
        <h3>this is page2</h3>
        <button @click="increment">添加</button>
        <button @click="reduce">减少</button>
        <p>{{count}}</p>
        <button @click="toPage">click me</button>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'vuextest2',
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
        ...mapActions(['increment','reduce']),
        toPage(){
            this.$router.push('/vuextest')
        }
    }
    
}
</script>
<style>
    
</style>