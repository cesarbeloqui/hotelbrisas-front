import fs from 'fs';
import path from 'path';

const dirPath = './src/assets'; // Cambia esto a tu directorio

function deleteWebpFolders(dir) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error(`Error al leer el directorio: ${err.message}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file.name);

            if (file.isDirectory()) {
                if (file.name === 'webp') {
                    fs.rmdir(filePath, { recursive: true }, (err) => {
                        if (err) {
                            console.error(`Error al eliminar la carpeta "${filePath}": ${err.message}`);
                        } else {
                            console.log(`Carpeta eliminada: ${filePath}`);
                        }
                    });
                } else {
                    deleteWebpFolders(filePath); // Recursión para buscar en subdirectorios
                }
            }
        });
    });
}

deleteWebpFolders(dirPath);
