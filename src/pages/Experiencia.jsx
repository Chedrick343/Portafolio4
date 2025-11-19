import "../styles/Dashboard.component.css";
import data from "../data/informacionProfesional.json";
import imagenPersonal from "../images/imagen-personal.png";
import { jsPDF } from "jspdf";

export function Experiencia() {

    const handleDescargarPdf = () => {
        const doc = new jsPDF();

        const img = new Image();
        img.src = imagenPersonal;  // 👈 importado correctamente

        img.onload = () => {
            // Foto
            doc.addImage(img, "JPEG", 15, 10, 40, 40);

            // Nombre
            doc.setFontSize(16);
            doc.text(data.nombre, 70, 20);

            // Biografía
            doc.setFontSize(12);
            doc.text("Biografía:", 15, 60);
            doc.text(doc.splitTextToSize(data.biografia, 180), 15, 70);

            // Habilidades
            doc.text("Habilidades:", 15, 100);
            let y = 110;

            for (let categoria in data.habilidades) {
                doc.text(`${categoria}:`, 20, y);
                y += 6;

                data.habilidades[categoria].forEach(hab => {
                    let texto = hab.nombre
                        ? `${hab.nombre} (${hab.nivel}%)`
                        : hab;
                    doc.text(`- ${texto}`, 30, y);
                    y += 6;
                });
            }

            // Certificaciones
            doc.text("Certificaciones:", 15, y + 10);
            y += 16;
            data.certificaciones.forEach(cert => {
                doc.text(`- ${cert.titulo} - ${cert.entidad}`, 20, y);
                y += 6;
            });

            // Redes
            doc.text("Redes:", 15, y + 10);
            y += 16;
            for (let red in data.redes) {
                doc.text(`${red}: ${data.redes[red]}`, 20, y);
                y += 6;
            }

            // Info adicional
            doc.text("Información adicional:", 15, y + 10);
            y += 16;
            data.informacionAdicional.forEach(info => {
                doc.text(`- ${info}`, 20, y);
                y += 6;
            });

            // Guardar el PDF COMPLETO
            doc.save("perfil.pdf");
        };
    };

    return (
        <section id="trayectoriaPersonal">
            <h2>Mi trayectoria como profesional</h2>

            <img
                className="imagenPersonal"
                src={imagenPersonal}
                alt="Fotografía"
            />

            <div id="informacionPersonal">
                <h2 id="nombre">{data.nombre}</h2>
                <p id="biografia">{data.biografia}</p>
            </div>

            <div id="habilidadesTecnicas">
                <h2 style={{ color: "Black" }}>Habilidades Técnicas</h2>

                {Object.entries(data.habilidades).map(([categoria, lista]) => (
                    <div key={categoria} style={{ marginBottom: "1rem" }}>
                        <h3 style={{ color: "#6186ffff" }}>{categoria}</h3>
                        {lista.map((habilidad) => (
                            <div key={habilidad.nombre} style={{ marginBottom: "10px" }}>
                                <span style={{ color: "Black" }}>{habilidad.nombre}</span>
                                <div
                                    style={{
                                        width: "300px",
                                        height: "20px",
                                        backgroundColor: "#333",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "5px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${habilidad.nivel}%`,
                                            height: "100%",
                                            backgroundColor: "#5599ffff",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div id="certificaciones">
                <h2 style={{ color: "Black" }}>Certificaciones</h2>
                <ul>
                    {data.certificaciones.map((cert) => (
                        <li key={cert.titulo}>
                            {cert.titulo} - {cert.entidad}{" "}
                            (<a href={cert.url} target="_blank">Ver</a>)
                        </li>
                    ))}
                </ul>
            </div>

            <div id="infoAdicional">
                <h2 style={{ color: "Black" }}>Información Adicional</h2>
                <ul>
                    {data.informacionAdicional.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div id="redes">
                <h2 style={{ color: "Black" }}>Redes</h2>
                {Object.entries(data.redes).map(([nombre, url]) => (
                    <span key={nombre}>
                        <a href={url} target="_blank">{nombre}</a> {" | "}
                    </span>
                ))}
            </div>

            <button onClick={handleDescargarPdf}>Descargar PDF</button>
        </section>
    );
}
