import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'

//index.jsの場合はファイル名を指定する必要はない
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

//store.commit('increment')