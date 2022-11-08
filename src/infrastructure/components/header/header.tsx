import { Menu } from '../menu/menu';
import './header.css';

export function Header() {
    return (
        <>
            <div className="Logo-rick">
                <img
                    src="./assets/logo.header.png"
                    alt="Rick And Morty"
                    placeholder="Rick"
                />
            </div>
            <div>
                <Menu></Menu>
            </div>
        </>
    );
}
