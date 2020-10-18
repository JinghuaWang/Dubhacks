import React, {Component} from 'react';
import Trips from "./Trips";
import Carousel from 'react-bootstrap/Carousel';

/**
 * Props:
 * - trips: An array of Trips card objects
 *      i.e. Trips Card = [
 *          {name:
 *           description:
 *           img url:
 *           tripStartURL:}
 *      ]
 */
class ArrayOfTrips extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let result = [];
        for (let i = 0; i < this.props.trips.length; i = i + 3) {
            let cardInfo = this.props.trips.slice(i, i + 3);
            console.log()
            if (this.props.cat !== cardInfo["category"]) {
                continue;
            }
            result.push(<Carousel.Item><Trips card={cardInfo} /></Carousel.Item>);
        }
        return (
            <Carousel>
                {result}
            </Carousel>
        );
    }
}

export default ArrayOfTrips;