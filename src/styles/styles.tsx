import React from 'react';
import styled from 'styled-components'
interface UserWrapperType{
    bg?: string
    border?: string
    mgb?: string
    padding?: string
}

export const UserWrapper = styled.div<UserWrapperType>`
width: 438px;
background-color: ${({ bg = '#FFFFFF' }) => bg};
border: ${({ border = 'none' }) => border};
border-radius: 8px;
margin-bottom:${({ mgb = '22px' }) => mgb};
padding: ${({ padding = '0px' }) => padding};
textarea{
    display: block;
    outline: none;
    border: 1px solid #D8D8D8;
    border-radius: 8px;
    width: 420px;
    height: 55px;
    padding: 5px 0px 5px 10px;
    margin: 3px 0px 10px 0px;
    resize: none;
}
`
export const UsersWrapper = styled.div`
min-height: 1009px;
width: 438px;
margin: 19px 0px 0px 34px;
h1{
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 15px;
}
`
export const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`
export const StyledButton = styled.button<{ bg?: string }>`
background-color: ${({bg}) => bg};
color: #FFFFFF;
border: none;
padding: 5px 15px;
border-radius: 5px;
font-weight: 400;
font-size: 12px;
line-height: 14px;
cursor: pointer;
&:focus{
    outline: none;
}
`
export const FlexEnd = styled.div<{ mgt?: string }>`
    margin-top: ${({mgt = '0px'}) => mgt };
    display: flex;
    justify-content: flex-end;
`
export const StyledInput = styled.input<{ color?: string, colorText?: string }>`
    display: block;
    outline: none;
    border: ${({color = '1px solid #D8D8D8'}) => color};
    border-radius: 8px;
    width: 211px;
    padding: 5px 0px 5px 10px;
    margin: 3px 0px 10px 0px;
    color: ${({colorText = '#000000'}) => colorText};
`