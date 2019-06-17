import React from "react";
import "../../Bootstrap.css";
import styled from "styled-components";

class Step3 extends React.Component {
    render() {
        return(
            <Container>
            <p>Choose color</p>
            <hr></hr>
            <br/>
            <input type="radio" id="single"/>
            <label htmlFor="single">Black</label>

            <input type="radio" id="single"/>
            <label htmlFor="single">Gray</label>

            <br/>
            <input type="radio" id="double" />
            <label htmlFor="double">White</label>
            <br/><br/>
            <p>Door Size</p>
            <hr></hr>


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
