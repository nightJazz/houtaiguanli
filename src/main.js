import Vue from 'vue'
import App from './component/App.vue'
import Router from './router/index'
new Vue({
    el:'#app',
    router:Router,
    render: creaeElement => creaeElement(App)
})