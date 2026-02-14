import fs from 'node:fs';
import path from 'node:path';
// Configuration
const TARGET_EXTENSIONS = ['ts', 'tsx', 'json'];
const IGNORE_PATTERNS = ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**', '**/scripts/**'];
const FORBIDDEN_STRINGS = ['Lorem ipsum', 'lorem ipsum', 'TBD', 'To Be Defined', 'Pendiente de texto'];

// Args
const isStrict = process.argv.includes('--strict');

async function checkContent() {
    console.log('🔍 Scanning for placeholder content...');

    // Find files
    const files = await glob(`**/*.{${TARGET_EXTENSIONS.join(',')}}`, {
        ignore: IGNORE_PATTERNS,
        cwd: process.cwd(),
        absolute: true
    });

    let errorCount = 0;
    let draftCount = 0;

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');

        // Check 1: Forbidden Strings
        for (const term of FORBIDDEN_STRINGS) {
            if (content.includes(term)) {
                console.error(`❌ [FORBIDDEN] Found "${term}" in ${path.relative(process.cwd(), file)}`);
                errorCount++;
            }
        }

        // Check 2: ContentStatus = 'PENDING' or 'DRAFT'
        // This is a naive regex check, ideal for JSON or simple object literals
        // It captures "status": "PENDING" or status: 'PENDING'
        const statusMatch = content.match(/status['"]?\s*:\s*['"](PENDING|DRAFT)['"]/);
        if (statusMatch) {
            const status = statusMatch[1];
            const relPath = path.relative(process.cwd(), file);

            if (status === 'PENDING') {
                console.error(`❌ [PENDING] Found status:'PENDING' in ${relPath}`);
                errorCount++;
            } else if (status === 'DRAFT') {
                console.warn(`⚠️ [DRAFT] Found status:'DRAFT' in ${relPath}`);
                draftCount++;
            }
        }
    }

    console.log('\n--- Content Check Results ---');
    console.log(`Files scanned: ${files.length}`);
    console.log(`Errors (Must Fix): ${errorCount}`);
    console.log(`Drafts (Warnings): ${draftCount}`);

    if (errorCount > 0) {
        console.error('FAILED: Real content required. Remove PENDING items and Lorem Ipsum.');
        process.exit(1);
    }

    if (isStrict && draftCount > 0) {
        console.error('FAILED (Strict): Draft content found in production build.');
        process.exit(1);
    }

    console.log('✅ Content Check Passed');
}

// We need to install 'glob' if not present, but for now assuming we run in a repo that might have it or we use npx.
// Actually, this script depends on 'glob'. I should check if package.json has it or use a simpler recursive walker.
// To be safe and dependency-free, I will rewrite it to use native fs.recursive properties or a simple walker 
// because I don't want to force `npm install glob` just for this if not needed.

// Rewriting using native fs traversal to be dependency-free
import { opendir } from 'node:fs/promises';

async function* walk(dir) {
    for await (const d of await opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

async function runNative() {
    console.log('🔍 Scanning for placeholder content (Native)...');
    let errorCount = 0;
    let draftCount = 0;

    // Recursive Walk
    const root = process.cwd();

    // Helper to check ignore
    const shouldIgnore = (p) => {
        return IGNORE_PATTERNS.some(pattern => {
            // Very basic glob-like matching for directories (node_modules, etc)
            const cleanPattern = pattern.replace(/\*\*\//, '').replace(/\/\*\*/, '');
            return p.includes(cleanPattern);
        });
    }

    // Walk matches
    try {
        for await (const file of walk(root)) {
            const ext = path.extname(file).slice(1);
            if (!TARGET_EXTENSIONS.includes(ext)) continue;
            if (shouldIgnore(file)) continue;

            const content = fs.readFileSync(file, 'utf-8');
            const relPath = path.relative(root, file);

            // Check 1: Forbidden Strings
            for (const term of FORBIDDEN_STRINGS) {
                if (content.includes(term)) {
                    console.error(`❌ [FORBIDDEN] Found "${term}" in ${relPath}`);
                    errorCount++;
                }
            }

            // Check 2: ContentStatus
            const statusMatch = content.match(/status['"]?\s*:\s*['"](PENDING|DRAFT)['"]/);
            if (statusMatch) {
                const status = statusMatch[1];
                if (status === 'PENDING') {
                    console.error(`❌ [PENDING] Found status:'PENDING' in ${relPath}`);
                    errorCount++;
                } else if (status === 'DRAFT') {
                    console.warn(`⚠️ [DRAFT] Found status:'DRAFT' in ${relPath}`);
                    draftCount++;
                }
            }
        }
    } catch (e) {
        console.error(e);
    }

    console.log('\n--- Content Check Results ---');
    console.log(`Errors (Must Fix): ${errorCount}`);
    console.log(`Drafts (Warnings): ${draftCount}`);

    if (errorCount > 0) {
        console.error('FAILED: Real content required.');
        process.exit(1);
    }

    if (isStrict && draftCount > 0) {
        console.error('FAILED (Strict): Draft content found.');
        process.exit(1);
    }

    console.log('✅ Content Check Passed');
}

runNative();
