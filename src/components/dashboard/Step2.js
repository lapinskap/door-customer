import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

class Step2 extends React.Component {
    render() {
        return(
            <Container>
            <p>Door division</p>
            <hr></hr>

            <label htmlFor="width" >Number of beams</label>
            <input type="number" id="width" className="division" min="1" max="4" defaultValue="2"/>
            <br/>
            <label htmlFor="height">Number of posts</label>
            <input type="number" id="height" className="division" min="1" max="4" defaultValue="4"/>
            </Container>
        )
    }
}

export default Step2;


const Container = styled.div`
  padding-right: 40px;
  font-weight: 300;
  height: 100%;

  label {
    padding-left: 5px;
  }

  input[type="number"] {
    -webkit-appearance: textfield;
       -moz-appearance: textfield;
            appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .division {
    width: 30px;
    margin-left: 10px;
  }
`;