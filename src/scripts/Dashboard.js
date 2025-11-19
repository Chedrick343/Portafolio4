document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    hamburgerBtn.addEventListener("click", () => {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-260px";  
        } else {
            sidebar.style.left = "0px";      
        }
    });
});
