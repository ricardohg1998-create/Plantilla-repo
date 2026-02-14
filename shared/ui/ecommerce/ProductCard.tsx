import * as React from "react";
import { OptimizedImage } from "../OptimizedImage";
import { Button } from "../button";
import { ShoppingCart } from "lucide-react";
import { cn } from "../../lib/utils";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    currency?: string;
    onAddToCart?: () => void;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    price,
    image,
    currency = "EUR",
    onAddToCart,
    className,
}) => {
    return (
        <div className={cn("group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg", className)}>
            <div className="aspect-square relative overflow-hidden bg-muted">
                <OptimizedImage
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button size="icon" onClick={onAddToCart} className="rounded-full shadow-lg">
                        <ShoppingCart className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-semibold tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    {new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(price)}
                </p>
            </div>
        </div>
    );
};
