"use client";

import * as React from "react";
import { Button } from "../button";
import { Container } from "../container";
import { AnimatePresence, motion } from "framer-motion";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "rejected");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4 shadow-2xl"
                >
                    <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            We use cookies to improve your experience. By using our site, you agree to our use of cookies.
                        </p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={handleReject}>
                                Decline
                            </Button>
                            <Button size="sm" onClick={handleAccept}>
                                Accept
                            </Button>
                        </div>
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
