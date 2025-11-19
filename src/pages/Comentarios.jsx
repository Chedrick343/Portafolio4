import "../styles/Dashboard.component.css"
export function Comentarios(){
    return(
        <section className="content-box">
            <section className="content-box-comentarios">
                <p>Te invito a dejar un comentario sobre mi desempeño como compañero de trabajo y como estudiante en general, eso me ayudaría mucho</p>
                <input className="textoNombre" type="text" placeholder="Ingresa tu nombre...(opcional)" />
                <textarea className="textoComentario" name="" placeholder="Aquí va tu comentario..."></textarea>
                <button className="botonAgregarComentario">Agregar comentario</button>
            </section>
            <section className="contenedorComentarios">
                <h2>Esto es lo que piensan de mi</h2>
                <div className="comentario">
                    <h2>Anonimo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatum! Natus, rerum eos corporis exercitationem deleniti, sapiente nesciunt porro nostrum quia ut reprehenderit sed architecto animi odit nemo quaerat. Quidem?</p>
                </div>
                
            </section>

        </section>
    );
};