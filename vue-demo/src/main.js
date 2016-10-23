// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vue_Resource from 'vue-resource'

Vue.use(Vue_Resource)

console.log(Vue_Resource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
