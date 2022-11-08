import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? children : <Navigate to="Home" replace={true} />;
}
