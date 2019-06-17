import React, { Component } from "react";
import  styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { sleep } from "../lib/utils";
import RenderNavbar from "../components/menu/Navbar";
import Circles from "../components/Circle";

import { Button, Media, InputGroup, InputGroupAddon, Input, Col } from "reactstrap";

class Dashboard extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <div>
        <RenderNavbar />
        <Steps>
          <Circles></Circles>
          <p>STEP 1 <br/> CHOOSE DOOR</p>
          <p>STEP 2 <br/> CHOOSE DOOR DIVISION</p>
          <p>Step 3 <br /> CHOOSE DOOR COLOR</p>
        </Steps>
        <Steps>
        <Col sm={3}>
        <ViewDiv>
        <MainTemplate></MainTemplate>
      </ViewDiv>
      </Col>
      <Col sm={3}>
      <ViewDiv>
      <MainTemplate></MainTemplate>
    </ViewDiv>
    </Col>
        </Steps>

        <BottomDiv>
        </BottomDiv>
      </div>
    );
  }
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewDiv = styled.div`
  width: 900px;
  margin: 0px auto 0px auto;
  padding: 30px 80px 35px 30px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
`;

const Steps = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 0px;
  font-size: 15px;
  width: 900px;
  margin: 40px auto 10px auto;
`;

const BottomDiv = styled.div`
  width: 1030px;
  margin: 15px auto 0px auto;
  padding: 30px 80px 35px 30px;
`;

export default Dashboard;
