import * as actionTypes from '../constants/userinfo'

const initState = {}

export default function userinfo (state = initState, action){
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
    
        default:
            return state
    }
}