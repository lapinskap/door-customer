import React, { Component } from "react";
import  styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { sleep } from "../lib/utils";
import RenderNavbar from "../components/menu/Navbar";
import Circles from "../components/dashboard/Circle";
import Door from "../components/dashboard/Door";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doorType: 1,
      stepNumber: 1
    };
    // this.handleClick = this.handleClick.bind(this);
  }


  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

   renderStep(props) {
    const stepNumber = props.stepNumber;
    if (stepNumber == 1) {
      return <Circles />;
    }
    return <Door />;
  };

  renderDoor(doorType) {
    if (doorType = 1) {
      return <Door />;
    } else {
      return <div><Door /><Door /></div>;
    }
  }


  render() {
    return (
      <div>
        <RenderNavbar />
        <Steps>
          <Circles></Circles>
          <View>
            <Text>
            <p>STEP 1 <br/>
            CHOOSE DOOR</p>
          </Text>
          <Text>
           <p>STEP 2<br/>
           CHOOSE DOOR DIVISION</p>
          </Text>
          <Text>
            <p>STEP 3<br/>
            CHOOSE DOOR COLOR</p>
          </Text>
          </View>
        </Steps>
        <Steps>
        <ViewDiv>
          {this.renderDoor()}
        </ViewDiv>
      <Desc>
      <MainTemplate>
        hello its me
      </MainTemplate>
      </Desc>
        </Steps>

        <BottomDiv>
        <button>Next step</button>
        <button>Back</button>
        </BottomDiv>
      </div>
    );
  }
}

const Text = styled.div`
  float: left;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
    font-style: normal;
    font-size: 10px;
  }
`;

const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ViewDiv = styled.div`
  width: 60%;
  float: left;
  margin: 0px auto 0px auto;
  padding: 80px 80px 35px 30px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.div`
  width: 40%;
  float: left;
  margin: 0px auto 0px auto;
  padding: 80px 80px 35px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
