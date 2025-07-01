import './css/Menu.css';

const Menu = ({ elementsMenu, setActiveMenu, logout }) => {
    const handleLogout = () => {
        logout(false);
    };
    return (
        <nav>
            <ul className="menuNormal">
                {elementsMenu.map((element, index) => {
                    return (
                        <li key={index}>
                            <a
                                href="#"
                                onClick={() => setActiveMenu(element)}
                                className="menu-item"
                            >
                                {element}
                            </a>
                        </li>
                    );
                })}
                <li>
                    <a href="#" onClick={handleLogout} className="menu-item">
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Menu;
