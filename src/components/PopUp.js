import React from 'react';

const PopUp = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8 rounded-lg shadow-lg relative z-10 max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
                <p className="text-lg text-gray-700 mb-6">{content}</p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PopUp;