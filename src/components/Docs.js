import React from "react";

const fileIcons = {
    pdf: require("../resources/pdf-icon.png"),
    docx: require("../resources/word-icon.png"),
    pptx: require("../resources/pptx-icon.png"),
    default: require("../resources/file-icon.png"), // Default icon for other file types
};

const getFileExtension = (fileName) => {
    return fileName.split(".").pop().toLowerCase(); // Extract file extension
};


const Docs = ({documents, error}) => {
    return (
        <>
            {error && (
                <p className="text-red-500 text-center">Error: {error}</p>
            )}
            <div className="mt-8 flex-grow">
                {documents.length > 0 ? (
                    // Grid system: Single column on small screens, two/three columns on larger screens
                    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc) => {
                            const extension = getFileExtension(doc.name);
                            const iconSrc = fileIcons[extension] || fileIcons.default;

                            return (
                                <li
                                    key={doc.id}
                                    className="transform hover:scale-[1.01] transition ease-in-out duration-300"
                                >
                                    <a
                                        href={doc.webViewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white shadow-md p-4 rounded-lg flex items-center transition transform hover:shadow-lg hover:bg-gray-100"
                                    >
                                        <img
                                            src={iconSrc}
                                            alt={`${extension} icon`}
                                            className="w-10 h-10 mr-4"
                                        />
                                        <span className="text-slate-600 font-medium break-words text-sm">
                                {doc.name}
                                </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    !error && <p className="text-center text-gray-700">No documents available.</p>
                )}
            </div>
        </>
    )
}

export default Docs;