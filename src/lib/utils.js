import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function truncateFormattedContent(content, limit) {
  let charCount = 0;
  const truncatedContent = [];

  for (const item of content) {
    if (typeof item === 'string') {
      // Si es un string, verifica si al añadirlo se pasa del límite
      if (charCount + item.length > limit) {
        truncatedContent.push(item.slice(0, limit - charCount) + '...');
        break;
      } else {
        truncatedContent.push(item);
        charCount += item.length;
      }
    } else if (typeof item === 'object' && item !== null) {
      // Si es un objeto con estilos, intenta truncar el texto dentro del objeto
      const text = Object.values(item).join('');
      if (charCount + text.length > limit) {
        const truncatedText = text.slice(0, limit - charCount) + '...';
        // Agrega el objeto truncado
        truncatedContent.push({ ...item, [Object.keys(item)[0]]: truncatedText });
        break;
      } else {
        truncatedContent.push(item);
        charCount += text.length;
      }
    }
  }

  return truncatedContent;
}
