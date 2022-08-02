import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import AboutElement from "../../components/AboutElement/AboutElement";
import Profile from "../../components/Profile/Profile";
import Track from "../../components/Track/Track";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Footer from "../../components/Footer/Footer";

import './Layout.css';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <Navbar />
                <Carousel allow/>
                <AboutElement />
                <Profile />
                <Track length={2}/>
                <ImageGallery />
                <Footer />
            </Aux>
        )
    }
}

export default Layout;