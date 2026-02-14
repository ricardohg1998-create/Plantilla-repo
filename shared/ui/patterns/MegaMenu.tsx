"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../container";
import { Button } from "../button";

import { X, Menu } from "lucide-react";

interface MenuItem {
    label: string;
    href: string;
    image?: string;
    description?: string;
}

interface MegaMenuProps {
    logo: React.ReactNode;
    items: MenuItem[];
    cta: { label: string; href: string };
    contactInfo?: {
        email: string;
        phone: string;
        address: string;
    };
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ logo, items, cta, contactInfo }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    // Lock body scroll when open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
            <Container className="flex items-center justify-between h-20">
                <div className="z-50">{logo}</div>

                <button
                    onClick={toggleOpen}
                    className="z-50 p-2 focus:outline-none"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-background z-40 flex flex-col pt-24"
                        >
                            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full pb-12 overflow-y-auto">
                                {/* Links Column */}
                                <nav className="flex flex-col space-y-4 justify-center">
                                    {items.map((item, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={item.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.1 }}
                                            className="group flex items-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="text-4xl md:text-6xl font-bold tracking-tighter hover:text-primary transition-colors text-foreground">
                                                {item.label}
                                            </span>
                                        </motion.a>
                                    ))}
                                </nav>

                                {/* Contact / Context Column */}
                                <div className="flex flex-col justify-center space-y-8 bg-muted/30 p-8 rounded-xl">
                                    {contactInfo && (
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-semibold">Contacto</h3>
                                            <p className="text-xl text-muted-foreground">{contactInfo.email}</p>
                                            <p className="text-xl text-muted-foreground">{contactInfo.phone}</p>
                                            <p className="text-muted-foreground">{contactInfo.address}</p>
                                        </div>
                                    )}
                                    <div>
                                        <Button size="lg" className="w-full text-xl py-8" onClick={() => window.location.href = cta.href}>
                                            {cta.label}
                                        </Button>
                                    </div>
                                </div>
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
};
