import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

import {
    Media,
    Col,
    } from 'reactstrap';


const AuthTemplate = ({ children }) => {
    return (
      <HeaderDiv>
        <ViewDiv>
         { /*
            <Col sm={13}>
                   <Media>
                        <Media left>
                            <Media object src="image/logo.png"/>
                        </Media>
                        <Media body>
                            <HeaderText>Cool Door Creator</HeaderText>
                        </Media>
                    </Media>
        */}
            {children}
        </ViewDiv>
      </HeaderDiv>
    );
  };

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const ViewDiv = styled.div`
    width: 400px;
    margin: 85px auto 0px auto;
    padding: 25px 30px;
    background-color: white;
`;

const HeaderText = styled.div`
    color: #7387a9;
    font-weight: 600;
    padding: 8px 0px 0px 15px;
    font-size: 15px;
  `;

  export default AuthTemplate;