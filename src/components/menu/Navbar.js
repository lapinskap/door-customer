import React from "react";
import {
  Media,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
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

        id: 1,
        name: "Weissnat-Ward",
        email: "kareybruen@vandervortkoepp.net",
        phone_number: "1-228-585-5990",
        address_line_1: "3697 Huey Summit",
        address_line_2: "Apt. 399",
        city: "North Charlineberg",
        postal_code: "96032-0855"

    };
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
              'Cookie': ''
            }
            }).then(response => response.json())
            .then(data => this.setState({ response: data })).then(data => console.log(data));
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <Navbar expand="md" style={{ padding: "0" }} onLoad={this.handleOnLoad}>
        <Logo>
          <Media object src="image/logo.png" />
        </Logo>

        <Select>
          <UncontrolledDropdown className="select">
          <DropdownToggle caret size="lg">
            Select Language
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Polish</DropdownItem>
            <DropdownItem>English</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </Select>

      { window.sessionStorage.isAuthenticated === "true" ? <UncontrolledButtonDropdown>
        <DropdownToggle caret size="lg">
          My organization
        </DropdownToggle>
        <DropdownMenu>
        <DropdownItem>
          <i>{this.state.name}</i>
          </DropdownItem>
          <DropdownItem onClick={this.logOut} href={"/signin"}>
          <FaPowerOff style={{ margin: "5px", marginBottom: "7px" }} />
          Log out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> : null}
      </Navbar>
    );
  }
}

const Logo = styled.div`
  padding: 20px 25px;
`;

const NavItemsEnd = styled(NavItem)`
  padding: 12px 40px;
  border: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;
  }
`;

const Select = styled.div`
  .select {
     background-color: #fff;
    width: 400px;
  font-weight: 500;
  padding: 0px 20px;
  border-left: 1px solid #eee;

  padding: 12px 40px;
  border: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;

    border-top: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 3px;
  }

  }

  width: 400px;
  font-weight: 500;
  padding: 0px 20px;
  border-left: 1px solid #eee;
  margin-left: 600px;
`;

const ControlledDropdown = styled(Dropdown)`
  width: 400px;
  font-weight: 500;
  padding: 0px 20px;
  border-left: 1px solid #eee;
  margin-left: 600px;
`;


const DropdownMenuZ = styled(DropdownMenu)`
  border-top: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 3px;
`;

const DropdownItemY = styled(DropdownItem)`
  border-top: 0;
  color: #94a2bf;
  &:hover svg {
    color: #4ec2e2;
  }
`;

const DropdownToggleX = styled(DropdownToggle)`
  color: #94a2bf;
`;
