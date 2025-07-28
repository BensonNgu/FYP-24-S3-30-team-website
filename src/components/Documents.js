import React, { useEffect, useState } from "react";
import {driveFiles} from "../resources/assets";
import Docs from "./Docs";


const Documents = () => {
  const [documents, setDocuments] = useState([]); // Default to an empty array
  const [error, setError] = useState(null);
  const folderId = driveFiles.documents; // Replace with your actual folder ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Replace with your Google API key

  useEffect(() => {

    const fetchDocuments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,webViewLink,mimeType)`
        );
        if (!response.ok) {
          setError("Failed to fetch documents");
          return;
        }
        const data = await response.json();

        // Check if data contains files, otherwise set an empty array
        setDocuments(data.files || []);
      } catch (err) {
        console.error("Error fetching documents:", error);
        setError(err.message); // Set error message if fetch fails
      }
    };

    fetchDocuments();
  }, []);

  return (
    <section id="documents" className="bg-stone-200 py-12 px-6 min-h-full">
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
        Initial Project Documents
        </h1>
        <hr className="border-t-3 border-t-black my-4" />
        <Docs documents={documents} error={error} />
      </div>
    </section>
  );
};

export default Documents;
