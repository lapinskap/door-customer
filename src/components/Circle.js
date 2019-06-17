import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

import {
    Nav,
    NavLink
    } from 'reactstrap';


const Circles = () => {
    return (
      <HeaderDiv>
      <Nav>
      <NavLink href="#step1" className="no-margin">
        <Circle>
            <Dot></Dot>
        </Circle>
      </NavLink>
        <Line></Line>
        <NavLink href="#step2" className="no-margin">
        <Circle>
            <Dot></Dot>
        </Circle>
      </NavLink>
        <Line></Line>
       <NavLink href="#step3" className="no-margin">
        <Circle>
            <Dot></Dot>
        </Circle>
      </NavLink>
      </Nav>
      </HeaderDiv>
    );
  };

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const Circle = styled.div`
    width: 46px;
    height: 46px;
    padding: 20px 20px;
    background-color: #CDDBE5;
    border-radius: 50%;
    float: left;

    &:hover {
        background-color: #95A3AD;
    }
`;

const Dot = styled.div`
    width: 6px;
    height: 6px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    background-color: #6E95B5;

`;

const Line = styled.div`
    width: 130px;
    height: 2px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    background-color: #EBF7FF;
`;



export default Circles;