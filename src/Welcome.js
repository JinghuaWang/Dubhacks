import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Welcome.css'
/**
 * props:
 */
class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron fluid={true}>
                <h1>Something important</h1>
                <p>
                    abcdfefasefgasegegegege
                </p>
            </Jumbotron>
        );
    }
}

export default Welcome;