import { RootState } from '.'

export const getUsersSelector = (state: RootState) =>{
    return state.userReducer
}
export const getUserProfile = (state: RootState) =>{
    return state.profileReducer
}
