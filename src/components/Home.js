import React from 'react';
import backgroundImage from '../resources/coffeeshop.webp';
import { Button } from '@mui/material'

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
                    We've Moved!
                </h1>
                <p className="text-white text-xl md:text-2xl">
                    Our website has migrated to a new domain.
                </p>
                <p className="text-white text-lg md:text-xl">
                    You will be redirected in 3 seconds...
                </p>
                <p className="text-white text-md md:text-lg italic">
                    If not, click the button below to continue manually.
                </p>
                <Button variant="outlined" size="large" onClick={() => window.location.href = 'https://fyp24-30.bensonngu.cc'}
                sx={{
                    color: "white", // Coffee-brown text
                    borderColor: "white", // Coffee-brown border
                    "&:hover": {
                        color: "#4E342E",
                        borderColor: "#4E342E", // Darker brown on hover
                        backgroundColor: "#D7CCC8", // Light coffee-cream background on hover
                    },
                    fontWeight: "bold", // Bold text
                    borderRadius: "12px", // Smooth rounded corners
                    padding: "10px 30px", // Spacious padding
                    fontSize: "18px", // Slightly larger font
                    textTransform: "uppercase", // Uppercase text for emphasis
                    letterSpacing: "1px", // Slight letter spacing for elegance
                }}
                >Go to New Site</Button>
            </div>
        </section>
    );
};

export default Home;
