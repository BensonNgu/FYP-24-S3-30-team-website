// src/pages/About.js
import React from 'react';

const About = ({ id }) => {
    return (
        <section 
            id={id} 
            className="full-page-height p-8 bg-stone-300 text-gray-800"
        >
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                    About This Project
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-center">
                    The scope of the project is to build a platform that connects coffee lovers, shop owners, and coffee experts. The platform will allow users to discover new coffee shops based on location and menu offerings, share reviews and photos, and engage with the coffee community. Shop owners will be able to promote their businesses, manage listings, and interact with customers by showcasing special deals and events. Coffee experts will provide insights and tips, enriching users’ knowledge of coffee. The platform will serve as a hub for exploring, sharing, and celebrating coffee culture.
                </p>
            </div>
        </section>
    );
};

export default About;
