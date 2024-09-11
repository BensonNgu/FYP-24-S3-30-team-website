import React from 'react';

const Footer = () => {
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
                                <li><a href="/team-structure" className="hover:text-gray-400">About Us</a></li>
                                <li><a href="/" className="hover:text-gray-400">Project Website</a></li>
                            </ul>
                        </div>
                </nav>
            </div>
            <p className="text-gray-400 text-sm text-center">&copy; 2024 FYP-24-S3-30. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
