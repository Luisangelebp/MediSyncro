import '../css/Main.css';
export default function Main() {
    return (
        <main>
            <section className="login-container" id="Hogar">
                <button className="btn">Iniciar Session</button>
                <button className="btn">Registrarse</button>
            </section>
            <section className="AboutUs" id="Nosotros">
                <h2>Sobre Nosotros</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic, magnam corporis! Saepe impedit distinctio ut officia
                    quis earum, quos doloribus odit quas omnis autem possimus
                    nulla expedita beatae incidunt quasi? Quisquam ipsam animi
                    laborum! Vitae asperiores facere, qui temporibus earum
                    quibusdam nulla facilis repellendus, mollitia labore nemo
                    ducimus eveniet ex. Quo commodi ducimus eos delectus
                    molestias, ut voluptates facilis vero.
                </p>
            </section>
            <section className="services" id="Servicios">
                <h2>Nuestros Servicios</h2>
                <div className="service">
                    <h3>Servicio 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quisquam, voluptatum.
                    </p>
                </div>
                <div className="service">
                    <h3>Servicio 2</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quisquam, voluptatum.
                    </p>
                </div>
                <div className="service">
                    <h3>Servicio 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quisquam, voluptatum.
                    </p>
                </div>
            </section>
        </main>
    );
}
