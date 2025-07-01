import './css/App.css';
import LandingPage from './assets/LandingPage/LandingPage.jsx';
import { useState } from 'react';
import UserDashboard from './assets/UserDashboard/UserDashboard.jsx';
import userj from './user.json';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(userj);
    return (
        <>
            {/* Rendering Landing Page */}
            {!isLoggedIn && <LandingPage />}
            {isLoggedIn && (
                <UserDashboard user={isLoggedIn} logout={setIsLoggedIn} />
            )}
        </>
    );
}

export default App;
