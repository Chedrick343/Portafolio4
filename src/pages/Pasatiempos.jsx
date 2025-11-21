import "../styles/Dashboard.component.css"
import VOLEIBOL1 from "../images/VOLEIBOL1.png"
import APEXLOGO from "../images/APEXLOGO.png"
import VALORANTLOGO from "../images/VALORANTLOGO.webp"
import MINECRAFTLOGO from "../images/MINECRAFTLOGO.png"
export function Pasatiempos(){

    return(
        <section className="">
            <h2>Mis Pasatiempos</h2>
            <p className="textoPasatiempo">En mis tiempos libres es muy importante para mi recrearme y ejercitar mi cuerpo, es por eso que soy participe de varias actividades deportivas cuando se me presenta la oportunidad, porque además de disfrutarlas me mantienen saludable tanto de cuerpo como de mente para así dar el mejor rendimiento en mis tareas diarias.</p>
            <ul>
                <li><h3 className="tituloPasatiempo">Jugador de voleibol</h3></li>
                <p className="textoPasatiempo">En ocasiones, nos reunimos en un grupo para jugar voleibol, solemos participar varios compañeros universtarios y yo</p>
                <img src={VOLEIBOL1} alt="partido de voleibol de eliminatorias juegos nacionales 2024" className="voleibol1" />
                <li><h3 className="tituloPasatiempo">Futbol 5</h3></li>
                <p className="textoPasatiempo">Tanto profesores como estudiantes nos coordinamos para alquilar una cancha sintética y disfrutar fuera de las aulas</p>
                <li><h3 className="tituloPasatiempo">Videojuegos</h3></li>
                <p className="textoPasatiempo">Actualmente los videojuegos son uno de los principales pasatiempos de las personas, siempre que se consuman con moderación son un gran elemento útil para el desestrés. <br />Algunos de los títulos que disfruto jugar son</p>
                <section className="seccionJuegos">
                    <ol>
                        <li className="elementoDeListaJuegos">Valorant</li>
                        <p className="textoPasatiempo">Diferentes modos de juego, el más destacado es "search and destroy"</p>
                        <img src={VALORANTLOGO} alt="logo de valorant" className="logoJuego" />
                        <li className="elementoDeListaJuegos">Apex Legends</li>
                        <p className="textoPasatiempo">Battle royale donde cada leyenda(personaje) tiene habilidades únicas</p>
                        <img src={APEXLOGO} alt="logo de apex legends" className="logoJuego"/>
                        <li className="elementoDeListaJuegos">Minecraft</li>
                        <p className="textoPasatiempo">Juego de mundo abierto donde se puede construir casi cualquier cosa</p>
                        <img src={MINECRAFTLOGO} alt="logo de Minecraft" className="logoJuego" />
                    </ol>
                </section>

            </ul>
        </section>
    )
}