import { useContext } from 'react';
import { MyContext } from '../../infrastructure/context/my.context/my.context';
import { MyCard } from './my.card';
import style from './favorites.module.css';

export function Favorites() {
    const { myCharacters } = useContext(MyContext);

    return (
        <>
            <ul className={style.favList}>
                {myCharacters.map((item) => (
                    <MyCard key={item.id} item={item}></MyCard>
                ))}
            </ul>
        </>
    );
}
