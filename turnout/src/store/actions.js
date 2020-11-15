import * as types from './mutationTypes'

export const signIn = ({commit},user_payload) =>{
    commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit})=>{
    commit(types.SIGN_OUT)
}

export const setEvents = ({commit},user_payload)=>{
    commit(types.SET_EVENTS,user_payload)
}