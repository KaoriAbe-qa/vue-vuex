import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from '@/App'

const localVue = createLocalVue();
localVue.use(Vuex);

let store
let countStoreMock
let wrapper

//setMethodsが非推奨でエラー文
describe('Counter.vue', () => {
  beforeEach(() => {
    //Vuexストアのモックを作成する
    countStoreMock = {
      namespaced: true,
      actions : {
        increment: jest.fn(),
        decrement: jest.fn()
      },
    }
    store = new Vuex.Store({
      modules: {
        count:countStoreMock
      }
    })
    // shallowMountだと子コンポーネントをスタブによって描画しなくなる(高速化)
    wrapper = shallowMount(App, { store, localVue })
  })

  // 「+」ボタンのクリックテスト
  it('commits "increment" when "+" button is clicked', function() {
    const increment = jest.fn()
    wrapper.setMethods({ increment })
    expect(increment).not.toBeCalled()
    wrapper.find("button.increment").trigger("click");
    //console.log(wrapper.count)
    //wrapper.vm.count
    expect(increment).toBeCalled()
  });

  // 「-」ボタンのクリックテスト
  it('commits "decrement" when "-" button is clicked', function() {
    const decrement = jest.fn()
    wrapper.setMethods({ decrement })
    expect(decrement).not.toBeCalled()
    wrapper.find("button.decrement").trigger("click");
    //console.log(wrapper.count)
    //wrapper.vm.count
    expect(decrement).toBeCalled()
  });

})
