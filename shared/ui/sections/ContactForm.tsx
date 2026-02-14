"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../button";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import { cn } from "../../lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    honeypot: z.string().optional(),
    privacy: z.boolean().refine((val) => val === true, {
        message: "You must accept the privacy policy",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            privacy: false,
        }
    });

    const onSubmit = async (data: FormValues) => {
        if (data.honeypot) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form data:", data);
        setIsSuccess(true);
        setIsSubmitting(false);
        reset();
    };

    return (
        <section className="py-20 bg-muted/30">
            <Container className="max-w-2xl">
                <div className="mb-10 text-center">
                    <Heading level="h2">Let's Talk</Heading>
                    <Text>Start a conversation with us.</Text>
                </div>

                {isSuccess ? (
                    <div className="p-8 bg-green-50 text-green-900 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p>We'll get back to you shortly.</p>
                        <Button variant="outline" className="mt-6" onClick={() => setIsSuccess(false)}>
                            Send another
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <input type="text" className="hidden" {...register("honeypot")} tabIndex={-1} autoComplete="off" />

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input
                                id="name"
                                {...register("name")}
                                className={cn(
                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.name && "border-destructive focus-visible:ring-destructive"
                                )}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                className={cn(
                                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.email && "border-destructive focus-visible:ring-destructive"
                                )}
                                placeholder="you@example.com"
                            />
                            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                {...register("message")}
                                className={cn(
                                    "flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.message && "border-destructive focus-visible:ring-destructive"
                                )}
                                placeholder="How can we help?"
                            />
                            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                        </div>

                        <div className="flex items-start space-x-2">
                            <input
                                id="privacy"
                                type="checkbox"
                                {...register("privacy")}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="privacy" className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                I accept the <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> and authorize the processing of my data.
                            </label>
                        </div>
                        {errors.privacy && <p className="text-xs text-destructive">{errors.privacy.message}</p>}

                        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
                            Send Message
                        </Button>
                    </form>
                )}
            </Container>
        </section>
    );
};
