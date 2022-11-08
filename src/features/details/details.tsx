import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Character } from '../../infrastructure/model/interface';
import { getApiDetails } from '../../infrastructure/services/apis';
import style from './details.module.css';
import { DetailsList } from './list.details';

export function Details() {
    const { id } = useParams();
    const initialState: Array<Character> = [];
    const [state, setstate] = useState(initialState);

    useEffect(() => {
        getApiDetails(`https://rickandmortyapi.com/api/character/${id}`).then(
            (res) => setstate(res)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ul className={style.container}>
                <Link className={style.text_decoration} to="/Characters">
                    Volver
                </Link>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <DetailsList item={state as any}></DetailsList>
            </ul>
        </>
    );
}
