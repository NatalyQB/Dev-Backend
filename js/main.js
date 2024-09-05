// Datos de dispositivos
const dispositivos = [
    {   id:"1",
        nombre: "Sony Xperia 1 VI",
        marca: "Sony",
        tipo: "Móviles",
        fechaLanzamiento: "Junio 2024",
        imagen: "img/Sony Xperia 1 VI.jpg"
    },
    {   id:"2",
        nombre: "Huawei P60 Pro",
        marca: "Huawei",
        tipo: "Móviles",
        fechaLanzamiento: "Abril 2024",
        imagen: "img/Huawei P60 Pro.jpg"
    },
    {   id:"3",
        nombre: "Oppo Find X6 Pro",
        marca: "Oppo",
        tipo: "Móviles",
        fechaLanzamiento: "Marzo 2024",
        imagen: "img/Oppo Find X6 Pro.jpg"
    },
    {   id:"4",
        nombre: "Motorola Edge 40 Pro",
        marca: "Motorola",
        tipo: "Móviles",
        fechaLanzamiento: "Febrero 2024",
        imagen: "img/Motorola Edge 40 Pro.jpg"
    },
    {   id:"5",
        nombre: "Samsung Galaxy S24 Ultra",
        marca: "Samsung",
        tipo: "Móviles",
        fechaLanzamiento: "Enero 2024",
        imagen: "img/Samsung Galaxy S24 Ultra.jpg"
    },
    {   id:"6",
        nombre: "OnePlus 12",
        marca: "OnePlus",
        tipo: "Móviles",
        fechaLanzamiento: "Diciembre 2023",
        imagen: "img/OnePlus 12.jpg"
    },
    {   id:"7",
        nombre: "Xiaomi 14 Pro",
        marca: "Xiaomi",
        tipo: "Móviles",
        fechaLanzamiento: "Noviembre 2023",
        imagen: "img/Xiaomi 14 Pro.jpg"
    },
    {   id:"8",
        nombre: "Google Pixel 8 Pro",
        marca: "Google",
        tipo: "Móviles",
        fechaLanzamiento: "Octubre 2023",
        imagen: "img/Google Pixel 8 Pro.jpg"
    },
    {   id:"9",
        nombre: "Apple iPhone 15 Pro Max",
        marca: "Apple",
        tipo: "Móviles",
        fechaLanzamiento: "Septiembre 2023",
        imagen: "img/iPhone 15 Pro.jpg"
    }
];


// Función para mostrar dispositivos
function mostrarDispositivos(lista) {
    const listaDispositivos = document.getElementById('device-list');
    listaDispositivos.innerHTML = '';

    lista.forEach(dispositivo => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('col-md-4', 'mb-4');
        tarjeta.innerHTML = `
            <div class="card">
                <img src="${dispositivo.imagen}" class="card-img-top" alt="${dispositivo.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${dispositivo.nombre}</h5>
                    <p class="card-text">Marca: ${dispositivo.marca}</p>
                    <p class="card-text">Tipo: ${dispositivo.tipo}</p>
                    <p class="card-text">Fecha de Lanzamiento: ${dispositivo.fechaLanzamiento}</p>
                    <a href="detalle.html?id=${dispositivo.id}" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        `;
        listaDispositivos.appendChild(tarjeta);
    });
}

// Inicializar con todos los dispositivos
mostrarDispositivos(dispositivos);

// Array para almacenar usuarios
const usuarios = [];

// Función para mostrar usuarios en la tabla
function mostrarUsuarios() {
    const tablaUsuarios = document.getElementById('tabla-usuarios').getElementsByTagName('tbody')[0];
    tablaUsuarios.innerHTML = '';

    usuarios.forEach(usuario => {
        const fila = tablaUsuarios.insertRow();
        const celdaUsuario = fila.insertCell(0);
        const celdaPassword = fila.insertCell(1);

        celdaUsuario.textContent = usuario.usuario;
        celdaPassword.textContent = usuario.password;
    });
}

// envío del formulario de registro
document.addEventListener('DOMContentLoaded', function () {
    const formRegistro = document.getElementById('form-registro');
    const tablaUsuarios = document.querySelector('#tabla-usuarios tbody');

    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        // Crear nueva fila para la tabla
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${usuario}</td>
            <td>${password}</td>
        `;

        // Añadir la fila a la tabla
        tablaUsuarios.appendChild(nuevaFila);

        // Limpiar el formulario después de registrar
        formRegistro.reset();
    });
});

// Inicializar la vista de la tabla
mostrarUsuarios();

