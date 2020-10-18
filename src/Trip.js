import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './Trip.css';
/**
 * Props:
 * card obj
 */
class Trip extends Component{
    render() {

        return (
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">{this.props.card["name"]}</Tooltip>}
            >
                <a href={""}>
                    <Card>
                        <Card.Img src={this.props.card["img_url"]} />
                    </Card>
                </a>
            </OverlayTrigger>
        );
    }
}

export default Trip;