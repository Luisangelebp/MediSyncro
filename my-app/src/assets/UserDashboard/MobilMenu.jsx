import './css/MobilMenu.css';
import { useState } from 'react';

export default function MobilMenu({ elementsMenu, setActiveMenu, logout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const elements_Menu = elementsMenu;
    const handleLogout = () => {
        logout(false);
    };
    return (
        <>
            <div className="mobil-menu" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="bi bi-list"></i>
            </div>
            {menuOpen && (
                <div className="modalMenu" onClick={() => setMenuOpen(false)}>
                    <ul className="menu">
                        {elements_Menu.map((element, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            setActiveMenu(element);
                                        }}
                                        className="menu-item"
                                    >
                                        {element}
                                    </a>
                                </li>
                            );
                        })}
                        <li>
                            <a
                                href="#"
                                onClick={handleLogout}
                                className="menu-item"
                            >
                                Cerrar sesión
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
