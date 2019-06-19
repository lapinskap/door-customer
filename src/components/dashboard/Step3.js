import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

class Step3 extends React.Component {
    state = {
        selectedColor: "gray"
    }
    handleBlackColor = () => {
        this.setState({selectedColor: "black"});
        this.props.onSelectColor(this.state.selectedColor);
    }
    handleGrayColor = () => {
        this.setState({selectedColor: "gray"});
        this.props.onSelectColor(this.state.selectedColor);
    }
    handleWhiteColor = () => {
        this.setState({selectedColor: "white"});
        this.props.onSelectColor(this.state.selectedColor);
    }
   
    render() {
        return(
            <Container>
            <p>Choose color</p>
            <hr></hr>
            <br/>
            <div className="radius black"></div>
            <div className="radius gray"></div>
            <div className="radius white"></div>
            <div className="color">
                <input onChange={this.handleBlackColor} type="radio" id="black" name="color" />
                <label htmlFor="black">Black</label>
            </div>
            <div className="color x">
                <input onChange={this.handleGraykColor} type="radio" id="gray" name="color" />
                <label htmlFor="gray">Gray</label>
            </div>
            <div className="color">
                <input onChange={this.handleWhitekColor} type="radio" id="white" name="color" />
                <label htmlFor="white">White</label>
            </div>
            

            </Container>
        )
    }
}

export default Step3;

const Container = styled.div`
  padding-right: 40px;

  label {
    padding-left: 5px;
    clear: both;
  }
  .radius {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      float: left;
      margin: 5px;
  }
  .black {
      background-color: #000000;
  }
  .gray {
      background-color: #797474;
      margin-left: 40px;
      margin-right: 40px;
  }
  .white {
    background-color: #F4F2F2;
  }
  .color {
      margin: 5px;
      float: left;
  }
  .x {
    margin-left: 14px;
    margin-right: 14px;
  }
  

`;
