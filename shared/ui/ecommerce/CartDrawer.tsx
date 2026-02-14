"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { Button } from "../button";


interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    itemCount?: number;
    subtotal?: number;
    currency?: string;
    children?: React.ReactNode; // For cart items
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
    isOpen,
    onClose,
    itemCount = 0,
    subtotal = 0,
    currency = "EUR",
    children
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-xl border-l flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Cart ({itemCount})
                            </h2>
                            <Button variant="ghost" size="icon" onClick={onClose}>
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                            {itemCount === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                                    <ShoppingBag className="w-12 h-12 opacity-20" />
                                    <p>Your cart is empty.</p>
                                    <Button variant="outline" onClick={onClose}>Continue Shopping</Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {children}
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t bg-muted/20 space-y-4">
                            <div className="flex justify-between font-medium">
                                <span>Subtotal</span>
                                <span>{new Intl.NumberFormat('es-ES', { style: 'currency', currency }).format(subtotal)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground text-center">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <Button className="w-full" size="lg">Checkout</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
