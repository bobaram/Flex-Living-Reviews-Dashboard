    export interface ReviewCategory {
        category: string;
        rating: number;
    }

    export interface RawHostawayReview {
        id: number;
        type: 'host-to-guest' | 'guest-to-host';
        status: string;
        rating: number | null;
        publicReview: string;
        reviewCategory: ReviewCategory[];
        submittedAt: string;
        guestName: string;
        listingName: string;
    }

    export interface NormalizedReview {
        id: number;
        listingName: string;
        guestName: string;
        rating: number;
        text: string;
        date: string;
        channel: 'Hostaway' | 'Google' | string;
        isApprovedForDisplay: boolean;
        type?: string;
        status?: string;
    }
    