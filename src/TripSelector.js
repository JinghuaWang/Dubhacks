import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import ArrayOfTrips from "./ArrayOfTrips";
//import "./TripSelector.css"

/**
 * Props:
 *  categories: categories of trips present
 */
class TripSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = [];
        for (let i = 0; i < this.props.categories.length; i++) {
            let cat = this.props.categories[i];
            result.push((
                <ArrayOfTrips trips={this.props.trips}/>
            ))
        }
        return (
            <Container>
                {result}
            </Container>
        );
    }
}

export default TripSelector;