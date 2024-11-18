import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import Router
import Main from './components/Main';
import TeamStructure from './components/TeamStructure';
import MeetingRecords from './components/MeetingRecords';
import Documents from './components/Documents';
import Header from './components/Header';
import Footer from './components/Footer';
import FinalDocuments from './components/FinalDocuments';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/team-structure" element={<TeamStructure />} />
          <Route path="/meetings" element={<MeetingRecords />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/final-documents" element={<FinalDocuments />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
