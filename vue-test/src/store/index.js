
import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
// console.log(Vuex)

Vue.use(Vuex)
const actions = {
  decrement({commit}) {
    // console.log(11)
    commit('DECREMENT')
  }
}

const store = new Vuex.Store({
  state: {
    // 放置初始状态 app启动的时候的全局的初始值
    bankInf: {"name":"我是银行储存的第一个数据","id":100,"bankName":"中国银行"},
    count1:0
  },
  mutations: {
    newBankName(state,msg) {
      console.log(msg)
        state.bankInf.id = msg;
        state.count1++
    },
    DECREMENT(state) {
      console.log(state.bankInf.id)
      if(state.count1<=0) {return false}
      state.count1--
    }
  },
  actions

})



export default store