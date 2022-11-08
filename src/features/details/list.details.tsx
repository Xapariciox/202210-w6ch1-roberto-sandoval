import { Character } from '../../infrastructure/model/interface';
import style from './list.details.module.css';
export function DetailsList({ item }: { item: Character }) {
    return (
        <>
            <li className={style.container}>
                <div>
                    <img className={style.img} src={item.image} alt="" />
                </div>
                <div className={style.container_title}>
                    <h2>Informacion</h2>
                </div>
                <div className={style.container_info}>
                    <p className={style.text}>Nº</p>
                    <p className={style.text_info}>{item.id}</p>
                </div>
                <div className={style.container_info}>
                    <p className={style.text}>Estado</p>
                    <p className={style.text_info}>{item.status}</p>
                </div>
                <div className={style.container_info}>
                    <p className={style.text}>Genero</p>
                    <p className={style.text_info}>{item.gender}</p>
                </div>
                <div className={style.container_info}>
                    <p className={style.text}>Especie</p>
                    <p className={style.text_info}>{item.species}</p>
                </div>
                <div className={style.container_info}>
                    <p className={style.text}>Creado</p>
                    <p className={style.text_info}>{item.created}</p>
                </div>
                {/* <div>
                    <p>Episodios</p>
                    <p>{item.episode}</p>
                </div> */}
            </li>
        </>
    );
}
