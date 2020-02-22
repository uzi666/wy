import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import MetaInfo from 'vue-meta-info'
import 'swiper/dist/css/swiper.css'
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant';

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
Vue.use(MetaInfo)
Vue.use(Vant);
Vue.prototype.axios = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
