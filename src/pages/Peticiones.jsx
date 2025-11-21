import { useState } from "react";
import { supabase } from "../lib/supabase";
import "../styles/Dashboard.component.css";

export function Peticiones() {
    const [nombreEmpr, setNombreEmpr] = useState("");
    const [asunto, setAsunto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [contacto, setContacto] = useState("");
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = async () => {
        if (!nombreEmpr.trim() || !asunto.trim() || !descripcion.trim()) {
            alert("Por favor complete todos los campos obligatorios.");
            return;
        }

        const { error } = await supabase
            .from("peticiones")
            .insert({
                nombreEmpr,
                asunto,
                descripcion,
                contacto: contacto || null,
            });

        if (error) {
            console.error("ERROR INSERTANDO:", error);
            alert("No se pudo enviar la petición. Revise la consola.");
            return;
        }

        // Limpiar formulario
        setNombreEmpr("");
        setAsunto("");
        setDescripcion("");
        setContacto("");
        setEnviado(true);

        setTimeout(() => setEnviado(false), 3000);
    };

    return (
        <section className="content-box">
            <h2>Enviar petición profesional</h2>
            <p>Si deseas contactarme por trabajo, proyecto o colaboración, completa el formulario. Estaré encantado de contactarte tan pronto sea posible.</p>

            <input
                className="textoNombre"
                type="text"
                placeholder="Nombre o Empresa *"
                value={nombreEmpr}
                onChange={(e) => setNombreEmpr(e.target.value)}
            />
            
            <input
                className="textoNombre"
                type="text"
                placeholder="Asunto *"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
            />

            <textarea
                className="textoComentario"
                placeholder="Descripción detallada de la petición *"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>

            <input
                className="textoNombre"
                type="text"
                placeholder="Contacto (correo, teléfono, link)"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
            />

            <button className="botonAgregarComentario" onClick={manejarEnvio}>
                Enviar petición
            </button>

            {enviado && <p className="mensajeExito">¡Petición enviada con éxito!</p>}
        </section>
    );
}
