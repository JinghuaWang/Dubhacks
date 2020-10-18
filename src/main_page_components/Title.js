import React, {Component} from 'react';
//import './Title.css';

/**
 * Props:
 *
 *
 */
class Title extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:  require('../Data/welcoming_sentence')
        };
    }

    render() {
        return (
            <div>
                <h1 className={"content"}>{this.state.msg["title"]}</h1>
                <p className={"content"}>{this.state.msg["motto"]}</p>
            </div>
        );
    }
}

export default Title;
