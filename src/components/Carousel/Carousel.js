import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const carousel = ( props )=>{
  const carouselPic1 = "https://source.unsplash.com/640x240?musician,portrait";
  const carouselPic2 =  "https://source.unsplash.com/650x250?musician,portrait";
  const carouselPic3 =  "https://source.unsplash.com/660x260?musician,portrait";

  let allowed = null;

  if(props.allow) {
    allowed = (<Carousel style={{ marginBottom: '40px' }}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={carouselPic1}
        alt="First slide"
        style={{minHeight: '500px' }}
      />
      <Carousel.Caption>
          <h1>Boquizz</h1>
        <h4>Don't have an account yet?</h4>
      <NavLink to="/signup"> 
        <Button style={ {backgroundColor: 'rgb(21, 21, 75)', color: 'white', width: '180px', height: '45px'} }>Sign Up</Button>
      </NavLink>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={carouselPic2}
        alt="Second slide"
        style={{minHeight: '500px' }}
      />

      <Carousel.Caption>
        <h4>Already have an account?</h4>
      <NavLink to="/login">
        <Button style={ {backgroundColor: 'rgb(21, 21, 75)', color: 'white', width: '180px', height: '45px'} }>Sign In</Button>
      </NavLink>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={carouselPic3}
        alt="Third slide"
        style={{minHeight: '500px' }}
      />

      <Carousel.Caption>
        <h4>Who are we?</h4>
      <NavLink to="/about">
        <Button style={ {backgroundColor: 'rgb(21, 21, 75)', color: 'white', width: '180px', height: '45px'} }>About Boquizz</Button>
      </NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>)
  }else {
    allowed = (<Carousel style={{ marginBottom: '40px' }}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={carouselPic1}
        alt="First slide"
        style={{minHeight: '500px' }}
      />
      <Carousel.Caption>
          <h1>{props.acccx}</h1>
        </Carousel.Caption>
    </Carousel.Item>
   </Carousel>)
  }

  return (
<Aux>
    {allowed}
</Aux>
  );
}

export default carousel;