import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

const AuthTemplate = ({ children }) => {
    return (
      <HeaderDiv>
        <ViewDiv>
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


  export default AuthTemplate;