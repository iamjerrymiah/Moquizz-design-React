import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import './ImageGallery.css';

const imageGallery = ( props ) => {
    return(
<Aux>
    <h1 style={{ color: 'rgb(21, 21, 75)', marginBottom: '30px', marginTop: '130px' }}>Image Galleries</h1>
    <div className="container-fluid gallery">  
        <img src="https://source.unsplash.com/1600x1200?musician,portrait" className="img-responsive" alt="pic"/>
        <img src="https://source.unsplash.com/1024x768?musician,portrait" className="img-responsive" alt="pic"/>
        <img src="https://source.unsplash.com/1366x768?musician,portrait" className="img-responsive" alt="pic"/>
        <img src="https://source.unsplash.com/1020x1080?musician,portrait" className="img-responsive" alt="pic"/>
        <img src="https://source.unsplash.com/340x360?musician,portrait" className="img-responsive" alt="pic"/>
        <img src="https://source.unsplash.com/1200x1300?musician,portrait" className="card img-responsive" alt="pic"/>
       </div>
</Aux>
    )
}

export default imageGallery;