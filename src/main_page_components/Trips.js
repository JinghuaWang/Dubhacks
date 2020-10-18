import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/cjs/Tooltip";

import './Trips.css';
/**
 * Props:
 * card obj
 */
class Trips extends Component{
    onClick = () => {
        this.props.changeState();
        //window.location.assign("");
    }

    render() {
        let result = [];
        for (let i = 0; i < this.props.card.length; i++) {
            let card = this.props.card[i];
            result.push(
                (
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="button-tooltip-2">{card["name"]}</Tooltip>}
                    >
                        <Card style={{backgroundImage: "url(img" + card["img_url"] + ")",
                                        backgroundSize: "cover", display: "flex" }}
                              className={"cards"}
                              onClick={this.onClick}>
                        </Card>
                    </OverlayTrigger>
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