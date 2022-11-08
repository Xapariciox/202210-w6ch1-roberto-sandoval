import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../infrastructure/context/my.context/my.context';
import { Character } from '../../../infrastructure/model/interface';
import style from './list.characters.module.css';

export const CardsCharacters = ({ item }: { item: Character }) => {
    const { handleAdd } = useContext(MyContext);
    const handleClick = () => {
        handleAdd(item);
    };
    return (
        <>
            <li className={style.favList__item}>
                <div className={style.favList__UpperInfo}>
                    <div>{item.id}</div>
                    <button onClick={handleClick}>⭐</button>
                </div>
                <Link to={`/Details/${item.id}`}>
                    <div>
                        <img
                            src={item.image}
                            alt={item.name}
                            className={style.favList__img}
                        />
                    </div>{' '}
                </Link>
                <div className={style.favList__Info}>
                    <p>{item.name}</p>
                    <p>{item.species}</p>
                </div>
            </li>
        </>
    );
};
