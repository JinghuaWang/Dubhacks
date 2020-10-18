import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Welcome from "./Welcome";
import TripSelector from "./TripSelector";
import Container from 'react-bootstrap/Container'
// import './MainContent.css'

/**
 * Props:
 *
 */
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: require('../Data/cards'),
            categories: require('../Data/categories')
        };
    }

    // from bootstrap
    render(){
        return (
            <Carousel interval={null}>
                <Carousel.Item id={"welcome"}>
                    <Welcome className={"welcome"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <TripSelector changeState={this.props.changeState} trips={this.state.trips} categories={this.state.categories}/>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default MainContent;