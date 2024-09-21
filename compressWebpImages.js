
import webp from 'webp-converter';
import fs from 'fs';
import path from 'path';
// Carpeta principal de las imágenes
const assetsDir = './src/assets';

// Función para comprimir imágenes WebP y reemplazar el archivo original
const compressWebpImages = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);

        // Si es una carpeta, llamamos a la función de forma recursiva
        if (fs.lstatSync(filePath).isDirectory()) {
            compressWebpImages(filePath);
        }
        // Si es un archivo .webp, lo comprimimos
        else if (path.extname(filePath) === '.webp') {
            console.log(`Comprimiendo ${filePath}...`);

            // Reemplaza el archivo original con la versión comprimida
            webp.cwebp(filePath, `${filePath}-compressed.webp`, "-q 80", (status, error) => {
                if (status === '100') {
                    console.log(`${filePath} comprimido con éxito`);
                } else {
                    console.error(`Error al comprimir ${filePath}: ${error}`);
                }
            });
        }
    });
};

// Ejecuta la compresión de imágenes en la carpeta 'assets'
compressWebpImages(assetsDir);