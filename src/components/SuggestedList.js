import React, {Component} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from "react-bootstrap/cjs/Card";
import CardColumns from 'react-bootstrap/CardColumns';
import Button from "react-bootstrap/cjs/Button";
import '../css/SuggestedList.css'

class SuggestedList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    setOpen = () => {
        let k = !this.state.open;
        this.setState({
            open: k
        })
    }

    render() {
        return (
            <div id={"suggested-list"}>
                <Button
                            onClick={this.setOpen}
                            aria-controls="example-collapse-text"
                            aria-expanded={this.state.open}
                        variant={"outline-info"}
                        siz={"lg"} className={"btm"}
                        block
                >
                    Check Out Who Has Been Here
                </Button>
                <Collapse id={"extra-details"} in={this.state.open}>
                    <CardColumns>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll1.jpg"} />
                            <Card.Body>
                                XX has been here!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll2.jpg"} />
                            <Card.Body>
                                GO DAWGS!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll3.jpg"} />
                            <Card.Body>
                                YAY~!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll4.jpg"} />
                            <Card.Body>
                                OMG!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll5.jpg"} />
                            <Card.Body>
                               YY has been here!
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant={"top"} src={"img/scroll6.jpg"} />
                            <Card.Body>
                                YY has been here!
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Collapse>
            </div>
        );
    }
}
export default SuggestedList;
