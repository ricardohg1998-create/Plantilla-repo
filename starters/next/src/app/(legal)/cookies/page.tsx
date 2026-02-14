import { Container, Heading, Text } from "@plantilla/shared";

export default function CookiesPage() {
    return (
        <Container className="py-20 max-w-4xl">
            <Heading level="h1" className="mb-8">Cookies Policy</Heading>
            <Text>Last updated: {new Date().toLocaleDateString()}</Text>

            <div className="prose dark:prose-invert mt-12">
                <p>This is a placeholder for the Cookies Policy.</p>

                <h3>1. What are cookies?</h3>
                <p>Cookies are small text files stored on your device...</p>
            </div>
        </Container>
    );
}
