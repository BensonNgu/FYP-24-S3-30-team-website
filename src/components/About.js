// src/pages/About.js
import React from 'react';

const About = ({ id }) => {
    return (
        <section 
            id={id} 
            className="full-page-height p-8 bg-stone-300 text-gray-800 bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url('path-to-your-background-image')`,
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-6xl">
                {/* Title Section */}
                <div className="flex-1 lg:w-1/3 p-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        About This Project
                    </h1>
                </div>

                {/* Content Section */}
                <div className="flex-1 lg:w-2/3 p-4">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                        The scope of the project is to build a platform that connects coffee lovers, shop owners, and coffee experts. The platform will allow users to discover new coffee shops based on location and menu offerings, share reviews and photos, and engage with the coffee community. Shop owners will be able to promote their businesses, manage listings, and interact with customers by showcasing special deals and events. Coffee experts will provide insights and tips, enriching users’ knowledge of coffee. The platform will serve as a hub for exploring, sharing, and celebrating coffee culture.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
