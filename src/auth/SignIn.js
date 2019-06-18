import React, {Component} from "react";
import styled from "styled-components";
import {Form, Field} from "react-final-form";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/form/Input";
import {sleep} from "../lib/utils";
import {composeValidators, required, email} from "../lib/validation";
import {Link} from "react-router-dom";
import MyField from "../components/form/MyField";
import RenderNavbar from "../components/menu/Navbar";
import ModalScreen from "../components/ModalScreen";



import {
    Button,
    } from 'reactstrap';
import renderCheckbox from "../components/form/Checkbox";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          email: '',
          password: '',
          response: '',
          keep: false,
          visible: false,
            modalIsOpen: false
          };

      }

    handleChangeEmail(event) {
        this.setState({email: event});
        console.log(event);

    }

    handleChangePassword(event) {
        console.log(event);
        this.setState({password: event.target.password});
    }


    //   email: "login@applover.pl",
    //   password: "password123"

    onSubmit = async data => {
        await sleep(2000);
        console.log(data);
        console.log(this.state.visible + " is visible?");

      };

    handleSubmit = async event => {
        alert('A username and password  was submitted: ' + this.state.email + this.state.password);
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
                    "email": this.state.email,
                    "password": this.state.password
                })
                }).then(response => response.json())
                .then(data => this.setState({ response: data }))
                .then(() => { if(this.state.response.status === "200 OK") {
                    alert("yay!");

                    window.sessionStorage.isAuthenticated = true;
                    if(this.state.keep === true) window.localStorage.isAuthenticated = true;
                    console.log(window.localStorage.isAuthenticated);
                    console.log(this.state.keep);
                    this.props.history.push("/dashboard");

                } else {
                    alert(this.state.response.status);
                }
                });


        } catch (e) {
          alert(e.message);
        }
    }


    render() {
        return(
        <div>
        <RenderNavbar />
        <button onClick={this.openModal}>Open Modal</button>
        <ModalScreen  isOpen={this.state.isOpen}
        ></ModalScreen>
        <AuthTemplate>
                <Title>Log in</Title>
                    <Form onSubmit={this.onSubmit}
                        render={({ handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <MyField
                                    name="email"
                                    component={renderInput}
                                    type="text"
                                    placeholder="Email address"
                                    validate={composeValidators(required, email)}
                                    value={this.state.email}
                                    //I had trouble using setState with onChange event on final-form field
                                    onChange={(val) => this.state.email = val}
                                />

                                <MyField
                                    name="password"
                                    component={renderInput}
                                    type="password"
                                    placeholder="Password"
                                    validate={required}
                                    value={this.state.password}
                                    onChange={(val) => this.state.password = val}
                                />
                                <MyField
                                    type="checkbox"
                                    name="tos"
                                    component={renderCheckbox}
                                    value={this.state.keep}
                                    onChange={() => this.state.keep = true}
                                    label="Keep me logged in"
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
        </div>
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