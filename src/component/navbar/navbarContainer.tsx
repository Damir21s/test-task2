import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/hooks'
import { sortUsersByCity, sortUsersByCompany } from '../../redux/userReducer'
import { NavBar } from './navbar'

const NavBarWrapper = styled.div`
background-color: #BDBDBD;
padding: 35px 0px 0px 20px; 
min-height: 1028px;
div{
   margin-bottom: 10px;
}
`
export const NavBarContainer = () => {
    const dispatch = useAppDispatch()
    const onSortUsersByCity = () => {
        dispatch(sortUsersByCity())
    }
    const onSortUsersByCompany = () => {
        dispatch(sortUsersByCompany())
    }
    return <NavBarWrapper>
        <NavBar onSortUsersByCity={onSortUsersByCity}
            onSortUsersByCompany={onSortUsersByCompany} />
    </NavBarWrapper>
}