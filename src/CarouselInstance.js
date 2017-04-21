import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from 'react-bootstrap';
import Request from 'superagent';

class CarouselInstance extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
      let url = 'https://source.unsplash.com/random/900x500';

    }

    render() {
        return (
          <Carousel>
            <Carousel.Item>
              <img width="100%" height="100%" alt="900x500" src="https://source.unsplash.com/random/900x500"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" height="100%" alt="900x500" src="https://source.unsplash.com/random/900x500"/>
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" height="100%" alt="900x500" src="https://source.unsplash.com/random/900x500"/>
            </Carousel.Item>
          </Carousel>
        );

    }
}

export default CarouselInstance;
