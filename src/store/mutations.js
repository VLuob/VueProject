import {CLEAR_USER, UPDATE_BANNER, UPDATE_COLUMN, UPDATE_DETAIL, UPDATE_USER, UPDATE_FOLLOW, UPDATE_HOME, VIEW_FOOT, VIEW_NAV, VIEW_LOADING }from './types'
export default {
    [UPDATE_BANNER]:(state,payload) => state.banner = payload,
    [UPDATE_COLUMN]:(state,payload) => state.column = payload,
    [UPDATE_DETAIL]:(state,payload) => state.detail = payload,
    [UPDATE_USER]:(state,payload) => state.user = payload,
    [UPDATE_FOLLOW]:(state,payload) => state.follow = payload,
    [UPDATE_HOME]:(state,payload) => state.home = payload,
    [VIEW_FOOT]:(state,payload) => state.bFoot = payload,
    [VIEW_NAV]:(state,payload) => state.bNav = payload,
    [VIEW_LOADING]:(state,payload) => state.bLoading = payload,
    [CLEAR_USER]:(state,payload)=>{
        window.localStorage.removeItem('1909_app',)
        state.user = {err:1}
    }
}