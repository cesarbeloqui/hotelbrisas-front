/* 
Este script facilita el redimencionamiento de imagenes en react, toma las imagenes en su assets las redimenciona con el resultado de RespImageLint
Para ejecutar el siguiente script es necesario instalar las siguientes dependencias:

-       pnpm install sharp --save-dev

Luego pegar en su package.json el siguiente script:

"scripts": {
    "sharp": "node sharp.js"
  },
*/

// Ingrese aqui el resultado que le dio RespImageLint
const input = '295×197, 1060×706, 1460×973, 1780×1186, 2048×1364';
const carpeta = 'src/assets/carrusel'



import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';


function extractWidths(inputString) {
    // Inicializa el array donde se almacenarán los valores
    const widths = [];

    // Divide el string por comas para obtener cada par de dimensiones
    const dimensions = inputString.split(', ');

    // Recorre cada par de dimensiones
    dimensions.forEach(dimension => {
        // Divide cada dimensión por el símbolo '×' y toma el primer valor (el ancho)
        const width = dimension.split('×')[0];

        // Pushea el valor en el array (convirtiéndolo a número, si es necesario)
        widths.push(parseInt(width, 10)); // Usa parseInt para convertir a número
    });

    return widths;
}




// Para obtener el equivalente de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la carpeta de imágenes que deseas redimensionar
const inputFolder = path.join(__dirname, carpeta);
/* const inputFolder = path.join(__dirname, 'src/assets/resized-images'); */

// Lista de anchos a los que deseas redimensionar las imágenes
const widths = extractWidths(input);

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(inputFolder)) {
    fs.mkdirSync(inputFolder);
}

// Función para redimensionar una imagen a diferentes anchos y guardarla en carpetas con el nombre de la imagen
const resizeImage = (inputPath, fileName) => {
    // Obtén el nombre del archivo sin extensión
    const baseName = path.parse(fileName).name;
    const imageFolder = path.join(inputFolder, baseName);

    // Crea la carpeta con el nombre de la imagen si no existe
    if (!fs.existsSync(imageFolder)) {
        fs.mkdirSync(imageFolder);
    }

    // Redimensiona la imagen a cada uno de los anchos en la lista
    widths.forEach(width => {
        const outputPath = path.join(imageFolder, `${width}.jpg`);
        sharp(inputPath)
            .resize(width) // Redimensiona la imagen al ancho especificado
            .toFile(outputPath)
            .then(() => {
                console.log(`Imagen redimensionada: ${outputPath}`);
            })
            .catch(err => {
                console.error(`Error al redimensionar la imagen ${inputPath} a ${width}px:`, err);
            });
    });
};

// Lee todos los archivos de la carpeta de imágenes
fs.readdir(inputFolder, (err, files) => {
    if (err) {
        console.error('No se pudo leer la carpeta de imágenes:', err);
        return;
    }

    // Filtra solo las imágenes (por ejemplo, archivos .jpg y .png)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));

    imageFiles.forEach(file => {
        const inputPath = path.join(inputFolder, file);

        // Redimensiona cada imagen y guarda los resultados
        resizeImage(inputPath, file);
    });
});
