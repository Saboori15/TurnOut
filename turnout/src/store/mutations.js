import * as types from './mutationTypes'

export const mutations={
    [types.SIGN_IN](state,user_payload){
        state.user=user_payload
    },
    [types.SIGN_OUT](state){
        state.user={}
    }
}