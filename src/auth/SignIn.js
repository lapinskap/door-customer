import React, {Component} from "react";
import styled from "styled-components";
import {Form, Field} from "react-final-form";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/form/Input";
import {sleep} from "../lib/utils";
import {composeValidators, required, email} from "../lib/validation";
import {Link} from "react-router-dom";

import {
    Button,
    } from 'reactstrap';
import renderCheckbox from "../components/form/Checkbox";

class SignIn extends Component{
    onSubmit = async data => {
        await sleep(2000);
        console.log(data);

      };

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = async event => {
        event.preventDefault();

        try {
         fetch('https://bench-api.applover.pl/api/v1/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Host': 'example.org',
                    'Cookie': ''
                },
                body: JSON.stringify({
                    "email": "login@applover.pl",
                    "password": "password123"
                })
                }).then((response) => response.json()).then((responseJson) => {
                    return console.log(responseJson);
                  });
          alert("Logged in");
        } catch (e) {
          alert(e.message);
        }
    }
      userAction = async () => {
        const response = await fetch('https://bench-api.applover.pl/api/v1/login', {
          method: 'POST',
          body: {
            "email": "login@applover.pl",
            "password": "password123"
          },
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Host': 'example.org',
            'Cookie': ''
          }
        });

        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson

        if (response.status >= 200 && response.status < 400) {
            console.log(myJson);
          } else {
            console.log('error')
          }
      }

    render() {
        return(
            <AuthTemplate>
                <Title>Log in</Title>
                    <Form onSubmit={this.onSubmit}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    autoFocus
                                    component={renderInput}
                                    type="text"
                                    placeholder="Email address"
                                    validate={composeValidators(required, email)}
                                    onChange={this.handleChange}
                                />
                                <Field
                                    name="password"
                                    component={renderInput}
                                    type="password"
                                    placeholder="Password"
                                    validate={required}
                                    onChange={this.handleChange}
                                />
                                <Field
                                    type="checkbox"
                                    name="keep"
                                    component={renderCheckbox}
                                    label="Keep me logged in"
                                    onChange={this.handleChange}
                                />
                                <Footer>
                                    <Button color="primary" className="primary" onClick={this.handleSubmit}>Login</Button>
                                </Footer>
                                <Info>
                                    <TextLink to={"/resetpassword"}>Forgot password?</TextLink>
                                    <TextLink to={"/signup"}>Sign up</TextLink>
                                </Info>
                            </form>
                         )}
                    />
            </AuthTemplate>
        );
    }
}

const Title = styled.div`
    color: #727272;
    margin: 30px 0px;
    font-size: 24px;
    font-weight: 300;
    display: flex;
    justify-content: center;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const TextLink = styled(Link)`
    font-weight: 700;
    color:  #4ec2e2;
    font-size: 14px;
    &:hover {
        color:  #4ec2e2;
        text-decoration: none;
    }
`;

export default SignIn;