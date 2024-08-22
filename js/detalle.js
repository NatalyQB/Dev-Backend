// Obtener el parámetro 'id' a la URL
const params = new URLSearchParams(window.location.search);
const deviceId = params.get('id');

// Datos de detalle
const dispositivos = [
    {   id:"1",
        nombre: "Sony Xperia 1 VI",
        marca: "Sony",
        fechaLanzamiento: "Junio 2024",
        descripcion: "El Xperia 1 VI se destaca por su pantalla 4K OLED de 6.5 pulgadas, el procesador Snapdragon 8 Gen 3, y su enfoque en capacidades de video y fotografía profesionales, incluyendo grabación en 8K y múltiples opciones de ajuste manual.",
        pantalla:"6.5 pulgadas OLED 4K, 3840 x 1644 píxeles",
        procesador: "Qualcomm Snapdragon 8 Gen 2",
        camaraPrincipal: "Triple (12 MP principal, 12 MP ultra gran angular, 12 MP telefoto)",
        bateria: "5000 mAh",
        almacenamiento: "256 GB, 512 GB (expandible con microSD)",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 13",
        imagen: "img/Sony Xperia 1 VI.jpg"
    },
    {   id:"2",
        nombre: "Huawei P60 Pro",
        marca: "Huawei",
        fechaLanzamiento: "Abril 2024",
        descripcion: "El P60 Pro ofrece una pantalla OLED de 6.67 pulgadas, el procesador Kirin 9000S, y un sistema de cámaras con un sensor principal de 50 MP, junto con capacidades avanzadas de fotografía en condiciones de baja luz y zoom óptico.",
        pantalla:"6.67 pulgadas OLED, 2700 x 1220 píxeles",
        procesador: "Qualcomm Snapdragon 8+ Gen 1 (sin 5G en algunos modelos)",
        camaraPrincipal: "Triple (50 MP principal, 50 MP ultra gran angular, 64 MP telefoto)",
        bateria: "4815 mAh",
        almacenamiento: "256 GB, 512 GB (no expandible)",
        memoriaRAM: "8 GB, 12 GB",
        sistemaOperativo: "HarmonyOS 4",
        imagen: "img/Huawei P60 Pro.jpg"
    },
    {   id:"3",
        nombre: "Oppo Find X6 Pro",
        marca: "Oppo",
        fechaLanzamiento: "Marzo 2024",
        descripcion:"El Find X6 Pro cuenta con una pantalla AMOLED de 6.82 pulgadas, el procesador Snapdragon 8 Gen 3, y un sistema de cámaras con una combinación de sensores de 50 MP, incluyendo un ultra gran angular y un teleobjetivo.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/Oppo Find X6 Pro.jpg"
    },
    {   id:"4",
        nombre: "Motorola Edge 40 Pro",
        marca: "Motorola",
        fechaLanzamiento: "Febrero 2024",
        descripcion:"El Edge 40 Pro ofrece una pantalla OLED de 6.67 pulgadas con alta tasa de refresco, el procesador Snapdragon 8 Gen 3, y un sistema de cámaras con un sensor principal de 50 MP, además de soporte para carga rápida y carga inalámbrica.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/Motorola Edge 40 Pro.jpg"
    },
    {   id:"5",
        nombre: "Samsung Galaxy S24 Ultra",
        marca: "Samsung",
        fechaLanzamiento: "Enero 2024",
        descripcion:"El Galaxy S24 Ultra cuenta con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas, el procesador Exynos 2400 o Snapdragon 8 Gen 3 (según región), cámaras de 200 MP y un zoom óptico mejorado, y soporte para S Pen integrado.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/Samsung Galaxy S24 Ultra.jpg"
    },
    {   id:"6",
        nombre: "OnePlus 12",
        marca: "OnePlus",
        fechaLanzamiento: "Diciembre 2023",
        descripcion:"El OnePlus 12 incluye una pantalla AMOLED de 6.7 pulgadas con alta tasa de refresco, el procesador Snapdragon 8 Gen 3, y un sistema de cámaras triple con mejoras en la fotografía nocturna y en el zoom.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/OnePlus 12.jpg"
    },
    {   id:"7",
        nombre: "Xiaomi 14 Pro",
        marca: "Xiaomi",
        fechaLanzamiento: "Noviembre 2023",
        descripcion:"El Xiaomi 14 Pro ofrece una pantalla AMOLED de 6.73 pulgadas, el procesador Snapdragon 8 Gen 3, y un sistema de cámaras con un sensor principal de 50 MP y capacidades avanzadas de IA para fotografía y video.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/Xiaomi 14 Pro.jpg"
    },
    {   id:"8",
        nombre: "Google Pixel 8 Pro",
        marca: "Google",
        fechaLanzamiento: "Octubre 2023",
        descripcion:"El Pixel 8 Pro presenta una pantalla LTPO OLED de 6.7 pulgadas, el nuevo chip Tensor G3, un sistema de cámaras avanzadas con nuevas capacidades de inteligencia artificial, y un diseño renovado con una estructura de aluminio reciclado.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
         imagen: "img/Google Pixel 8 Pro.jpg"
    },
    {   id:"9",
        nombre: "Apple iPhone 15 Pro Max",
        marca: "Apple",
        fechaLanzamiento: "Septiembre 2023",
        descripcion:"El iPhone 15 Pro Max ofrece una pantalla Super Retina XDR de 6.7 pulgadas, el chip A17 Pro, mejoras en el sistema de cámaras con un nuevo sensor de 48 MP, y un diseño en titanio para mayor durabilidad.",
        pantalla:"6.5 pulgadas 4K OLED, 120Hz",
        procesador: "Snapdragon 8 Gen 3",
        camaraPrincipal: "Triple, 12 MP (principal), 12 MP (ultra gran angular), 12 MP (teleobjetivo)",
        bateria: "5,000 mAh, carga rápida de 30W",
        almacenamiento: "256 GB / 512 GB",
        memoriaRAM: "12 GB",
        sistemaOperativo: "Android 14",
        imagen: "img/iPhone 15 Pro.jpg"
    }
];

