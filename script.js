document.getElementById('consulta-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const numeroInforme = document.getElementById('numero-informe').value.trim().toUpperCase();
    const seccionInforme = document.getElementById('seccion-informe').value.trim();
    const idInforme = document.getElementById('id-informe').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    // Simulación de datos existentes con múltiples imágenes
    const documentos = [
        { numero: 'IE', seccion: '24', id: '32898', imagenes: ['imagen01.jpg', 'imagen02.jpg', 'imagen03.jpg'] },
        { numero: 'IE', seccion: '25', id: '12345', imagenes: ['imagen04.jpg'] },
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

        // Generar carrusel con imágenes
        const imagenesHTML = documentoEncontrado.imagenes
            .map(imagen => `<img src="${imagen}" alt="Informe" style="max-width: 100%; height: auto; border: 1px solid #ced4da; border-radius: 8px; padding: 10px;">`)
            .join('');

        resultadoDiv.innerHTML = `
            <div style="display: flex; overflow-x: auto; gap: 10px;">
                ${imagenesHTML}
            </div>
        `;
    } else {
        resultadoDiv.className = 'resultado-container error';
        resultadoDiv.innerHTML = `
        <p><strong>Los códigos ingresados número de certificado y código de autenticidad son incorrectos.</strong></p>
        <p>Contacte con los siguientes correos:</p>
        <ul>
            <p><i class="fas fa-envelope"></i> mvalencia@alab.com.pe - Gerente General</p>
            <p><i class="fas fa-envelope"></i> comercial.coordinacion@alab.com.pe - Comercial Medio Ambiente</p>
            <p><i class="fas fa-envelope"></i> soporte@alab.com.pe - Jefe de Gestión de Calidad</p>
        </ul>
    `;
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
