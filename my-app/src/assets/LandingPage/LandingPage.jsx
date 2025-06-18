import '../../css/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import LoginSession from './StartSession/LoginSession';
import Register from './StartSession/Register';

export default function LandingPage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    return (
        <>
            {showLogin && (
                <LoginSession
                    setShowLogin={setShowLogin}
                    setShowRegister={setShowRegister}
                />
            )}
            {showRegister && (
                <Register
                    setShowRegister={setShowRegister}
                    setShowLogin={setShowLogin}
                />
            )}
            <Header />
            <Main
                setShowLogin={setShowLogin}
                setShowRegister={setShowRegister}
            />
            <Footer></Footer>
        </>
    );
}
