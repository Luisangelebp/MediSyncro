import './css/ModalSession.css';
const LoginSession = ({ setShowLogin, setShowRegister }) => {
    return (
        <div className="ModalSession">
            <div className="modal-content">
                <h2>Iniciar Sesión</h2>
                <form>
                    <div className="inputGroup">
                        <label htmlFor="username" id="username">
                            Usuario
                        </label>
                        <input
                            onFocus={() => {
                                document.getElementById('username').className =
                                    'active';
                            }}
                            onBlur={() => {
                                document.getElementById('username').className =
                                    '';
                            }}
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password" id="password">
                            Contraseña
                        </label>
                        <input
                            onFocus={() => {
                                document.getElementById('password').className =
                                    'active';
                            }}
                            onBlur={() => {
                                document.getElementById('password').className =
                                    '';
                            }}
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>

                    <button className="btn" type="submit">
                        Entrar
                    </button>
                </form>
                <p>¿No tienes una cuenta?</p>
                <button
                    className="btn"
                    onClick={() => {
                        setShowLogin(false);
                        setShowRegister(true);
                    }}
                >
                    Registrar
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        setShowLogin(false);
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};
export default LoginSession;
