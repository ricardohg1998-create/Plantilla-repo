export type ContentStatus = 'REAL' | 'DRAFT' | 'PENDING';

export interface ContentItem {
    /** The actual text content to display. */
    text: string;
    /**
     * Status of the content:
     * - REAL: Final, approved copy.
     * - DRAFT: Placeholder or unapproved copy. Allowed in dev, warns in build.
     * - PENDING: "Lorem Ipsum" or empty. Fails build.
     */
    status: ContentStatus;
    /** Optional notes for the copywriter/developer. */
    notes?: string;
    /** Max length constraint for UI design. */
    maxLength?: number;
}

export type ContentBlock = string | ContentItem;

/**
 * Utility to check if content is safe to display.
 */
export function isContentReady(item: ContentItem | string): boolean {
    if (typeof item === 'string') return true; // Strings are assumed REAL by default if hardcoded
    return item.status === 'REAL';
}
