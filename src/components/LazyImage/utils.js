
export function removeLastPartAndExtractFileName(filePath) {
    // Divide el string por las barras
    const parts = filePath.split('/');

    // Obtiene el último elemento (que es el archivo con su extensión)
    const fileWithExtension = parts.pop();

    // Extrae el nombre del archivo sin la extensión
    const fileName = fileWithExtension.split('.').slice(0, -1).join('.');

    // Une los elementos restantes con una barra, pero sin barra al inicio ni al final
    const directory = parts.filter(part => part !== "").join('/');

    // Retorna el nuevo path sin el archivo y el nombre del archivo sin la extensión
    return { directory, fileName, fileWithExtension };
}

// Ejemplo de uso
/* const filePath = '/src/assets/carrusel/7.jpg';
const result = removeLastPartAndExtractFileName(filePath);

console.log(result.directory); // 'src/assets/carrusel'
console.log(result.fileName);  // '7' */

/* export const getFilesFromDirectory = (directoryPath) => {
    try {
        // Lee todos los archivos y carpetas en el directorio dado
        const files = fs.readdirSync(directoryPath);

        // Filtra solo los archivos (excluyendo las carpetas)
        const fileNames = files.filter(file => {
            const filePath = path.join(directoryPath, file);
            return fs.statSync(filePath).isFile();
        });

        return fileNames;
    } catch (err) {
        console.error(`Error al leer el directorio: ${err.message}`);
        return [];
    }
} */
/* 
// Ejemplo de uso
const directoryPath = 'src/assets/carrusel';
const fileNames = getFilesFromDirectory(directoryPath);

console.log(fileNames); // Array con los nombres de los archivos
*/