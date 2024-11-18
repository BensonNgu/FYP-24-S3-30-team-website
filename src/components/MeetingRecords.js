import React, { useEffect, useState } from "react";
import { Button } from "@mui/material"; // MUI Button
import InfoIcon from "@mui/icons-material/Info"; // MUI Icon

const fileIcons = {
  pdf: require("../resources/pdf-icon.png"),
  docx: require("../resources/word-icon.png"),
  pptx: require("../resources/pptx-icon.png"),
  default: require("../resources/file-icon.png"), // Default icon for other file types
};

const getFileExtension = (fileName) => fileName.split(".").pop().toLowerCase();

// Natural sort for file names
const naturalSort = (a, b) => {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
};


const MeetingRecords = () => {
  const [documents, setDocuments] = useState([]); // Store all documents
  const [error, setError] = useState(null);
  const folderId = "1H-2Pxv2K1gIgOs4cTkCQNbhOEKGHqwN7"; // Replace with your Google Drive folder ID
  const apiKey = "AIzaSyBypvuhUJYBM86PVWS6wEujodj4SkA158g"; // Replace with your Google API key

  const fetchDocuments = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${apiKey}&fields=files(id,name,webViewLink,mimeType)`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }
      const data = await response.json();
      const sortedFiles = (data.files || []).sort(naturalSort);
      setDocuments(sortedFiles);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchDocuments(); // Fetch documents on component mount
  }, []);

  return (
    <section id="meetings" className="min-h-screen p-8 bg-stone-200">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
        Meeting Records
      </h1>
      <hr className="border-t-3 border-t-black my-4" />

      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {documents.length > 0 ? (
          documents.map((doc) => {
            const extension = getFileExtension(doc.name);
            const iconSrc = fileIcons[extension] || fileIcons.default;

            return (
              <div
                key={doc.id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {doc.name}
                  </h2>
                  <Button
                    variant="text"
                    color="primary"
                    startIcon={<InfoIcon />}
                    onClick={() => window.open(doc.webViewLink, "_blank")}
                  >
                    View Document
                  </Button>
                </div>
                <div className="p-4 bg-gray-50">
                  <img
                    src={iconSrc}
                    alt={`${extension} icon`}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-700">
            No documents available at this time.
          </p>
        )}
      </div>
    </section>
  );
};

export default MeetingRecords;