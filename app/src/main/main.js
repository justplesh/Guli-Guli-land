import Vue from 'vue'
import Main from './main.vue'
import Router from '../router'
import VueResource from 'vue-resource'
import ProgressBar from 'vue-progress'
import VTooltip from 'v-tooltip'
import VeeValidate from 'vee-validate';

Vue.use(VueResource);
Vue.use(ProgressBar);
Vue.use(VeeValidate);
Vue.use(VTooltip);

window.vue = new Vue({
    el: '#main',
    render: h => h(Main),
    router: Router,
    http: {
        root: 'localhost:5001'
    }
});
