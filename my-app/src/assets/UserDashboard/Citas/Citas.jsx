import axios from 'axios';
import { useState, useEffect } from 'react';
import './css/Citas.css';
export default function Citas({ userid }) {
    const [citas, setCitas] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://6861c19496f0cc4e34b7634c.mockapi.io/api/v1/users/${userid}/citas`
            )
            .then((response) => {
                setCitas(response.data);
            });
    }, []);

    return (
        <div className="citas-container">
            {citas.map((cita) => {
                let fecha = cita.date.substring(0, 10);
                let hora = cita.date.substring(11, 16);
                return (
                    <div
                        key={cita.id}
                        className={`cita ${cita.status ? 'active' : ''}`}
                    >
                        <h3>{cita.title}</h3>
                        <div className="cita-info">
                            <p>Fecha: {fecha}</p>
                            <p>Hora: {hora}</p>
                            <p>Especialista: {cita.medic_id}</p>
                            <p>
                                Estatus de la cita:{' '}
                                {cita.status ? (
                                    <b>Confirmada</b>
                                ) : (
                                    'Por Confirmar'
                                )}
                            </p>
                        </div>
                        <button className="btn open-chat">Abrir Chat</button>
                    </div>
                );
            })}
        </div>
    );
}
