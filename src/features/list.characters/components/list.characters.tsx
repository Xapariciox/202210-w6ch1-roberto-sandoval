import { useContext } from 'react';
import { CharacterFluxContext } from '../../../infrastructure/context/public.context/context';
import { CardsCharacters } from './cards';
import { PaginationButtons } from './pagination';
import style from './list.characters.module.css';

export function ListCharacters() {
    const { characters } = useContext(CharacterFluxContext);

    return (
        <>
            <ul className={style.favList}>
                {characters.map((item) => (
                    <CardsCharacters
                        key={item.id}
                        item={item}
                    ></CardsCharacters>
                ))}
            </ul>
            <PaginationButtons></PaginationButtons>
        </>
    );
}
