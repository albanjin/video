// 进行vuex 配置
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
    count :6
}
let getters = {
    count (state){
        return state.count
    }
}
let actions = {
    increment ({commit,state}){
        //console.log(context)
        //context.state.c
        // 显示数据的唯一变化
        console.log(' 数据准备发生变化')
        commit('increment',)// 提交一个名字为increment的变化，提交给mutations 表示突变

    },
    reduce({commit,state})
    {
        console.log("reduce")
        commit("reduce")
    }
}
let mutations = {
    increment(state){
        state.count ++
    },
    reduce(state){
        if(state.count <= 0) return null
        state.count --
    }
}


const store  = new Vuex.Store({
    // state:{count:6}
    state,getters,actions,mutations
})
export default store