import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from '@/App'

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper
let store
let actions
let mutations
let state
let getters

beforeEach(() => {
  mutations = {}
  state = {
    count: 0
  },
  getters = {},
  // モックを定義
  actions = {
    increment: jest.fn(),
    decrement: jest.fn()
  };
  store = new Vuex.Store({
    modules: {
      counter: {
        state: {
          count: 0
        },
        mutations: actions      
      }
    },
    actions,
    mutations,
    state,
    getters
  });

  wrapper = shallowMount(App, {
    store,
    localVue,    
  })
});

//setMethodsが非推奨でエラー文
describe('Counter.vue', () => {

// 「+」ボタンのクリックテスト
it('commits "increment" when "+" button is clicked', function() {
  const increment = jest.fn()
  wrapper.setMethods({ increment })
  wrapper.find("button.increment").trigger("click");
  //console.log(wrapper.count)
  //wrapper.vm.count
  expect(increment).toBeCalled()
});

// 「-」ボタンのクリックテスト
it('commits "decrement" when "-" button is clicked', function() {
  const decrement = jest.fn()
  wrapper.setMethods({ decrement })
  wrapper.find("button.decrement").trigger("click");
  expect(decrement).toBeCalled()
});

})
