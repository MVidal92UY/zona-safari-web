document.addEventListener("DOMContentLoaded", function () {
	fetch('../js/datos-cartas.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
    })
    .then(data => {
	const tbody = document.querySelector('#tabla-cartas tbody');
    if (tbody) {
        data.forEach(carta => {
        const fila = `
            <tr>
            <td>${carta.entrenador}</td>
            <td>${carta.idioma}</td>
            <td>${carta.estado}</td>
            <td>${carta.departamento}</td>
            <td>${carta.precio}</td>
            <td>${carta.venta}</td>
            <td>${carta.canje}</td>
            <td>${carta.ofertas}</td>
            <td>${carta.comprar}</td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', fila);
        });
    } else {
        console.error('No se encontró el tbody');
    }
    })
    .catch(error => console.error('Error cargando datos:', error));
});