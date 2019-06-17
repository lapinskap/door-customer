import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

class Step3 extends React.Component {
    state = {
        selectedDoor: "gray"
    }
    handleBlackColor = () => {
        this.setState({selectedColor: "black"});
        this.handleColor();
    }
    handleGrayColor = () => {
        this.setState({selectedColor: "gray"});
        this.handleColor();
    }
    handleWhiteColor = () => {
        this.setState({selectedColor: "white"});
        this.handleColor();
    }
    handleColor = () => {
        const color = this.state.selectedColor;
        this.props.onSelectColor(color);
    }

    render() {
        return(
            <Container>
            <p>Choose color</p>
            <hr></hr>
            <br/>
            <input onChange={this.handleBlackColor} type="radio" id="black" name="color" />
            <label htmlFor="black">Black</label>

            <input onChange={this.handleGraykColor} type="radio" id="gray" name="color" />
            <label htmlFor="gray">Gray</label>

            <br/>
            <input onChange={this.handleWhitekColor} type="radio" id="white" name="color" />
            <label htmlFor="white">White</label>

            </Container>
        )
    }
}

export default Step3;

const Container = styled.div`
  padding-right: 40px;

  label {
    padding-left: 5px;
  }

`;
