document.getElementById('consulta-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const numeroInforme = document.getElementById('numero-informe').value.trim();
    const seccionInforme = document.getElementById('seccion-informe').value.trim();
    const idInforme = document.getElementById('id-informe').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    // Simulación de datos existentes
    const documentos = [
        { numero: 'IE', seccion: '24', id: '4999', imagen: 'imagen01.png' },
        { numero: 'IE', seccion: '25', id: '5000', imagen: 'imagen02.png' },
    ];

    // Buscar documento
    const documentoEncontrado = documentos.find(doc =>
        doc.numero === numeroInforme &&
        doc.seccion === seccionInforme &&
        doc.id === idInforme
    );

    // Mostrar resultado
    resultadoDiv.style.display = 'block';
    if (documentoEncontrado) {
        resultadoDiv.className = 'resultado-container success';
        resultadoDiv.innerHTML = `
            <img src="${documentoEncontrado.imagen}" alt="Informe" style="max-width: 100%; height: auto; border: 1px solid #ced4da; border-radius: 8px; padding: 10px;">
        `;
    } else {
        resultadoDiv.className = 'resultado-container error';
        resultadoDiv.innerHTML = `<p>No se encontró ningún documento con los datos ingresados.</p>`;
    }
});


function mostrarError(mensaje) {
    const errorElement = document.getElementById('mensaje-error');
    errorElement.textContent = mensaje;
}

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Activar/desactivar menú
});
