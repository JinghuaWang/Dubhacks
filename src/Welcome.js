import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import './Welcome.css'
/**
 * props:
 */
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:  require('./Data/welcoming_sentence')
        };
    }

    render() {
        return (
            <Jumbotron fluid={true}>
                <h1>{this.state.msg["title"]}</h1>
                <p>
                    {this.state.msg["motto"]}
                </p>
            </Jumbotron>
        );
    }
}

export default Welcome;