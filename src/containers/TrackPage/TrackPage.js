import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import Track from "../../components/Track/Track";
import Footer from "../../components/Footer/Footer";


class TrackPage extends Component {
    render() {
        return(
            <Aux>
                <Navbar />
                <Carousel acccx="TRACKS"/>
                <Track length={4}/>
                <Footer />
            </Aux>
        )
    }
}

export default TrackPage;