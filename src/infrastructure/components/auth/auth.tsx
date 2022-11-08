import { useAuth0 } from '@auth0/auth0-react';

export function Auth() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    console.log({ isAuthenticated });

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="auth-home">
            {!isAuthenticated && (
                <button className="buttom-login" onClick={handleLogin}>
                    Login
                </button>
            )}
            {isAuthenticated && (
                <>
                    <div>
                        <h2 className="login-name">👽{user?.name}👽</h2>
                    </div>
                    <button className="button-logout" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
