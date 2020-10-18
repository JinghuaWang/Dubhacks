import React, {Component} from 'react';
import Image from "react-bootstrap/cjs/Image";
import "./StartPage.css";

class StartPage extends Component {
    onClick = ()=>{
        this.props.changeState(2);
    };
    render() {
        return (
            <div id={"theme_details"}>
                <h1>The Cherry Blossom Tour</h1>
                <div id={"body"}>
                    <div><Image src={"img/arrow-left-fill.png"} fluid/></div>
                    <div id={"main"}>
                        <div id={"intro"}>
                            <Image id={"avatar"} src={"img/husky.png"} rounded />
                            <h3>Hello, I'm your tour Guide</h3>
                        </div>
                        <div>
                            <text>
                                Your tour guide for the Cherry Blossom Tour will be Husky
                            </text>
                        </div>
                    </div>
                    <div id={"next-button"} onClick={this.onClick}>
                        <h1>Start</h1>
                        <div><Image src={"img/arrow-right-fill.png"} fluid/></div>
                    </div>
                </div>
                <Image src={"img/route.png"} fluid />
            </div>
        );
    }
}
export default StartPage;