// Encontrar el dispositivo respectivo
const dispositivo = dispositivos.find(d => d.id === deviceId);

// Mostrar los detalles
if (dispositivo) {
    const detalleDispositivo = document.getElementById('detalle-dispositivo');
    detalleDispositivo.innerHTML = `
    <div class="card1">
            <div class="card-body">
            <img src="${dispositivo.imagen}" alt="${dispositivo.nombre}" class="device-image">
            <h5 class="card-title">${dispositivo.nombre}</h5>
            <p class="card-text"><strong>Marca:</strong> ${dispositivo.marca}</p>
            <p class="card-text"><strong>Fecha de Lanzamiento:</strong> ${dispositivo.fechaLanzamiento}</p>
            <p class="card-text"><strong>Descripción: </strong>${dispositivo.descripcion}</p>
        </div>
    </div>
    <div class="card2">
        <div class="card-body">
            <p class="card-text"><strong>Pantalla:</strong> ${dispositivo.pantalla}</p>
            <p class="card-text"><strong>Procesador:</strong> ${dispositivo.procesador}</p>
            <p class="card-text"><strong>Cámara Principal:</strong> ${dispositivo.camaraPrincipal}</p>
            <p class="card-text"><strong>Bateria:</strong> ${dispositivo.bateria}</p>
            <p class="card-text"><strong>Almacenamiento:</strong> ${dispositivo.almacenamiento}</p>
            <p class="card-text"><strong>Memoria RAM:</strong> ${dispositivo.memoriaRAM}</p>
            <p class="card-text"><strong>Sistema Operativo:</strong> ${dispositivo.sistemaOperativo}</p>
        </div>
    </div>
`;
} else {
    // Accion si no se encuentra el dispositivo relacionado
    document.getElementById('detalle-dispositivo').innerHTML = '<p>Dispositivo no encontrado</p>';
};

// Función para mostrar los comentarios
function mostrarComentarios() {
    const listaComentarios = document.getElementById('lista-comentarios');
    listaComentarios.innerHTML = '';

    comentarios.forEach(com => {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.innerHTML = `<strong>${com.nombre}:</strong> ${com.comentario}`;
        listaComentarios.appendChild(item);
    });
}

// Función para agregar un nuevo comentario
document.getElementById('form-comentario').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    if (nombre && comentario) {
        comentarios.push({ nombre, comentario });
        mostrarComentarios();

        // Limpiar el formulario
        document.getElementById('form-comentario').reset();
    }
});

// Mostrar los comentarios al cargar la página
mostrarComentarios();
