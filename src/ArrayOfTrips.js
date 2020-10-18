import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import OverlayTrigger from "react-bootstrap/cjs/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/**
 * Props:
 * - trips: An array of Trip card objects
 *      i.e. Trip Card = [
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

    responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    render() {
        let result = [];
        for (let i = 0; i < this.props.trips.length; i++) {
            let cardInfo = this.props.trips[i];
            const renderTooltip = () => (
                <Tooltip>
                    <p>
                        {cardInfo["name"]}:
                        {cardInfo["description"]}
                    </p>
                </Tooltip>
            );
            result.push((
                <OverlayTrigger placement="auto-start"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}>
                    <a href={cardInfo["tripStartURL"]}>
                        <Card>
                            <Card.Img variant={"top"} src={""} />
                        </Card>
                    </a>
                </OverlayTrigger>
            ))
        }
        return (
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={this.responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile"}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {result}
            </Carousel>
        );
    }
}

export default ArrayOfTrips;