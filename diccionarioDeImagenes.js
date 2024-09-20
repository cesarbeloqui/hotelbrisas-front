import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function addObjectToJsonFile(baseName, dimensions, sizes) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(`${__dirname}/src`, 'rize.json');

    // Intenta leer el archivo existente
    let existingData = {};

    // Verifica si el archivo ya existe
    if (fs.existsSync(filePath)) {
        // Si existe, lee su contenido
        const data = fs.readFileSync(filePath, 'utf-8');
        existingData = JSON.parse(data);
    }

    // Agrega el nuevo objeto a los datos existentes
    existingData[baseName] = { dimensions, sizes }; // Guarda baseName como clave y dimensions como valor

    // Escribe el objeto actualizado en el archivo
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
    console.log('Datos actualizados en rize.json');
}

