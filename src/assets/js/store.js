import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const Store = new Vuex.Store({
    state: {
        name: '',
        family: '',
        email: '',
        text: '',
        txt_name: '',
        txt_family: '',
        txt_email: '',
        result: true
    }
});