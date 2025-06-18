import './css/ModalSession.css';
import './css/Register.css';
const Register = ({ setShowRegister, setShowLogin }) => {
    return (
        <div className="ModalSession">
            <div className="modal-content">
                <h2>Register</h2>
                <form>
                    <div className="slider ">
                        <div className="page1 active">
                            <div className="inputGroup">
                                <label htmlFor="username" id="username">
                                    Usuario
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'username'
                                        ).className = 'active';
                                    }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'username'
                                            ).className = '';
                                        }
                                    }}
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                />
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="email" id="email">
                                    Email
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'email'
                                        ).className = 'active';
                                    }}
                                    onBlur={() => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'email'
                                            ).className = '';
                                        }
                                    }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="password" id="pass">
                                    Password
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'pass'
                                        ).className = 'active';
                                    }}
                                    onBlur={() => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'pass'
                                            ).className = '';
                                        }
                                    }}
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="page2">
                            <div className="inputGroup">
                                <label htmlFor="text" id="namelabel">
                                    Nombre
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'namelabel'
                                        ).className = 'active';
                                    }}
                                    onBlur={() => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'namelabel'
                                            ).className = '';
                                        }
                                    }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="LastName" id="lastNameLabel">
                                    Apellidos
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'lastNameLabel'
                                        ).className = 'active';
                                    }}
                                    onBlur={() => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'lastNameLabel'
                                            ).className = '';
                                        }
                                    }}
                                    type="text"
                                    id="LastName"
                                    name="LastName"
                                    required
                                />
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="birthdate" id="birthdateLabel">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    onFocus={() => {
                                        document.getElementById(
                                            'birthdateLabel'
                                        ).className = 'active';
                                    }}
                                    onBlur={() => {
                                        if (!e.target.value) {
                                            document.getElementById(
                                                'birthdateLabel'
                                            ).className = '';
                                        }
                                    }}
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn next"
                        onClick={() => {
                            document
                                .querySelector('.page1')
                                .classList.remove('active');
                            document
                                .querySelector('.page2')
                                .classList.add('active');
                            document.querySelector('.back').style.display =
                                'block';
                            document.querySelector('.next').style.display =
                                'none';
                            document.querySelector('#register').style.display =
                                'block';
                        }}
                    >
                        Siguiente <i className="bi bi-arrow-right"></i>
                    </button>
                    <button
                        className="btn back"
                        onClick={() => {
                            document
                                .querySelector('.page2')
                                .classList.remove('active');
                            document
                                .querySelector('.page1')
                                .classList.add('active');
                            document.querySelector('.next').style.display =
                                'block';
                            document.querySelector('.back').style.display =
                                'none';
                            document.querySelector('#register').style.display =
                                'none';
                        }}
                    >
                        <i className="bi bi-arrow-left"></i> Atras
                    </button>
                    <button type="submit" id="register">
                        Registrar
                    </button>
                </form>
                <p>¿Ya tienes una cuenta? </p>
                <button
                    className="btn"
                    onClick={() => {
                        setShowRegister(false);
                        setShowLogin(true);
                    }}
                >
                    Iniciar Sesión
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        setShowRegister(false);
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};
export default Register;
