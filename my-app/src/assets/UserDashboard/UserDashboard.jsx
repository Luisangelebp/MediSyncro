import './css/dashboard.css';
import Header from './Header.jsx';
import { useState } from 'react';
import Citas from './Citas/Citas.jsx';
import Explorar from './Explorar/Explorar.jsx';
import Perfil from './Perfil/Perfil.jsx';
const UserDashboard = ({ user, logout }) => {
    const [activeMenu, setActiveMenu] = useState('Citas');
    return (
        <>
            <Header
                elementsMenuDefault={['Perfil', 'Citas', 'Explorar']}
                setActiveMenu={setActiveMenu}
                logout={logout}
            ></Header>
            {activeMenu === 'Citas' && <Citas userid={user.id} />}
            {activeMenu === 'Perfil' && <Perfil />}
            {activeMenu === 'Explorar' && <Explorar />}
        </>
    );
};

export default UserDashboard;
