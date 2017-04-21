import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'react-bootstrap';

class NavbarInstance extends React.Component {
    render() {
        return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="http://localhost:3000/">Pathlight Carousel</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      </Navbar>
        );
    }
}

export default NavbarInstance;
