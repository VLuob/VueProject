import * as types from './types'
import axios from 'axios'
export default {
    [types.UPDATE_HOME] : ({commit,state},payload) =>{
        axios({
            url:'/api/home',
            params:{
                _page:1,
                _limit:6
            }
        }).then(
            res => commit(types.UPDATE_HOME,res.data.data)
        )
    },
    [types.UPDATE_DETAIL] : ({commit,state},payload) =>{
        let {dataName , id} = payload
        axios({
            url:`/api/${dataName}/${id}`
        }).then(
            res => commit(types.UPDATE_DETAIL,res.data.data)
        )
    },
    [types.UPDATE_COLUMN] : ({commit,state},payload) =>{
        axios({
            url:'/api/column',
            params:{
                _page:1,
                _limit:8
            }
        }).then(
            res => commit(types.UPDATE_COLUMN,res)
        )
    },
    [types.UPDATE_BANNER] : ({commit,state},payload) =>{
        axios({
            url:'/api/banner',
            params:{
                _page:1,
                _limit:5
            }
        }).then(
            res => commit(types.UPDATE_BANNER,res.data.data)
        )
    },
    [types.UPDATE_FOLLOW] : ({commit,state},payload) =>{
        axios({
            url:'/api/follow',
            params:{
                _page:1,
                _limit:8
            }
        }).then(
            res => commit(types.UPDATE_FOLLOW,res.data.data)
        )
    },
    [types.UPDATE_USER] : ({commit,state},payload) =>{
        let { username, password } = payload
        return axios({
            url:'/api/login',
            method:'post',
            data:{
              username,
              password
            }
          }).then(res=>{
            commit('UPDATE_USER',res.data)
            window.localStorage.setItem('1909_app',JSON.stringify(res.data))
            return{err:res.data.err,msg:res.data.msg}
          })
    }
}