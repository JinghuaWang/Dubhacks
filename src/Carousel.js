import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Welcome from "./Welcome";
import TripSelector from "./TripSelector";
import Container from 'react-bootstrap/Container'
//import './Carousel.css'

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
                <Container>
                    <Carousel.Item>
                        <Welcome/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <TripSelector trips={[]} categories={[]}/>
                    </Carousel.Item>
                </Container>
            </Carousel>
        );
    }
}
export default MainContent;