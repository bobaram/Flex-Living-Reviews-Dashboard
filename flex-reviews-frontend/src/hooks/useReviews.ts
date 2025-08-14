import { useState, useEffect, useMemo } from 'react';
import type { NormalizedReview } from '../types/review';

interface UseReviewsHook {
    reviews: NormalizedReview[];
    loading: boolean;
    error: string | null;
    toggleApproved: (id: number) => void;
    uniqueListings: string[];
    uniqueChannels: string[];
}

const useReviews = (): UseReviewsHook => {
    const [reviews, setReviews] = useState<NormalizedReview[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/reviews/hostaway');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: NormalizedReview[] = await response.json();
                const initializedReviews = data.map(review => ({
                    ...review,
                    isApprovedForDisplay: review.isApprovedForDisplay || false
                }));
                setReviews(initializedReviews);
            } catch (err) {
                if (err instanceof Error) {
                    setError(`Failed to fetch reviews: ${err.message}`);
                } else {
                    setError('An unknown error occurred during fetch.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    const toggleApproved = (id: number) => {
        setReviews(prevReviews =>
            prevReviews.map(review =>
                review.id === id ? { ...review, isApprovedForDisplay: !review.isApprovedForDisplay } : review
            )
        );
    };

    const uniqueListings = useMemo(() => {
        const names = new Set(reviews.map(review => review.listingName));
        return ['', ...Array.from(names)].sort();
    }, [reviews]);

    const uniqueChannels = useMemo(() => {
        const channels = new Set(reviews.map(review => review.channel));
        return ['', ...Array.from(channels)].sort();
    }, [reviews]);

    return { reviews, loading, error, toggleApproved, uniqueListings, uniqueChannels };
};

export default useReviews;
