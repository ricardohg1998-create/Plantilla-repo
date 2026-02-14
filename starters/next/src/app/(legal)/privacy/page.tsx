import { Container, Heading, Text } from "@plantilla/shared";

export default function PrivacyPage() {
    return (
        <Container className="py-20 max-w-4xl">
            <Heading level="h1" className="mb-8">Privacy Policy</Heading>
            <Text>Last updated: {new Date().toLocaleDateString()}</Text>

            <div className="prose dark:prose-invert mt-12">
                <p>This is a placeholder for the Privacy Policy. It should be replaced with valid legal text provided by a qualified professional.</p>

                <h3>1. Data Collection</h3>
                <p>We collect information you provide directly to us...</p>

                <h3>2. Data Usage</h3>
                <p>We use the information we collect to...</p>
            </div>
        </Container>
    );
}
