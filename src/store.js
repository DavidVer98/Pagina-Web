import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
            islogin : null
    },
    mutations:{
        savelogin(state){
            state.islogin = true
            window.localStorage.setItem('authenticate',true)
        },
        removelogin(state){
            state.islogin = false
            window.localStorage.removeItem('authenticate')
        }
    },
    actions:{
        login(contex){
            contex.commit('savelogin')
        },
        logout(contex){
            contex.commit('removelogin')
        },
        autologin(contex){
          const isLoggedIn =  window.localStorage.getItem('authenticate')
          if(isLoggedIn)
          {
              contex.commit('savelogin')
          }
        }
    },
    getters:{
        mensaje(state){
            return state.islogin
        }
    }
})