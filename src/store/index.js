import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import tabsView from "./modules/tabsView";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      app,
      tabsView
    },
    getters
})

export default store
