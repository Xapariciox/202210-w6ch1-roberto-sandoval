import { useCrud } from '../../hooks/use.crud';
import { MyContext } from './my.context';

export function MyContextProvider({ children }: { children: JSX.Element }) {
    const context = useCrud();
    return (
        <>
            <MyContext.Provider value={context}>{children}</MyContext.Provider>
        </>
    );
}
