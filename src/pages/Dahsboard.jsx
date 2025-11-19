import { useEffect, useState } from "react";
import "../styles/Dashboard.component.css";
import { PaginaPrincipal } from "./PaginaPrincipal";

export function Dashboard() {

    const [elementoRenderizado, setElementoRenderizado] = useState(<PaginaPrincipal/>);

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        const hamburgerBtn = document.getElementById("hamburgerBtn");

        const isMobile = () => window.innerWidth < 768;

        const toggleMenu = () => {
            if (!isMobile()) return;

            sidebar.style.left = sidebar.style.left === "0px" ? "-260px" : "0px";
        };

        const closeMenu = (e) => {
            if (!isMobile()) return;

            const clickedInsideSidebar = sidebar.contains(e.target);
            const clickedHamburger = hamburgerBtn.contains(e.target);

            if (!clickedInsideSidebar && !clickedHamburger) {
                sidebar.style.left = "-260px";
            }
        };

        const handleResize = () => {
            if (!isMobile()) sidebar.style.left = "0px";
        };

        hamburgerBtn.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu);
        window.addEventListener("resize", handleResize);

        return () => {
            hamburgerBtn.removeEventListener("click", toggleMenu);
            document.removeEventListener("click", closeMenu);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="dashboard">

            <header className="dashboard-header">
                <button id="hamburgerBtn" className="hamburger">
                    ☰
                </button>
                <h1 className="dashboard-title">Administrador profesional</h1>
            </header>

            <section className="dashboard-container">

                <nav id="sidebar" className="sidebar">
                    <ul>
                        <li><button onClick={() => setElementoRenderizado(<PaginaPrincipal />)}>Inicio</button></li>
                        <li><button>Cursos</button></li>
                        <li><button>Comentarios</button></li>
                        <li><button>Información profesional</button></li>
                        <li><button>Comentarios</button></li>
                    </ul>
                </nav>

                <section className="dashboard-content">
                    <section className="content-box">

                        {elementoRenderizado ? (
                            elementoRenderizado
                        ) : (
                            <>
                                <h2>Bienvenido</h2>
                                <p>Aquí irá el contenido dinámico.</p>
                            </>
                        )}

                    </section>
                </section>

            </section>
        </section>
    );
}
