import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import './Profile.css';

const profile = ( props ) => {
    return (
        <Aux>
<div className="container" style={{ marginTop: '60px', marginBottom: '100px'}}>

    <div className="gallery">

        

        <div className="gallery-item" tabIndex="0">

            <img src="https://source.unsplash.com/800x600?musician,portrait" className="gallery-image" alt=""/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span>Shadows of My Dream</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabIndex="0">

            <img src="https://source.unsplash.com/1600x1200?musician,portrait" className="gallery-image" alt=""/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Gallery</span>

            </div>

            <div className="gallery-item-info">

            <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span>Shadows of My Dream</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabIndex="0">

            <img src="https://source.unsplash.com/1500x1150?musician,portrait" className="gallery-image" alt=""/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Video</span><i className="fa fa-video" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

            <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span>Shadows of My Dream</li>
                </ul>

            </div>

        </div>

    </div>
    

</div>

        </Aux>
    )
}

export default profile;