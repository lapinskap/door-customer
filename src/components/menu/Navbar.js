import React from "react";
import {
  Media,
  Navbar,
  Nav,
  DropdownToggle,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Container,
  Dropdown
} from "reactstrap";
import styled from "styled-components";
import FaPowerOff from "react-icons/lib/fa/power-off";

export default class RenderNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.state = {
      name: 'test',
      data: ''
    }
  }
  

  logOut() {
    window.localStorage.isAuthenticated = false;
    window.sessionStorage.isAuthenticated = false;
  }

  handleOnLoad = async event => {
    event.preventDefault();
      try {
        fetch('https://bench-api.applover.pl/api/v1/organization', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjEsImV4cCI6MTU2MTYzOTY3MywiY3JlYXRlZF9hdCI6IjIwMTktMDYtMTMgMTI6NDc6NTMgVVRDIn0.Vgxl0OEb-1tFNmDUzyGjIydIOeUg4cCkYuVqa_tDfD0',
              'Host': 'example.org',
              'Cookie': '',
            }
            }).then(response => response.json())
                .then(response => console.log(response))
                  .then(response => this.setState({ data: response }));
    } catch (e) {
      alert(e.message);
    }
}

  render() {
    return (
      <Navbar
      onLoad={this.handleOnLoad} 
      expand="md" style={{ padding: "0" }}>
        <Logo>
          <Media object src="image/logo.png" />
        </Logo>
        <Container>
          <Row>
          </Row>
        </Container>

        <SelectLanguage>
            Select Language
        </SelectLanguage>
         <Language>
        <select className="form-control select__lang">
          <option lan="en">English</option>
          <option lan="pl">Polish</option>
        </select>
        </Language>
        <Nav navbar style={{ marginRight: "20px", padding: "0px" }}>
            { window.sessionStorage.isAuthenticated === "true" ? <UncontrolledButtonDropdown>
            <DropdownToggle caret size="lg">
              My organization
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>
              <i>organization</i>
              <i>{this.state.data}</i>
              </DropdownItem>
              <DropdownItem onClick={this.logOut} href={"/signin"}>
              <FaPowerOff style={{ margin: "5px", marginBottom: "7px" }} />
              Log out
              </DropdownItem>
            </DropdownMenu>
              </UncontrolledButtonDropdown> : null}
            </Nav>
      </Navbar>
    );
  }
}

const Language = styled.div`
  padding: 20px 25px;
`;

const Logo = styled.div`
  padding: 20px 25px;
`;
const SelectLanguage = styled(Dropdown)`
  width: 400px;
  font-weight: 500;
  padding: 0px 0px;
  margin: 0px;
`;

