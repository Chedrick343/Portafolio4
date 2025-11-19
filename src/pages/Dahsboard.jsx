import { useEffect } from "react";
import "../styles/Dashboard.component.css";

export function Dashboard() {

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        const hamburgerBtn = document.getElementById("hamburgerBtn");

        const isMobile = () => window.innerWidth < 768;

        const toggleMenu = () => {
            if (!isMobile()) return; // No aplicar en desktop

            if (sidebar.style.left === "0px") {
                sidebar.style.left = "-260px";
            } else {
                sidebar.style.left = "0px";
            }
        };

        const closeMenu = (e) => {
            if (!isMobile()) return; // No cerrar menú en desktop

            const clickedInsideSidebar = sidebar.contains(e.target);
            const clickedHamburger = hamburgerBtn.contains(e.target);

            if (!clickedInsideSidebar && !clickedHamburger) {
                sidebar.style.left = "-260px";
            }
        };

        hamburgerBtn.addEventListener("click", toggleMenu);
        document.addEventListener("click", closeMenu);

        // Recalcular cuando cambia el tamaño de la ventana
        const handleResize = () => {
            if (!isMobile()) {
                sidebar.style.left = "0px"; // Asegurar que sidebar esté visible en desktop
            }
        };

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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Tratamientos</a></li>
                        <li><a href="#">Reportes</a></li>
                        <li><a href="#">Ajustes</a></li>
                    </ul>
                </nav>

                <section className="dashboard-content">
                    <section className="content-box">
                        <h2>Bienvenido</h2>
                        <p>Aquí irá el contenido dinámico.</p>
                    </section>
                </section>

            </section>
        </section>
    );
}
