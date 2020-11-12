import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firebaseApp} from './firebaseApp.js'

Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    router.push('./Dashboard')
  }
  else{
    router.replace('./Signin')
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
