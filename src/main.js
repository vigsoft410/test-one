import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import ElementUI from 'element-ui'
import TestOne from  './components/Test-one.vue'
import 'element-ui/lib/theme-chalk/index.css'
Vue.component('test-one', TestOne)
Vue.use(Element)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
