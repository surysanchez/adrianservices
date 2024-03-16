import './FindUs.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { React, useState } from 'react';
import { Container } from 'react-bootstrap';
import {BiWindowClose} from "react-icons/bi";
import {IoMdCall} from "react-icons/io";

const FindUs = () => {
  const [showForm, setShowForm] = useState(false);
  return (
   
  <div className=" app__wrapper section__padding " id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Getting in touch" />
    
      <h1 className="headtext__cormorant" style={{lineHeight: '60px', fontSize: '45px'}} >Contact me with any questions or to get a Free Quote</h1>
      <div className='phoneNumber'>
      <h2 className='p__cormorant ' >  <i class="fa-solid fa-phone-volume fa-fade" style={{color: 'greenyellow'}}></i> English : 786-223-6581 </h2>
      <h2 className='p__cormorant ' >  <i class="fa-solid fa-phone-volume fa-fade" style={{color: 'greenyellow'}}></i> Spanish : 786-793-3403 </h2>
      </div><p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}> <i class="fa-solid fa-envelope-circle-check "></i> Gmail</p>
      <h4>adrian4u1972@gmail.com</h4>
      <div className="app__wrapper-content">
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}>Hours of Operation</p>
        <p className="p__opensans">Mon - Fri: 9:30 am - 5:30 pm</p>
        
      </div>
    
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={() => setShowForm(!showForm)}> 
      {showForm ?   < BiWindowClose  fontSize={30} /> : "Contact Us"}
      </button>
      {showForm &&  <form
            className="flex ml-4 flex-col max-w-[600px] h-full w-full mb-4 "
            action="https://getform.io/f/8f6f0338-89a0-41dd-8284-f7b888e82cc8" method="POST"
            target="_blank"
            rel="noopener noreferrer"
          > 
          
            <div className="pb-0 mt-0 ">
             
              <p className="py-4 p__cormorant"  >Drop us a line!  <i class="fa-regular fa-comments fa-beat-fade"  style={{color: 'Tomato'}}></i> </p>
            </div>
            <input
              className=" my-4 py-1 p-2 border-2 rounded-md border-[#605022]"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
        
            <input
              className="my-6 p-2 rounded-md border-2 border-[#605022] "
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="my-6 p-2 rounded-md border-2 border-[#605022] "
              type="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />
           
            <input
              className="my-4 p-8  border-2 border-[#605022] rounded-md"
              type="text"
              rows="10"
              name="message"
              required
              placeholder="Message"
            />
          
            {/* <div pt-8 text-center> */}
            <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}
            > Send message
              
            </button>

            {/* </div> */}
          </form> }
    </div>

  </div>
)
  }

export default FindUs;