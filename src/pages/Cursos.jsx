import { useState } from "react";
import data from "../data/cursos.json";
import "../styles/Dashboard.component.css";

export function Cursos() {

    const [cursoActivo, setCursoActivo] = useState(null);

    const toggleCurso = (id) => {
        setCursoActivo(cursoActivo === id ? null : id);
    };

    return (
        <section className="historial-container">
            <h1>Historial Académico</h1>

            {data.anios.map((anioObj) => (
                <div key={anioObj.anio} className="anio-box">
                    <h2 className="titulo-anio">{anioObj.anio}</h2>

                    {anioObj.semestres.map((sem) => (
                        <div key={`${anioObj.anio}-S${sem.semestre}`} className="semestre-box">
                            <h3 className="titulo-semestre">Semestre {sem.semestre}</h3>

                            {/* Cursos del semestre */}
                            {sem.cursos.map((curso, index) => {
                                const cursoId = `${anioObj.anio}-${sem.semestre}-${curso.nombre}`;

                                return (
                                    <div key={cursoId} className="curso-box">
                                        <button
                                            className="curso-btn"
                                            onClick={() => toggleCurso(cursoId)}
                                        >
                                            {curso.nombre}
                                        </button>

                                        {/* Mostrar trabajos si el curso está activo */}
                                        {cursoActivo === cursoId && (
                                            <div className="trabajos-box">
                                                {curso.trabajos.length === 0 ? (
                                                    <p className="sin-trabajos">No hay trabajos registrados.</p>
                                                ) : (
                                                    curso.trabajos.map((trabajo) => (
                                                        <div key={trabajo.nombre} className="trabajo-item">
                                                            <h4>{trabajo.nombre}</h4>
                                                            <p><strong>Tipo:</strong> {trabajo.tipo}</p>
                                                            <p><strong>Descripción:</strong> {trabajo.descripcion}</p>
                                                            <p><strong>Fecha de entrega:</strong> {trabajo.fecha_entrega}</p>

                                                            {/* Tecnologías */}
                                                            <p><strong>Tecnologías:</strong> {trabajo.tecnologias.join(", ")}</p>

                                                            {/* Enlaces */}
                                                            {trabajo.repositorio && (
                                                                <p>
                                                                    <a href={trabajo.repositorio} target="_blank">
                                                                        Repositorio
                                                                    </a>
                                                                </p>
                                                            )}
                                                            {trabajo.sitio && (
                                                                <p>
                                                                    <a href={trabajo.sitio} target="_blank">
                                                                        Sitio Web
                                                                    </a>
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}
