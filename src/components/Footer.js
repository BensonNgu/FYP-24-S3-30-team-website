import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

const Footer = () => {
    const [isPopUpWindowOpen, setIsPopUpWindowOpen] = useState(false);

    const handleLinkClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        setIsPopUpWindowOpen(true); // Open the modal
    };

    const handleClosePopUpWindow = () => {
        setIsPopUpWindowOpen(false); // Close the modal
    };

    return (
        <footer className="bg-gray-800 p-6 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Company Info */}
                <div>
                    <p className="text-lg font-semibold mb-2">FYP-24-S3-30</p>
                </div>

                {/* Navigation */}
                <nav>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/team-structure#team" className="hover:text-gray-400 duration-300">About Us</Link></li>
                            <li>
                                <a
                                    href="https://ilikethatcoffee.bensonngu.cc"
                                    className="hover:text-gray-400 duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                // onClick={handleLinkClick}
                                >
                                    Project Website
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <p className="text-gray-400 text-sm text-center">&copy; 2024 FYP-24-S3-30. All rights reserved.</p>

            {/* <PopUp
                isOpen={isPopUpWindowOpen}
                onClose={handleClosePopUpWindow}
                title="Coming Soon"
                content="The project website is currently under development. Stay tuned!"
            /> */}
        </footer>
    );
};

export default Footer;
