import React, { useEffect, useState } from "react";

const fileIcons = {
  pdf: require("../resources/pdf-icon.png"),
  docx: require("../resources/word-icon.png"),
  pptx: require("../resources/pptx-icon.png"),
  default: require("../resources/file-icon.png"), // Default icon for other file types
};

const getFileExtension = (fileName) => {
  return fileName.split(".").pop().toLowerCase(); // Extract file extension
};

const FinalDocuments = () => {
  const [documents, setDocuments] = useState([]); // Default to an empty array
  const [error, setError] = useState(null);
  const folderId = "16hadfFR4Fd2swSYfeLl1ciJhxdPMIcas"; // Replace with your actual folder ID
  const apiKey = "AIzaSyBypvuhUJYBM86PVWS6wEujodj4SkA158g"; // Replace with your Google API key

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,webViewLink,mimeType)`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch documents");
        }
        const data = await response.json();

        // Check if data contains files, otherwise set an empty array
        setDocuments(data.files || []);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setError(error.message); // Set error message if fetch fails
      }
    };

    fetchDocuments();
  }, []);

  return (
    <section id="documents" className="bg-stone-200 py-12 px-6 min-h-full">
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
          Final Documents and Progression
        </h1>
        <hr className="border-t-3 border-t-black my-4" />

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
      </div>
    </section>
  );
};

export default FinalDocuments;
