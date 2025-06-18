import './css/App.css';
import LandingPage from './assets/LandingPage/LandingPage.jsx';
import { useState } from 'react';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {/* Rendering Landing Page */}
            {!isLoggedIn && <LandingPage />}
        </>
    );
}

export default App;
