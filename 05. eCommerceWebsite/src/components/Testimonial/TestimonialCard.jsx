import React from 'react';
import reviewStar from '../../assets/5star.png';

const TestimonialCard = () => {
    return (
        <>
         <div className="bg-white p-10 text-start rounded-lg">
             <h4 className="text-xl font-semibold">Jane Cooper</h4>
             <img src={reviewStar} alt="reviewStar" className="w-28 items-start mt-3"/>
             <h3 className="mt-8 text-4xl font-semibold">T-shirt printing made easy.</h3>
             <p className="mt-4 text-xl text-gray-500 leading-8">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consectetur eaque, eius et expedita hic libero, omnis provident quos recusandae tenetur vitae voluptas."</p>
         </div>
        </>
    );
};

export default TestimonialCard;