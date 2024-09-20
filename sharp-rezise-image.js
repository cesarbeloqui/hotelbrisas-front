/* 
Este script facilita el redimensionamiento de imágenes en React. 
Toma una imagen en su ruta específica y la redimensiona con los anchos obtenidos del análisis de RespImageLint.
Para ejecutar el siguiente script es necesario instalar las siguientes dependencias:

- pnpm install sharp --save-dev

Luego agregar en tu package.json el siguiente script:

"scripts": {
    "sharp": "node sharp.js"
  },
*/

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { addObjectToJsonFile } from "./diccionarioDeImagenes.js";

// Ingrese aquí el resultado que le dio RespImageLint
const input = '256×384, 730×1095, 970×1455, 1160×1740, 1320×1980, 1470×2205';
const sizes = "(min-width: 780px) calc(25vw - 16px), calc(100vw - 64px)"
// Ingrese aquí la ruta del archivo de imagen que deseas redimensionar
const inputImagePath = 'src/assets/historia/historia-1.jpg';  // Cambia este valor por la ruta de la imagen específica
function getDirectory(filePath) {
    return path.dirname(filePath);
}
const directory = getDirectory(inputImagePath);

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

    return { widths, dimensions };
}

// Para obtener el equivalente de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de anchos a los que deseas redimensionar las imágenes
const widths = extractWidths(input).widths;
const dimensions = extractWidths(input).dimensions;

// Ruta a la carpeta de salida donde guardarás las imágenes redimensionadas
const outputFolder = path.join(__dirname, directory);

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Función para redimensionar una imagen a diferentes anchos y guardarla en una carpeta
const resizeImage = (inputPath, fileName) => {
    // Obtén el nombre del archivo sin extensión
    const baseName = path.parse(fileName).name;
    console.log("fileName: ", typeof fileName)
    console.log("dimensions: ", dimensions)
    addObjectToJsonFile(fileName, dimensions, sizes)
    const imageFolder = path.join(outputFolder, baseName);

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

// Redimensiona la imagen especificada
resizeImage(inputImagePath, path.basename(inputImagePath));
