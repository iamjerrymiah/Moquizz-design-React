import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import AboutElement from "../../components/AboutElement/AboutElement";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Footer from "../../components/Footer/Footer";

class AboutPage extends Component {
    render(){
        return(
            <Aux>
                <Navbar />
                <Carousel acccx="ABOUT US"/>
                <AboutElement />
                <ImageGallery />
                <Footer />
            </Aux>
        )
    }
}

export default AboutPage;