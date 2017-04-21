import React, {Component} from 'react';
import './App.css';
import NavbarInstance from './NavbarInstance';
import CarouselInstance from './CarouselInstance';

class App extends Component {
    render() {
        return (
          <div>
            <NavbarInstance></NavbarInstance>
            <CarouselInstance></CarouselInstance>
          </div>
        );
    }
}

export default App;
