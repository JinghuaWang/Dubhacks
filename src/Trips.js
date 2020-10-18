import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
                (   <Card>
                        <Card.Body>
                            <OverlayTrigger
                                key={i}
                                placement="bottom"
                                overlay={<Tooltip id="button-tooltip-2">{card["name"]}</Tooltip>}
                            >
                                <a href={"www.google.com"}>
                                    <img src={card["img_url"]} alt={card["img_url"]}/>
                                </a>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                )
            );
        }
        return (
            <CardGroup>
                {result}
            </CardGroup>
        );
    }
}

export default Trips;