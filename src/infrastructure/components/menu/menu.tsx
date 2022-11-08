import { Link } from 'react-router-dom';

export function Menu() {
    const menu = [
        { id: 1, path: '', label: 'Home' },
        { id: 2, path: 'Characters', label: 'Characters' },
        { id: 3, path: 'Favorites', label: 'Favorites' },
        { id: 4, path: 'AboutUs', label: 'About Us' },
    ];
    return (
        <>
            <ul className="ul-menu">
                {menu.map((item) => (
                    <li className="li-menu" key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
