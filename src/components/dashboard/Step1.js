import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

class Step1 extends React.Component {
    render() {
        return(
            <Container>
            <p>Door Type</p>
            <hr></hr>
            <input type="radio" id="single" name="door"/>
            <label htmlFor="single">Single Door</label>

            <br/>
            <input type="radio" id="double" name="door" />
            <label htmlFor="double">Double Door</label>
            <br/><br/>
            <p>Door Size</p>
            <hr></hr>
            <label htmlFor="width">Width</label>
            <input type="number" id="width" min="0" max="160" value="120"/> cm
            <br/>
            <label htmlFor="height">Height</label>
            <input type="number" id="height" min="0" max="300" value="250"/> cm
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
      width: 44px;
      font-weight: 300;
  }
  #width {
      margin-left: 20px;
  }
  #height {
    margin-left: 15px;
  }

`;