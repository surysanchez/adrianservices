import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { images } from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <>
   
    <MDBCarousel showControls fade  id='header'>
      <MDBCarouselItem itemId={1}>
        <img src={images.carpenter} style={{height: "55vh"}} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img  src={images.about}  style={{height: "55vh"}} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img   src={images.parallax} style={{height: "55vh"}} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
   
    </>
  )
};

export default Header;
