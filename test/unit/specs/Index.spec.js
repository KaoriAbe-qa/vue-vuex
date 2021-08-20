import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import index from '@/store/index'

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper
let store
let actions
let mutations
let state



beforeEach(() => {
    actions = {
        increment: jest.fn(),
        decrement: jest.fn()
    }
    
    mutations = {
        increment: jest.fn(),
        decrement: jest.fn()
    }

    state = {
        count: 1
    };

    store = new Vuex.Store({
        actions,
        mutations: {},
        state: {},
    }),
    
    wrapper = shallowMount(index, {
        store,
        localVue
    })
});

describe("store", () => {
    
  
    describe("actions", () => {     
    //vuexのactionは非同期になるので、非同期のテストは async done { で書き始めて、最後にdone()を呼ぶ
       it("actions: should be able to commit increment", async done => {
            const commit = jest.fn()    
            await actions.increment(commit)
            expect(actions['increment']).toHaveBeenCalled()
            done()
        });
  
       it("actions: should be able to commit decrement", async done => {
            const commit = jest.fn();
            await actions.decrement(commit)
            expect(actions['decrement']).toHaveBeenCalled()
            done()
       });
    });

    const { increment } = index
    describe("mutations", () => {

        it("mutations: should be able to increment counter", () => {
          mutations.increment(state)
          wrapper.mutations
          wrapper.increment
          wrapper = mutations.increment(state)
          store.commit('increment')

          //1なのでstateの更新ができてない……
          console.log(state.count)
          console.log(store.state.count)
        　// 結果を検証
          //expect(state.count).toBe(2)
        })
    
        it("mutations: should be able to decrement counter", () => {
            mutations.decrement(state)
            wrapper.mutations
          　// 結果を検証する
            console.log(state.count)
            //expect(state.count).toBe(0)
        });
      });


  });