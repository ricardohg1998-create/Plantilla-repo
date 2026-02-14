import React from 'react';

// Si estuviéramos en Next.js usaríamos next/image. 
// Como este es un componente "shared" agnóstico (por ahora), hacemos un wrapper inteligente.
// En M3, al dividir por framework, cada uno tendrá su implementación específica.

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number; // Obligatorio para evitar CLS si no es fill
    height?: number;
    priority?: boolean; // Si es true, loading="eager" y fetchpriority="high"
    className?: string;
}

/**
 * Componente base de imagen optimizada.
 * En el starter de Next.js, esto será sustituido por next/image.
 * En Vite, usará atributos nativos modernos.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    width,
    height,
    priority = false,
    className,
    ...props
}) => {
    // Validación de CLS en desarrollo
    if (!width || !height) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`⚠️ [OptimizedImage] Missing width/height for "${alt}". This causes CLS.`);
        }
    }

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            // @ts-ignore - fetchpriority is relatively new
            fetchpriority={priority ? "high" : "auto"}
            className={`block max-w-full h-auto ${className || ''}`}
            {...props}
        />
    );
};
