import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStore, faUsers } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../resources/coffeeshop2.webp';

const About = ({ id }) => {
    return (
        <section
            id={id}
            className="full-page-height md:px-8 pb-3 bg-stone-300 text-gray-800 bg-cover bg-center flex items-center relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-lg"></div>

            <div className="container md:mx-auto flex flex-col lg:flex-row items-center max-w-6xl relative z-10">
                {/* Title Section */}
                <div className="flex-1 lg:w-1/3 px-4 py-4 text-center">
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-gray-800 leading-tight"
                        style={{
                            textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8), 0px 0px 20px rgba(255, 255, 255, 0.5)',
                        }}
                    >
                        About This Project
                    </h1>
                    <FontAwesomeIcon
                        icon={faCoffee}
                        className="text-6xl lg:text-7xl text-gray-700 mt-4 lg:mt-6"
                        style={{
                            textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8), 0px 0px 20px rgba(255, 255, 255, 0.5)',
                        }}
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4 bg-white shadow-lg rounded-lg mx-5">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="flex items-center justify-start text-left p-4 lg:p-8">
                            <FontAwesomeIcon icon={faUsers} className="text-4xl lg:text-6xl text-gray-800 mr-4 lg:mr-6" />
                            <p className="text-sm lg:text-lg font-mono leading-relaxed text-gray-700">
                                Connect with coffee lovers, share reviews, and discover new shops.
                            </p>
                        </div>
                        <div className="flex items-center justify-start text-left p-4 lg:p-8">
                            <FontAwesomeIcon icon={faStore} className="text-4xl lg:text-6xl text-gray-800 mr-4 lg:mr-6" />
                            <p className="text-sm lg:text-lg font-mono leading-relaxed text-gray-700">
                                Shop owners can promote their businesses, manage listings, and engage with the community.
                            </p>
                        </div>
                        <div className="flex items-center justify-start text-left p-4 lg:p-8">
                            <FontAwesomeIcon icon={faCoffee} className="text-4xl lg:text-6xl text-gray-800 mr-4 lg:mr-6" />
                            <p className="text-sm lg:text-lg font-mono leading-relaxed text-gray-700">
                                Coffee experts will provide tips and insights about coffee, enriching your experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
