import * as React from "react";
import { Container } from "../container";
import { buttonVariants } from "../button";
import { cn } from "../../lib/utils";
import { Heading, Text } from "../typography";
import { OptimizedImage } from "../OptimizedImage"; // Ensure correct import path

interface HeroEditorialProps {
    title: string;
    subtitle?: string;
    cta: { label: string; href: string };
    image: string;
    badge?: string;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({ title, subtitle, cta, image, badge }) => {
    return (
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
            <Container className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Text Content - Asymmetric (7 cols) */}
                <div className="md:col-span-7 flex flex-col items-start z-10">
                    {badge && (
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase border rounded-full bg-background">
                            {badge}
                        </span>
                    )}
                    <Heading level="h1" className="mb-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl tracking-tighter">
                        {title}
                    </Heading>
                    {subtitle && (
                        <Text variant="lead" className="mb-8 max-w-2xl text-xl md:text-2xl text-muted-foreground">
                            {subtitle}
                        </Text>
                    )}
                    <div className="flex flex-wrap gap-4">
                        <a href={cta.href} className={cn(buttonVariants({ variant: "premium", size: "lg" }), "text-lg px-8 h-14")}>
                            {cta.label}
                        </a>
                        <a href="#learn-more" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-lg px-8 h-14")}>
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image - Asymmetric (5 cols) - Overlapping or offset */}
                <div className="md:col-span-5 relative">
                    <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-2xl">
                        <OptimizedImage
                            src={image}
                            alt={title}
                            width={800}
                            height={1000}
                            priority
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative element implementation would go here */}
                </div>
            </Container>
        </section>
    );
};
