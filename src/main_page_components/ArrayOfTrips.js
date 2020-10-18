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
        let temp = [];
        for (let i = 0; i < this.props.trips.length; i++) {
            let cardInfo = this.props.trips[i];
            if (this.props.cat !== cardInfo["category"]) {
                continue;
            }
            if (temp.length < 3) {
                temp.push(cardInfo);
            }
            if (temp.length === 3 || i === this.props.trips.length - 1) {
                result.push(<Carousel.Item><Trips key={i + 'a'} card={temp} /></Carousel.Item>);
                temp = [];
            }

        }
        return (
            <Carousel>
                {result}
            </Carousel>
        );
    }
}

export default ArrayOfTrips;