import {combineReducers, configureStore} from "@reduxjs/toolkit"
import profileReducer from './profileReducer'
import userReducer from "./userReducer"

const rootReduser = combineReducers({
    userReducer,
    profileReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

