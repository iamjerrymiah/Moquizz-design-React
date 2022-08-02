import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import './Footer.css';

const footer = ( props ) => {
    return (
<Aux>
        <div className="footer">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#pe">Lorem Ipsum</a></li>
                                <li><a href="#pe">Simply dummy text</a></li>
                                <li><a href="#pe">The printing and typesetting </a></li>
                                <li><a href="#pe">Standard dummy text</a></li>
                                <li><a href="#pe">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div> 
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#pe">Lorem Ipsum</a></li>
                                <li><a href="#pe">Simply dummy text</a></li>
                                <li><a href="#pe">The printing and typesetting </a></li>
                                <li><a href="#pe">Standard dummy text</a></li>
                                <li><a href="#pe">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" className="subscribe__btn"><i className="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#pe"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#pe"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#pe"><i className="fa fa-google"></i></a></li>
                                <li><a href="#pe"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>                          
                    </div>        
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2022 <a href="#pe">Boquizz</a>.</p>
                    </div>                 
                </div>                
            </div>
        </div>
</Aux>
    )
}

export default footer;