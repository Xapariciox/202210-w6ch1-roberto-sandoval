import { useContext, useEffect, useState } from 'react';
import { CharacterFluxContext } from '../../../infrastructure/context/public.context/context';
import style from './pagination.module.css';

export function PaginationButtons() {
    const initialPage = 1;
    const [indexNumber, setIndexNumber] = useState(initialPage);
    const { handleLoad } = useContext(CharacterFluxContext);

    useEffect(() => {
        handleLoad(indexNumber);
    }, [indexNumber, handleLoad]);

    return (
        <div className={style.pagination}>
            <button
                className={style.pagination__button}
                title="prev"
                disabled={indexNumber === 1}
                onClick={() => {
                    setIndexNumber(indexNumber - 1);
                }}
            >
                Prev
            </button>
            <p>Page {indexNumber}</p>
            <button
                className={style.pagination__button}
                onClick={() => {
                    setIndexNumber(indexNumber + 1);
                }}
            >
                Next
            </button>
        </div>
    );
}
