import React, { useEffect, useState } from "react";
import {driveFiles} from "../resources/assets";
import Docs from "./Docs";

// Natural sort for file names
const naturalSort = (a, b) => {
  return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
};


const MeetingRecords = () => {
  const [documents, setDocuments] = useState([]); // Store all documents
  const [error, setError] = useState(null);
  const folderId = driveFiles.meetingRecords; // Replace with your Google Drive folder ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;  // Replace with your Google API key

  const fetchDocuments = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${apiKey}&fields=files(id,name,webViewLink,mimeType)`
      );
      
      if (!response.ok) {
        setError("Failed to fetch documents");
        return;
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

      <Docs documents={documents} error={error} />
    </section>
  );
};

export default MeetingRecords;