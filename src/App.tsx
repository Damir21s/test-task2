import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import { NavBarContainer } from './component/navbar/navbarContainer';
import { UsersContainer } from './component/users/usersInfo/usersInfoContainer';
import { UsersProfileContainer } from './component/users/userProfile/userProfileContainer';

const AppWrapper = styled.div`
width: 665px;
font-size: 12px;
line-height: 14px;
`
export const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Row>
          <Col span={18} push={6}>
            <Routes>
              <Route path="/" element={<UsersContainer />} />
              <Route path="/:id" element={<UsersProfileContainer/>} />
            </Routes>
          </Col>
          <Col span={6} pull={18}>
            <NavBarContainer />
          </Col>
        </Row>
      </AppWrapper>
    </BrowserRouter>

  );
}

