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
  Row,
  Container,
  Dropdown
} from "reactstrap";
import styled from "styled-components";
import FaCog from "react-icons/lib/fa/cog";
import FaPowerOff from "react-icons/lib/fa/power-off";

export default class RenderNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));

    this.setState(prevState => ({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }

  render() {
    const request =  new XMLHttpRequest();
    request.open('GET', 'https://bench-api.applover.pl/api/v1/organization', true)
    request.onload = function () {
      const data = JSON.parse(this.response);

      if (request.status >= 200 && request.status < 400) {
        console.log(data);
      } else {
        console.log('error')
      }

      }

    request.send()

    return (
      <Navbar expand="md" style={{ padding: "0" }}>
        <Logo>
          <Media object src="image/logo.png" />
        </Logo>

        <UncontrolledButtonDropdown>
        <DropdownToggle caret size="lg">
          Select Language
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Polish</DropdownItem>
          <DropdownItem>English</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>

      <UncontrolledButtonDropdown>
        <DropdownToggle caret size="lg">
          My organization
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>some api here</DropdownItem>
          <DropdownItem href={"/signin"}>
          <FaPowerOff style={{ margin: "5px", marginBottom: "7px" }} />
          Log out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>

        <ControlledDropdown
        Navbar={true}
        isOpen={this.state.dropdownOpen2}
        toggle={this.toggle}
      >
        <DropdownToggleX nav>
          Select Language
        </DropdownToggleX>

        <DropdownMenu>
          <DropdownItem href={"/dashboard?lng=pl"}>
          <p>Polish</p>
          </DropdownItem>
          <DropdownItem href={"/dashboard/dashboard?lng=en"}>
           English
          </DropdownItem>
        </DropdownMenu>
      </ControlledDropdown>

        <UncontrolledDropdownX
          inNavbar={true}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggleX nav>
          <button className="btn btn-secondary">My organization</button>
          </DropdownToggleX>

          <DropdownMenuZ>
            <DropdownItemY href={"/"}>
            <p>sample data from api</p>
            </DropdownItemY>
            <DropdownItemY href={"/signin"}>
              <FaPowerOff style={{ margin: "5px", marginBottom: "7px" }} /> Log
              out
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
