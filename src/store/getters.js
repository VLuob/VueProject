export default{
    column:(state) =>{
       /*  let err = state.column.err == 0 ? true : false */
        return state.column.data ? state.column.data.data : []
    },
    user:(state) =>{
         return state.user.data
     }
}