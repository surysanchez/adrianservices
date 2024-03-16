import React from 'react'
import './ReviewsPage.css'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import {images, data} from '../../constants';
import ReviewDetails from '../ReviewDetails/ReviewDetails.jsx';


// function ReviewsPage() {


//  //Owl Carousel Settings
//  const options = {
//     loop: true,
//     center: true,
//     items: 3,
//     margin: 0,
//     autoplay: true,
//     dots: true,
//     autoplayTimeout: 8500,
//     smartSpeed: 450,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1
//         },
       
//         600: {
//             items: 1
//         },
//         650: {
//             items: 1
//         },
//         700: {
//             items: 2
//         },
//         850: {
//             items: 2
//         },
//         1000: {
//             items: 2
//         },
//         1500: {
//             items: 2
//         },
//         2000: {
//             items: 2
//         }
//     }
// };

//   return (
//     <section id='review' className='reviews pt-70 pb-70'>
//         <div className='container mt-5'>
//             <h4 className='miniTitle text-center headtext__cormorant ' >REVIEWS </h4>
//             <div className='text-center'>
//                 <h3 className='sectionTitle p__cormorant' style={{fontSize: 'xx-large'}} > What clients are saying?</h3>
//             </div>
//             <p className='text-center'> I appreciate honest feedback and it would be great to know your experience working with me. Contact me for more information about my work.</p>
//           <div className='row'>
//             <div className='col-md-12'>
//                 <OwlCarousel id='clients-reviews' className='owl-carousel owl-theme' {...options}>
//                     {
//                         data.reviewItems.length === 0 ?
//                         <div className="item">
//                             <div className="shadow-effect">
//                                 <img  src={images.reviewPic} className="img-circle" alt="reviewPic" />
//                             </div>
//                             <div className="review-name">
//                                 <h5>Rony</h5>
                               
//                             </div>
//                         </div> :
//                        data.reviewItems.map(reviewDetail => {
//                         return (
//                             <ReviewDetails reviewDetail={reviewDetail} key={reviewDetail._key} />
//                         )
//                        })    
//                     }          
//                     </OwlCarousel> 
//             </div>
//           </div>
//         </div>
//     </section>
//   )
// }

function ReviewsPage(){
    <div>

    </div>
}
export default ReviewsPage