import MobilMenu from './MobilMenu';
import Menu from './Menu';
import '../../../public/logo.svg';
import '../../css/App.css';
import { useScreenWidth } from '../constans/hooks';
import { elementsMenu } from '../constans/constans';
export default function Header() {
    const screenWidth = useScreenWidth();
    return (
        <header>
            <div className="logo">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <use href="../../logo.svg" width={100} height={100} />
                </svg>
            </div>
            <h1>MediSyncro</h1>
            {screenWidth < 1024 ? (
                <MobilMenu elementsMenu={elementsMenu}></MobilMenu>
            ) : (
                <Menu elementsMenu={elementsMenu} />
            )}
        </header>
    );
}
