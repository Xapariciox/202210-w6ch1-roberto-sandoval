import style from './about.us.module.css';

export function AboutUs() {
    return (
        <div className={style.container}>
            <div className={style.container_text}>
                <p>
                    Rick y Morty (en inglés: Rick and Morty) es una serie de
                    televisión americana de animación para adultos creada por
                    Justin Roiland y Dan Harmon en 2013 para Adult Swim, también
                    se emitió en Cartoon Network. La serie sigue las desventuras
                    de un científico, Rick Sanchez, y su fácilmente
                    influenciable nieto, Morty, quienes pasan el tiempo entre la
                    vida doméstica y los viajes espaciales, temporales e
                    intergalácticos. Justin Roiland, el co-creador de la serie y
                    Johnny Knoxville son los encargados de las voces principales
                    de Morty y Rick, la serie también incluye las voces de Chris
                    Parnell, Spencer Grammer y Sarah Chalke.
                </p>
            </div>
            <div className={style.container_create}>
                <h2 className={style.h2}>Creado por:</h2>
                <p className={style.create_text}>Alvaro</p>
                <p className={style.create_text}>Roberto</p>
                <p className={style.create_text}>Lucho</p>
            </div>
            <div>
                <img
                    className={style.padding}
                    src="./assets/about.us.png"
                    alt="meeseks"
                />
            </div>
        </div>
    );
}
