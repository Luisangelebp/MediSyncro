import './css/dashboard.css';
import Header from './Header.jsx';
import { useState } from 'react';
const UserDashboard = ({ user }) => {
    const [activeMenu, setActiveMenu] = useState('Citas');
    return (
        <>
            <Header
                elementsMenuDefault={['Perfil', 'Citas', 'Explorar']}
                setActiveMenu={setActiveMenu}
            ></Header>
            {activeMenu === 'Citas' && <p>citas</p>}
            {activeMenu === 'Perfil' && <p>perfil</p>}
            {activeMenu === 'Explorar' && <p>explorar</p>}
        </>
    );
};

export default UserDashboard;
