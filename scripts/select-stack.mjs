import fs from 'node:fs';
import path from 'node:path';

// --- Configuration ---
const BRIEF_PATH = path.join(process.cwd(), 'PROJECT_BRIEF.md');
const DEFAULT_STACK = 'Next.js';

// --- Rubric Logic ---
// Points system: > 0 leans to Next.js, < 0 leans to Vite.
// Next.js triggers (High weight +)
const NEXT_TRIGGERS = [
    { term: 'Corporativa', weight: 2 },
    { term: 'Blog', weight: 3 },
    { term: 'Portal', weight: 3 },
    { term: 'E-commerce', weight: 4 },
    { term: 'SEO Alto', weight: 5 }, // Critical
    { term: 'Contenido Dinámico', weight: 3 },
    { term: 'Internacionalización', weight: 3, check: /Sí/ },
];

// Vite triggers (Weight -)
const VITE_TRIGGERS = [
    { term: 'Landing Page', weight: -2 },
    { term: 'SEO Bajo', weight: -2 },
    { term: 'Hosting Estático Clásico', weight: -3 },
    { term: 'Web App / SaaS', weight: 0 }, // Neutral, but often simpler with Vite if backend is separate
];

function analyzeBrief(content) {
    let score = 0;
    const reasons = [];

    // Parse checkmarks [x]
    // We look for lines containing [x] and specific keywords
    const lines = content.split('\n');
    const checkedLines = lines.filter(line => line.includes('[x]'));

    if (checkedLines.length === 0) {
        return { stack: DEFAULT_STACK, reasons: ['No options selected in PROJECT_BRIEF.md. Defaulting to robust choice.'] };
    }

    // Check Next.js Triggers
    NEXT_TRIGGERS.forEach(trigger => {
        const matched = checkedLines.some(line => line.includes(trigger.term) && (!trigger.check || trigger.check.test(line)));
        if (matched) {
            score += trigger.weight;
            reasons.push(`[+${trigger.weight}] Matches '${trigger.term}' -> Favors Next.js`);
        }
    });

    // Check Vite Triggers
    VITE_TRIGGERS.forEach(trigger => {
        const matched = checkedLines.some(line => line.includes(trigger.term));
        if (matched) {
            score += trigger.weight;
            reasons.push(`[${trigger.weight}] Matches '${trigger.term}' -> Favors Vite`);
        }
    });

    // Force Next if SEO is High (Override)
    const seoHigh = checkedLines.some(line => line.includes('SEO') && line.includes('Alto') && line.includes('[x]'));
    if (seoHigh) {
        score += 10;
        reasons.push('[CRITICAL] High SEO requirement strongly mandates Next.js');
    }

    // Determine Stack
    let stack = DEFAULT_STACK;
    if (score < -2) {
        stack = 'Vite';
    }

    return { stack, score, reasons };
}

function main() {
    console.log('🔍 Analyzing PROJECT_BRIEF.md for Stack Selection...');

    if (!fs.existsSync(BRIEF_PATH)) {
        console.error('❌ PROJECT_BRIEF.md not found in root.');
        console.log(`ℹ️  Please copy docs/project-brief.md to root and fill it out.`);
        process.exit(1);
    }

    const content = fs.readFileSync(BRIEF_PATH, 'utf-8');
    const result = analyzeBrief(content);

    console.log('\n--- Analysis Result ---');
    console.log(`Recommended Stack: \x1b[36m\x1b[1m${result.stack}\x1b[0m`);
    console.log(`Score: ${result.score} (Positive = Next.js, Negative = Vite)`);
    console.log('\n--- Decision Factors ---');
    result.reasons.forEach(r => console.log(`• ${r}`));

    console.log('\n--- Next Steps ---');
    if (result.stack === 'Next.js') {
        console.log('✅ Proceed with starers/next or initialize Next.js app.');
    } else {
        console.log('✅ Proceed with starters/vite or initialize Vite app.');
    }
}

main();
