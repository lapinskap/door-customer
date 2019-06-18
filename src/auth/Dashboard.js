import React, { Component } from "react";
import  styled from "styled-components";
import RenderNavbar from "../components/menu/Navbar";
import Circles from "../components/dashboard/Circle";
import Door from "../components/dashboard/Door";
import Step1 from "../components/dashboard/Step1";
import Step2 from "../components/dashboard/Step2";
import Step3 from "../components/dashboard/Step3";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.handleDoor = this.handleDoor.bind(this);
    this.state = {
      stepNumber: 1,
      doorType: 1,
      selectedColor: "gray"
    };
  }

  handleNextStep() {
      this.setState((prevState)=> {
          return {
              stepNumber: prevState.stepNumber + 1
          };
      });
      }

    handlePreviousStep() {
    this.setState((prevState)=> {
        return {
            stepNumber: prevState.stepNumber - 1
        };

    });
    }
    handleDoor = (doorValue) => {
      this.setState({doorType: doorValue});
    }
    handleColor = (colorValue) => {
      this.setState({selectedColor: colorValue});
    }

   renderStep() {
    let stepNumber = this.state.stepNumber;
    if (stepNumber === 1) {
      return <Step1 onSelectDoor={this.handleDoor} />;
    } else if(stepNumber === 2) {
      return <Step2 />;
    } else {
    return <Step3 onSelectColor={this.handleColor}/>;
    }
  };

  renderDoor() {
    if (this.state.doorType === 1) {
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
      {this.renderStep()}
      </Desc>
        </Steps>

        <BottomDiv>
        <button
        className="btn btn-default"
        onClick={this.handlePreviousStep}
        disabled={this.state.stepNumber === 1}
        >Back</button>
        <button
        className="btn btn-secondary"
        onClick={this.handleNextStep}
        disabled={this.state.stepNumber === 3}
        >Next step</button>
        </BottomDiv>
        <Footer></Footer>
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

const Footer = styled.div`
  clear: both;
  width: 100%;
  height: 20%;
  min-height: 50px;
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
  min-height: 400px;
  float: left;
  margin: 0px auto 0px auto;
  padding: 10px 80px 35px 30px;
  display: flex;

  }
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
