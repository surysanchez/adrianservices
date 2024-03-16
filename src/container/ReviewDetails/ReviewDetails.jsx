import React from 'react'

function ReviewDetails({reviewDetail}) {
    const {name,title, description, img} = reviewDetail;
    console.log("reviewDetail" + reviewDetail)
    return (
        <div className="item">
           
            <div className="shadow-effect">
                {/* Ternary: {score > 90 ? "A" : "B or less"}</li> */}
            {img === '' ? <i class="fa-solid fa-image-portrait fa-2xl mb-4" ></i> : <img className="img-circle" src={img}  />}

                <h4 style={{color: 'orangered'}} className='p__opensans title'>{title}</h4>
                <p>{description}</p>
            </div>
            <div className="review-name">
                <h5>{name}</h5>
            </div>
        </div>
    );
}

export default ReviewDetails