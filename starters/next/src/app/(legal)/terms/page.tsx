import { Container, Heading, Text } from "@plantilla/shared";

export default function TermsPage() {
    return (
        <Container className="py-20 max-w-4xl">
            <Heading level="h1" className="mb-8">Terms of Service</Heading>
            <Text>Last updated: {new Date().toLocaleDateString()}</Text>

            <div className="prose dark:prose-invert mt-12">
                <p>This is a placeholder for the Terms of Service. It should be replaced with valid legal text provided by a qualified professional.</p>

                <h3>1. Acceptance of Terms</h3>
                <p>By accessing this website, you agree to be bound by these Terms...</p>
            </div>
        </Container>
    );
}
