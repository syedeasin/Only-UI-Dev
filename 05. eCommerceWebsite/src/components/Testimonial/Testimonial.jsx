import React from 'react';
import Trustpilot from "../../assets/logo-trust-pilot.png";
import TestimonialCard from "./TestimonialCard.jsx";

const Testimonial = () => {
    return (
        <div className="items-center text-center">
            <div>
                <h4 className="px-4 py-2 inline bg-red-200 rounded-full text-base font-medium">Our features</h4>
                <h2 className="mt-5 font-bold text-5xl tracking-tight">See what our customers say</h2>
                <h3 className="mt-5 font-semibold text-3xl flex items-center justify-center">4.82/5<span
                    className="ml-3"><img src={Trustpilot} alt=""/></span></h3>
            </div>

            {/*Testimonial Carousel*/}
            <div className="flex items-center gap-6 mt-16">
                <button className="inline px-4 py-2 bg-blue-950 rounded-lg text-white">Prev</button>
                <div className="flex gap-7">
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                </div>
                <button className="inline px-4 py-2 bg-blue-950 rounded-lg text-white">Next</button>
            </div>
        </div>
    );
};

export default Testimonial;