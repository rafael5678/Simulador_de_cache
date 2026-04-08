const fs = require('fs');

// Simulación de caché en RAM
const cache = {};

// Función para leer archivo con caché
function leerArchivo(ruta) {
    if (cache[ruta]) {
        console.log("📦 Leyendo desde CACHE (RAM)");
        return cache[ruta];
    }

    console.log("💾 Leyendo desde DISCO");
    const data = fs.readFileSync(ruta, 'utf8');

    // Guardar en caché
    cache[ruta] = data;

    return data;
}

// Prueba
const archivo = 'archivo_grande.txt';

// Primera lectura (DISCO)
console.time("Primera lectura");
leerArchivo(archivo);
console.timeEnd("Primera lectura");

// Segunda lectura (CACHE)
console.time("Segunda lectura");
leerArchivo(archivo);
console.timeEnd("Segunda lectura");