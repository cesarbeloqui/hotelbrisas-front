import React from "react";

const TextFormatter = ({ content }) => {
    // Función auxiliar para manejar los saltos de línea y los enlaces de WhatsApp
    const renderWithLineBreaksAndLinks = (text) => {
        // Reemplaza el número de teléfono con un enlace de WhatsApp
        const phoneNumberPattern = /\+598 \d{3}-\d{4}/; // Patrón para detectar el número de teléfono
        const whatsappLink = "https://wa.me/5989395795"; // Enlace de WhatsApp

        return text.split('\n').map((line, index) => {
            // Reemplaza el número de teléfono con un enlace
            const parts = line.split(phoneNumberPattern);
            return (
                <span key={index}>
                    {parts.map((part, partIndex) => (
                        <React.Fragment key={partIndex}>
                            {part}
                            {partIndex < parts.length - 1 && (
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    {phoneNumberPattern.exec(line)}
                                </a>
                            )}
                        </React.Fragment>
                    ))}
                    {index < text.split('\n').length - 1 && <br />}
                </span>
            );
        });
    };

    // Si el contenido es un string, devuelve solo un <span> con saltos de línea y enlaces
    if (typeof content === 'string') {
        return <span>{renderWithLineBreaksAndLinks(content)}</span>;
    }

    // Si el contenido es un array, mapea los elementos
    if (Array.isArray(content)) {
        return (
            <span>
                {content.map((item, index) => {
                    // Si el elemento es un string, devuélvelo con saltos de línea y enlaces
                    if (typeof item === 'string') {
                        return <span key={index}>{renderWithLineBreaksAndLinks(item)}</span>;
                    }

                    // Si el elemento es un objeto, usa sus claves como clases de Tailwind
                    if (typeof item === 'object') {
                        const text = Object.values(item)[0]; // Extrae el texto
                        const classNames = Object.keys(item)[0]; // Extrae las clases

                        return (
                            <span key={index} className={classNames}>
                                {renderWithLineBreaksAndLinks(text)}
                            </span>
                        );
                    }

                    return null;
                })}
            </span>
        );
    }

    // Si el contenido no es válido, devuelve null
    return null;
};

export default TextFormatter;