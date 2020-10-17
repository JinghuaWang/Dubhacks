import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Welcome from "./Welcome";
import './Carousel.css'

/**
 * Props:
 *
 */
class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    // from bootstrap
    render(){
        return (
            <Carousel interval={null}>
                <Carousel.Item>
                    <Welcome/>
                </Carousel.Item>
                <Carousel.Item>
                    <TripSelector/>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default MainContent;