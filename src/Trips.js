import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

import './Trips.css';
/**
 * Props:
 * card obj
 */
class Trips extends Component{


    render() {
        let result = [];
        for (let i = 0; i < this.props.card.length; i++) {
            let card = this.props.card[i];
            result.push(
                (   <Card className={"cards"} onClick={()=>{window.location.assign(card["tripStartUrl"])}}>
                        <Card.Img variant="top" src={"img" + card["img_url"]}/>
                        <Card.Body>
                            {card["name"]}
                        </Card.Body>
                    </Card>
                )
            );
        }
        return (
            <CardDeck>
                {result}
            </CardDeck>
        );
    }
}

export default Trips;