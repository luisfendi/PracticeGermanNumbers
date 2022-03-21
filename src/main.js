import Vue from 'vue'
import App from './App.vue'
import {buttonEffect} from './greensock'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {
    button(target){
      buttonEffect(target)
    }
  }
}).$mount('#app')
 


