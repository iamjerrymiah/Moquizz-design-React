import React from "react";

import './AboutElement.css';

const aboutElement = ( props ) => {
    const aboutPicLink = "https://source.unsplash.com/360x460?musician,portrait";
    return(
        <div className="AboutElement">
            <div className="AboutImg">
                <img src={aboutPicLink} alt="AboutPic"/>
            </div>
            <div className="AboutEle">
                <h1>Boquizz</h1>
                <p>
                Esteem spirit temper too say adieus who direct esteem. 
                It esteems luckily or picture placing drawing. 
                Apartments frequently or motionless on reasonable projecting expression enim ad minim veniam quis nostrud exercitation 
                we have supported programmes to help alleviate human suffering through animal welfare when people might 
                depend.
                </p>
            </div>
        </div>
    )
}

export default aboutElement;