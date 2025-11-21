import SHUTEC1 from "../images/SHUTEC1.jpg"
import SHUTEC2 from "../images/SHUTEC2.jpg"
import HACKATON1 from "../images/HACKATON1.jpeg"
import VOLUNTEC1 from "../images/VOLUNTEC.png"
export function Extracurricular(){
    return(
        <section className="content-box">
            <h2>Actividades Extracurriculares</h2>
            <ul>
                <li className="elementoListaExtracurricular">SHU+TEC</li>
                <p className="textoListaExtracurricular">Evento en el que se reunen estudiantes del Tecnológico de Costa Rica y de la universidad Sacred Heart de EEUU para ser parte de un voluntariado en la reserva biológica Veragua Rain Forest. Una actividad enriquesedora a nivel cultural y también a nivel de habilidades blandas, como la practica del idioma inglés</p>
                <img className="shutec1" src={SHUTEC1} alt="Grupo de personas voluntarias de veragua temporada 2024" />
                <img className="shutec2" src={SHUTEC2} alt="Estudiante comparando su mano con un gecko" />
                <li className="elementoListaExtracurricular">Hackaton</li>
                <p className="textoListaExtracurricular">Concurso interno del Centro académico de Limón, donde los estudiantes desarrollamos el pensamiento lógico y la capacidad de buscar soluciones óptimas a problemas presentados. Es una actividad de la que me gusta participar ya que probamos nuestras habilidades.</p>
                <img className="hackaton1" src={HACKATON1} alt="Participantes de la HACKATON 2.0 del 2025" />
                <li className="elementoListaExtracurricular">Voluntec (GASEL)</li>
                <p className="textoListaExtracurricular">El cuidado del medio ambiente es algo que nos interesa a todos, por eso siempre que puedo participo de actividades como la que se llevó a cabo el 2 de agosto del 2022 para la recolección de basura de parte de la carrera de Gestión Ambiental</p>
                <img src={VOLUNTEC1} alt="Voluntec x gestionAmbiental, limpieza 2 de agosto de 2022" className="voluntec1" />

            </ul>
        </section>
    )
}