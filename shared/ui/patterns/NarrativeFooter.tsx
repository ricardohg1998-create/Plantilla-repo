import * as React from "react";
import { Container } from "../container";
import { cn } from "../../lib/utils";

interface FooterLink {
    label: string;
    href: string;
}

interface NarrativeFooterProps {
    mainCta: {
        heading: string;
        subheading?: string;
        buttonLabel: string;
        href: string;
    };
    columns: {
        title: string;
        links: FooterLink[];
    }[];
    legalLinks: FooterLink[];
    copyright: string;
    className?: string;
}

export const NarrativeFooter: React.FC<NarrativeFooterProps> = ({
    mainCta,
    columns,
    legalLinks,
    copyright,
    className
}) => {
    return (
        <footer className={cn("bg-foreground text-background py-20", className)}>
            <Container>
                {/* Section 1: Narrative CTA */}
                <div className="mb-24 border-b border-background/20 pb-16">
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none">
                        {mainCta.heading}
                    </h2>
                    {mainCta.subheading && (
                        <p className="text-xl md:text-2xl text-background/60 max-w-2xl mb-8">
                            {mainCta.subheading}
                        </p>
                    )}
                    <a
                        href={mainCta.href}
                        className="inline-flex items-center text-2xl font-bold hover:text-primary transition-colors group"
                    >
                        {mainCta.buttonLabel}
                        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </div>

                {/* Section 2: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {columns.map((col, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-semibold mb-6 text-background/40 uppercase tracking-widest">
                                {col.title}
                            </h3>
                            <ul className="space-y-4">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href={link.href} className="text-lg hover:text-primary transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Section 3: Legal & Disclaimer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/30 pt-8 border-t border-background/10">
                    <p>{copyright}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {legalLinks.map((link, idx) => (
                            <a key={idx} href={link.href} className="hover:text-background transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
