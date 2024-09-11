import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import TeamStructure from './components/TeamStructure';
import MeetingRecords from './components/MeetingRecords';
import Documents from './components/Documents';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
