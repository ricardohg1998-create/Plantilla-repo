"use client";

import { Button } from "@plantilla/shared";
import { Container } from "@plantilla/shared";
import { Heading, Text } from "@plantilla/shared";
import { MegaMenu } from "@plantilla/shared";
import { BentoGrid } from "@plantilla/shared";
import { NarrativeFooter } from "@plantilla/shared";
import { HeroEditorial, ContactForm } from "@plantilla/shared";
import { Home } from "lucide-react";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* MegaMenu Test */}
            <MegaMenu
                logo={<span className="font-bold text-2xl">Brand.</span>}
                items={[
                    { label: "Home", href: "#" },
                    { label: "Services", href: "#" },
                    { label: "Work", href: "#" },
                ]}
                cta={{ label: "Let's Talk", href: "#" }}
                contactInfo={{
                    email: "hello@brand.com",
                    phone: "+1 234 567 890",
                    address: "123 Design St, Creative City"
                }}
            />

            <Container className="pt-32 space-y-12">
                <section>
                    <HeroEditorial
                        title="Design with Purpose"
                        subtitle="Anti-generic, high-performance, and conversion-focused."
                        cta={{ label: "Start Now", href: "#" }}
                        image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
                        badge="New Release"
                    />
                </section>

                <section>
                    <ContactForm />
                </section>

                <section>
                    <Heading level="h1" gradient>UI Kit Verification</Heading>
                    <Text variant="lead">Testing shared components in Next.js</Text>
                </section>

                <section className="space-y-4">
                    <Heading level="h3">Buttons</Heading>
                    <div className="flex gap-4 flex-wrap">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="premium">Premium</Button>
                        <Button size="icon"><Home className="w-4 h-4" /></Button>
                        <Button isLoading>Loading</Button>
                    </div>
                </section>

                <section className="space-y-4">
                    <Heading level="h3">Bento Grid</Heading>
                    <BentoGrid items={[
                        { title: "Main Feature", className: "md:col-span-2 md:row-span-2", description: "Big feature description here." },
                        { title: "Stat", meta: "+500%", className: "bg-muted" },
                        { title: "Action", icon: <Home /> },
                        { title: "Visual", className: "md:col-span-2" },
                    ]} />
                </section>
            </Container>

            <div className="mt-20">
                <NarrativeFooter
                    mainCta={{
                        heading: "Ready to launch?",
                        buttonLabel: "Start Project",
                        href: "#"
                    }}
                    columns={[
                        { title: "Explore", links: [{ label: "Work", href: "#" }, { label: "Services", href: "#" }] },
                        { title: "Company", links: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }] }
                    ]}
                    legalLinks={[{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }]}
                    copyright="© 2026 Brand Inc."
                />
            </div>
        </div>
    );
}
