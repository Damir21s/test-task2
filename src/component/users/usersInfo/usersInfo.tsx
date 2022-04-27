import React from 'react'
import { Link } from 'react-router-dom'
import { FlexEnd, StyledFlex, UserWrapper } from '../../../styles/styles'
import { ProfileType } from '../../../types/types'
import { UserInfoWrapper } from './usersInfoContainer'

interface UsersInfoType {
    users: Array<ProfileType>
    isLoading: boolean
    error: string
}

export const UsersInfo: React.FC<UsersInfoType> = (props) => {
    return <>
        <div><h1>Список пользователей</h1></div>
        {props.isLoading && <h1>Идет загрузка...</h1>}
        {props.error && <h1>{props.error}</h1>}
        {props.users.map((u: any) => <UserWrapper padding={'10px 0px 3px 10px'} bg={'#F3F3F3'} key={u.id}>
            <UserInfoWrapper>
                <div><p>ФИO: </p>{u.name}</div>
                <div><p>город: </p>{u.address.city}</div>
                <StyledFlex>
                    <section><p>компания: </p>{u.company.name}</section>
                    <section className='link'><Link to={"/" + u.id}>Подробнее</Link></section>
                </StyledFlex>
            </UserInfoWrapper>
        </UserWrapper>)}
        <FlexEnd mgt={"-12px"}>Найдено {props.users.length} пользователей</FlexEnd>
    </>
}