import * as React from "react";
import { cn } from "../../lib/utils";
import { OptimizedImage } from "../OptimizedImage";

interface BentoItem {
    title: string;
    description?: string;
    image?: string;
    className?: string; // Col span handled here (e.g. col-span-2)
    icon?: React.ReactNode;
    href?: string;
    meta?: string; // e.g. "Coming Soon", "Popular"
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items, className }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4", className)}>
            {items.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-background border p-6 hover:shadow-xl transition-all duration-300",
                        item.className
                    )}
                >
                    {item.image && (
                        <div className="absolute inset-0 z-0">
                            <OptimizedImage
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-20 group-hover:opacity-30"
                                width={600}
                                height={400}
                            />
                        </div>
                    )}

                    <div className="z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            {item.icon && <div className="p-2 bg-primary/10 rounded-full text-primary">{item.icon}</div>}
                            {item.meta && <span className="text-xs font-mono border px-2 py-1 rounded-full">{item.meta}</span>}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Click area */}
                    {item.href && <a href={item.href} className="absolute inset-0 z-20"><span className="sr-only">View {item.title}</span></a>}
                </div>
            ))}
        </div>
    );
};
