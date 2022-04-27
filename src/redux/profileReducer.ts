import { WritableDraft } from 'immer/dist/internal';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '.'
import { usersApi } from '../api/api'
import { ProfileType } from '../types/types'

let initialState = {
    profile: null as ProfileType | null,
    error: '',
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        profileFetching(state) {
            state.isLoading = true;
        },
        profileFetchingSuccess(state, action: PayloadAction<WritableDraft<ProfileType>>) {
            state.isLoading = false;
            state.error = ''
            state.profile = action.payload
        },
        profileFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export let getProfile = (userId: number) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.profileFetching())
            const data = await usersApi.getUserProfile(userId)
            dispatch(userSlice.actions.profileFetchingSuccess(data))
        } catch (e) {
            dispatch(userSlice.actions.profileFetchingError('Error'))
        }
    }

export default userSlice.reducer