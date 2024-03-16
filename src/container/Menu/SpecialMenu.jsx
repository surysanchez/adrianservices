import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';
import Accordion from 'react-bootstrap/Accordion';

const SpecialMenu = () => {
  return (
  <div className='app__specialMenu flex__center section__padding' id='services' >
    <div className='app__specialMenu-title'>
      <SubHeading title="Check the type of work I do"  />
     <h1 className='headtext__cormorant'>Services</h1>
     <div  className='app__specialMenu-menu_heading'> Custom Professional Work  </div>
    </div>

                                      
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        {/* <p className="app__specialMenu-menu_heading"> Custom Professional Work </p> */}
        <div className="app__specialMenu_menu_items">
        {data.residentialWorks.map((residentialWork, index) => (
            <MenuItem key={residentialWork.title + index} title={residentialWork.title} price={residentialWork.type}  />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.woodCabinet} alt="services img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        {/* <p className="app__specialMenu-menu_heading">Professional Work</p> */}
        <div className="app__specialMenu_menu_items">
          {data.OtherCustomWorks.map((OtherCustomWork, index) => (
            <MenuItem key={OtherCustomWork.title + index} title={OtherCustomWork.title} tags={OtherCustomWork.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show More</Accordion.Header>
        <Accordion.Body  className='container-menu-img'>
          <img className='menu-img' src={images.servicesmenu} alt= 'servicesmenu' />
        </Accordion.Body>
        </Accordion.Item>
       </Accordion> */}

   
   
   
  
  </div>
  )
};

export default SpecialMenu;
