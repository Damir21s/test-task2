import React from 'react'
import { StyledButton } from '../../styles/styles'

interface NavBarType {
    onSortUsersByCity: () => void
    onSortUsersByCompany: () => void
}

export const NavBar: React.FC<NavBarType>= (props) => {
    return <>
        <div>Сортировка</div>
        <div>
            <StyledButton bg={'#4B51EF'}
                onClick={() => props.onSortUsersByCity()}>по городу</StyledButton>
        </div>
        <div><StyledButton bg={'#4B51EF'}
            onClick={() => props.onSortUsersByCompany()}>по компаниям</StyledButton>
        </div>
    </>
}