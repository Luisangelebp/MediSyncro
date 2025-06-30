import './css/Menu.css';

const Menu = ({ elementsMenu }) => {
    return (
        <nav>
            <ul className="menuNormal">
                {elementsMenu.map((element, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={`#${element}`}
                                onClick={() => setMenuOpen(false)}
                                className="menu-item"
                            >
                                {element}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Menu;
