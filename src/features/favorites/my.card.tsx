import { useContext, useState } from 'react';
import { MyContext } from '../../infrastructure/context/my.context/my.context';
import { Character } from '../../infrastructure/model/interface';
import style from './favorites.module.css';

export const MyCard = ({ item }: { item: Character }) => {
    const { handleEraser } = useContext(MyContext);
    const [state, setState] = useState(item.status);

    const handleclick = () => {
        handleEraser(item);
    };
    return (
        <>
            <li className={style.favList__item}>
                <div className={style.favList__UpperInfo}>
                    <div>{item.id}</div>
                    <button onClick={handleclick}>✖</button>
                </div>
                <div className={style.img__container}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className={style.favList__img}
                    />
                </div>
                <div className={style.favList__Info}>
                    <p>{item.name}</p>
                    <p>{item.species}</p>
                </div>
                <div className={style.favList__Killer}>
                    <input
                        type="checkbox"
                        name="kill"
                        checked={state === 'Alive' ? true : false}
                        onChange={() => {
                            setState(state === 'Alive' ? 'Death' : 'Alive');
                        }}
                    />
                    <label htmlFor="kill">¿Morirá?</label>
                </div>
            </li>
        </>
    );
};
