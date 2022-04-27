import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { getUsersSelector } from '../../../redux/new-selector'
import { getUsers } from '../../../redux/userReducer'
import { UsersWrapper } from '../../../styles/styles'
import { UsersInfo } from './usersInfo'

export const UserInfoWrapper = styled.div`
font-size: 11px;
line-height: 13px;
div{
    padding-bottom: 7px;
}
.link{
    color: #4B51EF;
    font-size: 12px;
    line-height: 14px;
}
p{
    display: inline;
    color: #A3A3A3;
}
`
export const UsersContainer = () => {
    const { users, isLoading, error } = useAppSelector(getUsersSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return <UsersWrapper>
        <UsersInfo users={users} isLoading={isLoading} error = {error}/>
    </UsersWrapper>
}