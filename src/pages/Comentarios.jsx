import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/Dashboard.component.css";

export function Comentarios() {
    const [nombre, setNombre] = useState("");
    const [comentario, setComentario] = useState("");
    const [listaComentarios, setListaComentarios] = useState([]);

    // =======================
    // Cargar comentarios
    // =======================
    const cargarComentarios = async () => {
        const { data, error } = await supabase
            .from("comentarios")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Error SELECT:", error);
            return;
        }

        setListaComentarios(data);
    };

    // =======================
    // Enviar nuevo comentario
    // =======================
    const manejarEnvio = async () => {
        if (!comentario.trim()) {
            alert("El comentario no puede estar vacío.");
            return;
        }

        const { error } = await supabase
            .from("comentarios")
            .insert({
                nombre: nombre || "Anónimo",
                comentario: comentario,
            });

        if (error) {
            console.error("ERROR INSERTANDO:", error);
            alert("No se pudo guardar el comentario. Revisa consola.");
            return;
        }

        // limpiar inputs
        setComentario("");
        setNombre("");

        // volver a cargar después del insert
        cargarComentarios();
    };

    // =======================
    // Cargar al abrir el componente
    // =======================
    useEffect(() => {
        cargarComentarios();
    }, []); // solo una vez al montar

    return (
        <section className="content-box">
            <section className="content-box-comentarios">
                <p>
                    Te invito a dejar un comentario sobre mi desempeño como compañero
                    y como estudiante.
                </p>

                <input
                    className="textoNombre"
                    type="text"
                    placeholder="Ingresa tu nombre... (opcional)"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <textarea
                    className="textoComentario"
                    placeholder="Aquí va tu comentario..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                ></textarea>

                <button className="botonAgregarComentario" onClick={manejarEnvio}>
                    Agregar comentario
                </button>
            </section>

            {/* LISTADO DE COMENTARIOS */}
            <section className="contenedorComentarios">
                <h2>Esto es lo que piensan de mí</h2>

                {listaComentarios.length === 0 ? (
                    <p>No hay comentarios aún.</p>
                ) : (
                    listaComentarios.map((c) => (
                        <div className="comentario" key={c.id}>
                            <h3>{c.nombre}</h3>
                            <p>{c.comentario}</p>
                            <small>
                                {new Date(c.fecha).toLocaleString("es-CR")}
                            </small>
                        </div>
                    ))
                )}
            </section>
        </section>
    );
}
