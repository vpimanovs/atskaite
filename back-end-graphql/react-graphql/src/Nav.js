import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Route} from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable color="info">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Economist - Graphql Sandbox</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://localhost:5000/graphiql">GraphiQL GUI/IDE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:5000/graphql">Graphql API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/campaigns">Info about Economist compaigns</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:3000/offers">Info about Economist offers</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
