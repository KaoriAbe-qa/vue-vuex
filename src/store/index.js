import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  //stateオプションで初期値を設定
  state: {
    count: 0
  },
  //原則として、mutation以外でstateの更新を行うことを禁止
  //全て同期的な処理にする必要 (非同期処理を行いたい時はactionsで定義)
  mutations: {
    // 'increment'mutationを定義
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
   getters:  {
    count: state => state.count,
  },
   actions: {
     increment({ commit }) {
         commit("increment", { root: true });
     },
     decrement({ commit }) {
         commit("decrement", { root: true });
     }
   },
   namespace: true,
})

//store.stateで参照
//console.log(store.state.count)

// store.commitでmutationを呼び出す
//store.commit('increment')

export default store