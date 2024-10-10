import React from 'react';
import reviewStar from '../../assets/5star.png';


const TestimonialCard = ({key,name,title,description}) => {
    return (
        <>
         <div className="bg-white p-10 text-start rounded-lg" key={key}>
             <h4 className="text-xl font-semibold">{name}</h4>
             <img src={reviewStar} alt="reviewStar" className="w-28 items-start mt-3"/>
             <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
             <p className="mt-4 text-xl text-gray-500 leading-8">{description}</p>
         </div>
        </>
    );
};

export default TestimonialCard;