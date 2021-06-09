import Vue from 'vue'
import App from './App.vue'
import jquery from 'vue-jquery'
import { Store } from './assets/js/store'


Vue.use(jquery);
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
    el: '#app',
    store: Store,
    render: h => h(App)
})