import React, { useEffect, useState } from 'react'
import { getUserProfile } from '../../../redux/new-selector'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../../redux/profileReducer'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { UsersWrapper } from '../../../styles/styles'
import { UsersProfile } from './userProfile'

export const UsersProfileContainer = () => {
    const { profile, isLoading, error } = useAppSelector(getUserProfile)
    const dispatch = useAppDispatch()
    const params = useParams()
    const userId = Number(params.id)
    const [readOnly, setReadOnly] = useState(true)
    useEffect(() => {
        dispatch(getProfile(userId))
    }, [])
    return <UsersWrapper>
        <UsersProfile isLoading={isLoading} error={error} profile = {profile}
            readOnly={readOnly} setReadOnly={setReadOnly} />
    </UsersWrapper>
}