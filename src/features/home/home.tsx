import { Auth } from '../../infrastructure/components/auth/auth';

export function Home() {
    return (
        <>
            <Auth></Auth>
            <div className="div-rick">
                <img
                    className="rick-image"
                    src="./assets/rick.png"
                    alt="Rick"
                />
            </div>
        </>
    );
}
