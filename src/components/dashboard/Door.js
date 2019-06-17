import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

const Door = () => {
  return (
      <Wrapper>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Wrapper>
  );
};


export default Door;

const Wrapper = styled.div`
  float: left;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  height: 321px;
  width: 141px;
  border: 7px solid #5A5858;
  background-color:#5A5858;
`;

const Box = styled.div`
background-color: white;
color: #fff;
width: 35px;
height: 55px;
margin: 3.5px;
`;
