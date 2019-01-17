import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    network: true, //默认true表示有网，反之没网了
  },
  mutations: {
    //改变state里状态的方法。
    loginSuccess(store, param){ //在 http.js 里通过引入 store, 直接通过store.commit('loginSuccess',值)，修改了，不用在写action了。
      store.token = param;
    },
    changeNetwork(store, param){ //有 action方法，是给app.vue用来修改用来修改network状态的。 但是在http.js里还是用store.commit('changeNetwork',值)，方式修改。
      store.network = param;
    }
  },
  actions: {
    aChangeNetwork({commit}, param){
      commit('changeNetwork', param);
    }
  }
})
