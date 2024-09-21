import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Directorio de entrada
const inputDir = './src/assets';

// Función recursiva para procesar cada archivo en el directorio
const convertImagesToWebp = (directory) => {
    fs.readdirSync(directory).forEach((file) => {
        const filePath = path.join(directory, file);

        // Verifica si es un directorio o archivo
        if (fs.statSync(filePath).isDirectory()) {
            // Si es un directorio, se llama a la función recursivamente
            convertImagesToWebp(filePath);
        } else {
            // Solo procesa archivos PNG y JPG
            if (/\.(png|jpg|jpeg)$/i.test(file)) {
                const outputDir = path.join(directory);

                // Crea el directorio de salida si no existe
                if (!fs.existsSync(outputDir)) {
                    fs.mkdirSync(outputDir, { recursive: true });
                }

                const outputFilePath = path.join(outputDir, file.replace(/\.[^/.]+$/, '.webp'));

                // Convierte la imagen a WebP
                sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(outputFilePath)
                    .then(info => {
                        console.log(`Converted ${file} to WebP`, info);
                    })
                    .catch(err => {
                        console.error(`Error converting ${file}:`, err);
                    });
            }
        }
    });
};

// Ejecutar la conversión
convertImagesToWebp(inputDir);
