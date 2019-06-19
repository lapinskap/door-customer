import React from "react";
import {
  Media,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Container,
  Dropdown
} from "reactstrap";
import styled from "styled-components";
import FaCog from "react-icons/lib/fa/cog";
import MdPageview from "react-icons/lib/md/pageview";
import FaPowerOff from "react-icons/lib/fa/power-off";

export default class RenderNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  logOut() {
    window.localStorage.isAuthenticated = false;
    window.sessionStorage.isAuthenticated = false;
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
      <Navbar expand="md" style={{ padding: "0" }}>
        <Logo>
          <Media object src="image/logo.png" />
        </Logo>
        <Container>
          <Row>
            <Nav navbar style={{ marginLeft: "110px" }}>
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
            </Nav>
          </Row>
        </Container>

        <UncontrolledDropdownX
          inNavbar={true}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggleX nav>
            Select Language
          </DropdownToggleX>

          <DropdownMenuZ>
            <DropdownItemY>
              Polish
            </DropdownItemY>
            <DropdownItemY>
              English
            </DropdownItemY>
          </DropdownMenuZ>
        </UncontrolledDropdownX>
      </Navbar>
    );
  }
}

const Logo = styled.div`
  padding: 20px 25px;
`;

const BottomText = styled(NavLink)`
  color: #7387a9;
  font-weight: 600;
  font-size: 14px;
`;

const NavItems = styled(NavItem)`
  padding: 12px 40px;
  border-left: 2px solid #ebf2fa;
  border-top: 2px solid #ebf2fa;
  border-bottom: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;
  }
`;

const NavItemsEnd = styled(NavItem)`
  padding: 12px 40px;
  border: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;
  }
`;

const UncontrolledDropdownX = styled(Dropdown)`
  width: 400px;
  font-weight: 500;
  padding: 0px 20px;
  border-left: 1px solid #eee;
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

