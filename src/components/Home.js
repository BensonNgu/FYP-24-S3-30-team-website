import React from 'react';
import backgroundImage from '../resources/coffeeshop.webp';

const Home = ({ id }) => {
    return (
        <section
            id={id}
            className="full-page-height bg-cover bg-center flex items-center justify-center relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay with better opacity and blur effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            {/* Content on top of the blurred background */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4 p-4">
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                    I Like That Coffee
                </h1>
                <p className="text-white text-xl md:text-2xl">
                    FYP-24-S3-30
                </p>
                <p className="text-white text-lg md:text-xl">
                    Singapore
                </p>
            </div>
        </section>
    );
};

export default Home;
