import MobilMenu from './MobilMenu';
import '../../public/logo.svg';
import './css/App.css';
import { elementsMenu } from './constans/constans';
export default function Header() {
    return (
        <header>
            <div className="logo">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <use href="../public/logo.svg" width="100" height="100" />
                </svg>
            </div>
            <h1>MediSyncro</h1>
            <MobilMenu elementsMenu={elementsMenu}></MobilMenu>
        </header>
    );
}
