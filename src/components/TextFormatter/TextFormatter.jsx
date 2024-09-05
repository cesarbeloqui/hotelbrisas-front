const TextFormatter = ({ content }) => {
    // Si el contenido es un string, devuelve solo un <span> sin formato
    if (typeof content === 'string') {
        return <span>{content}</span>;
    }

    // Si el contenido es un array, mapea los elementos
    if (Array.isArray(content)) {
        return (
            <span>
                {content.map((item, index) => {
                    // Si el elemento es un string, devuélvelo sin formato
                    if (typeof item === 'string') {
                        return <span key={index}>{item}</span>;
                    }

                    // Si el elemento es un objeto, usa sus claves como clases de Tailwind
                    if (typeof item === 'object') {
                        const text = Object.values(item)[0]; // Extrae el texto
                        const classNames = Object.keys(item)[0]; // Extrae las clases

                        return (
                            <span key={index} className={classNames}>
                                {text}
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
