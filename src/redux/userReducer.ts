import { AppDispatch } from './index';
import { createSlice } from "@reduxjs/toolkit"
import { ProfileType } from '../types/types';
import { usersApi } from '../api/api';

let initialState = {
    users: [] as Array<ProfileType>,
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = ''
            state.users = action.payload
        },
        usersFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        sortUsersByCity(state) {
            state.users.sort(function (a, b) {
                if (a.address.street > b.address.street) {
                    return 1;
                }
                if (a.address.street < b.address.street) {
                    return -1;
                }
                return 0;
            })
        },
        sortUsersByCompany(state) {
            state.users.sort(function (a, b) {
                if (a.company.name > b.company.name) {
                    return 1;
                }
                if (a.company.name < b.company.name) {
                    return -1;
                }
                return 0;
            })
        }
    }
})

export default userSlice.reducer
export const {sortUsersByCity, sortUsersByCompany} = userSlice.actions

export let getUsers = () =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.usersFetching())
            const data = await usersApi.getUsers()
            dispatch(userSlice.actions.usersFetchingSuccess(data))
        } catch (e) {
            dispatch(userSlice.actions.usersFetchingError('Error'))
        }
    }

