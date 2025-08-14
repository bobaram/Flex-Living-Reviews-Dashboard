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
