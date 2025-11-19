import "../styles/Dashboard.component.css"

export function PaginaPrincipal(){
    return(
        <section className="content-box" id="informacionPersonal">
            <h2>Chedrick Uzaga</h2>
            <img className="imagenPersonal" src="/src/images/imagen-personal.png" alt="Fotografia del desarrollador con brazos cruzados "></img>
            <p className="textoPresentacion">Hola, soy estudiante del <a href="https://www.tec.ac.cr/" target="_blank" rel="noopener noreferrer">Tecnológico de Costa Rica </a>y estoy desarrollando este pequenio sitio web como portafolio #1 del curso de introduccion al desarrollo de paginas web. Mis expectativas con este curso son poder aprender la mayoria de cosas que ahora se requieren para ser un desarrollador de alta calidad y un dia poder ser un completo profesional en el desarrollo web. Agradezco que visiten mi sitio web y espero les sea agradable. Este portafolio está siendo desarrollado para implementar todos aquellos aprendizajes adquiridos a lo largo del curso y además será una herramienta que nos ayude en el futuro.</p>

        </section>
    )

}