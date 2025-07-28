import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import Router
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

function App() {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = 'https://fyp24-30.bensonngu.cc'; // replace with actual URL
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Helmet>
                {/* General SEO */}
                <title>I Like That Coffee | FYP-24-S3-30</title>
                <meta name="description" content="FYP-24-S3-30 — Built by Wu LiXing, Ngu Cheng Jie, Elisa, Lee Xin Rou, Tay Boon Yaw and Wang ZiHang. A final year project connecting coffee lovers, shop owners, and experts worldwide." />
                <meta name="keywords" content="coffee, coffee recommendation, coffee shop, final year project, FYP-24-S3-30, Wu LiXing, Ngu Cheng Jie, Elisa, Lee Xin Rou, Tay Boon Yaw, Wang ZiHang" />
                <meta name="author" content="Wu LiXing, Ngu Cheng Jie, Elisa, Lee Xin Rou, Tay Boon Yaw, Wang ZiHang" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="I Like That Coffee | FYP-24-S3-30" />
                <meta property="og:description" content="A final year project platform for coffee lovers and experts to share shops, menus, and coffee culture." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fyp24-30.bensonngu.cc/" />
                <meta property="og:image" content="https://fyp24-30.bensonngu.cc/preview.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="I Like That Coffee | FYP-24-S3-30" />
                <meta name="twitter:description" content="Explore, share, and connect through coffee. A global platform by FYP-24-S3-30 team." />
                <meta name="twitter:image" content="https://fyp24-30.bensonngu.cc/preview.png" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "I Like That Coffee",
                            "url": "https://fyp24-30.bensonngu.cc/",
                            "description": "A coffee sharing platform built as FYP-24-S3-30 by a team of students passionate about coffee.",
                            "member": [
                                { "@type": "Person", "name": "Wu LiXing" },
                                { "@type": "Person", "name": "Ngu Cheng Jie" },
                                { "@type": "Person", "name": "Elisa" },
                                { "@type": "Person", "name": "Lee Xin Rou" },
                                { "@type": "Person", "name": "Tay Boon Yaw" },
                                { "@type": "Person", "name": "Wang ZiHang" },
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow pt-16 lg:pt-20">
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

export default App;
