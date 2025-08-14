    import { RawHostawayReview, NormalizedReview } from '../models/review';

    export const normalizeHostawayReview = (review: RawHostawayReview): NormalizedReview => {
        let overallRating: number;

        if (review.rating !== null) {
            overallRating = review.rating;
        } else if (review.reviewCategory && review.reviewCategory.length > 0) {
            const sumRatings = review.reviewCategory.reduce((acc, cat) => acc + cat.rating, 0);
            overallRating = parseFloat((sumRatings / review.reviewCategory.length).toFixed(1));
        } else {
            overallRating = 0;
        }

        return {
            id: review.id,
            listingName: review.listingName,
            guestName: review.guestName,
            rating: overallRating,
            text: review.publicReview,
            date: new Date(review.submittedAt).toISOString(),
            channel: 'Hostaway',
            isApprovedForDisplay: false,
            type: review.type,
            status: review.status
        };
    };
    