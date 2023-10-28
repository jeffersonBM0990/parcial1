document.addEventListener("DOMContentLoaded", function () {
    const servicesSection2 = document.querySelector(".services-section-2");
    const collaboratorsSection = document.querySelector(".collaborators-section");
    const verMasButton = document.getElementById("ver-mas-button");

    // Función para mostrar las secciones y ocultar el botón
    function mostrarSecciones() {
        servicesSection2.style.display = "block";
        collaboratorsSection.style.display = "block";
        verMasButton.style.display = "none"; // Oculta el botón "Ver más"
    }

    // Función para mostrar el modal de confirmación
    function mostrarModal() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <p>¿Está seguro que desea ver las demás secciones?</p>
            <button id="confirmar-button">Aceptar</button>
            <button id="cancelar-button">Cancelar</button>
        `;
        document.body.appendChild(modal);

        const confirmarButton = document.getElementById("confirmar-button");
        const cancelarButton = document.getElementById("cancelar-button");

        // Al hacer clic en "Aceptar", mostrar las secciones y ocultar el modal
        confirmarButton.addEventListener("click", function () {
            mostrarSecciones();
            modal.remove();
        });

        // Al hacer clic en "Cancelar", ocultar el modal
        cancelarButton.addEventListener("click", function () {
            modal.remove();
        });
    }

    // Al hacer clic en el botón "Ver más", mostrar el modal de confirmación
    verMasButton.addEventListener("click", function () {
        mostrarModal();
    });
});
