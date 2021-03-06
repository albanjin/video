// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// import Vuex from 'vuex'
// Vue.use(Vuex)

Vue.config.productionTip = false
import 'video.js/dist/video-js.css'
window.videoPlayers = []

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
