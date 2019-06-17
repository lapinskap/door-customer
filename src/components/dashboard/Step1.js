import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

export class Step1 extends React.Component {
    state = {
        selectedDoor: 1
    }
    handleDoor = () => {
        //pass data back to parent component
        const door = this.state.selectedDoor;
        this.props.onSelectDoor(door);
    }

    handleSingleDoor = () => {
        this.setState({selectedDoor: 2});
        this.handleDoor();
    }
    handleDoubleDoor = () => {
        this.setState({selectedDoor: 1});
        this.handleDoor();
    }
    render() {
        return(
            <Container>
            <p>Door Type</p>
            <hr></hr>
            <input onChange={this.handleSingleDoor} type="radio" id="single" name="door" defaultValue="1" />
            <label htmlFor="single">Single Door</label>

            <br/>
            <input onChange={this.handleDoubleDoor} type="radio" id="double" name="door" defaultValue="2"/>
            <label htmlFor="double">Double Door</label>
            <br/><br/>
            <p>Door Size</p>
            <hr></hr>
            <label htmlFor="width">Width</label>
            <input type="number" id="width" min="0" max="160" defaultValue="120"/> cm
            <br/>
            <label htmlFor="height">Height</label>
            <input type="number" id="height" min="0" max="300" defaultValue="240"/> cm
            </Container>
        )
    }
}

export default Step1;

const Container = styled.div`
  padding-right: 40px;
  font-weight: 300;
  height: 100%;

  label {
    padding-left: 5px;
  }

  #height, #width {
      width: 50px;
      font-weight: 300;
  }
  #width {
      margin-left: 20px;
  }
  #height {
    margin-left: 15px;
  }

`;