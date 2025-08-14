    import { Router, Request, Response } from 'express';
    import { mockHostawayApiResponse } from '../data/mockReviewsData';
    import { normalizeHostawayReview } from '../utils/reviewNormalizer';
    import { NormalizedReview } from '../models/review';

    const router = Router();

    router.get('/hostaway', (req: Request, res: Response) => {
        try {
            const normalizedReviews: NormalizedReview[] = mockHostawayApiResponse.result.map(normalizeHostawayReview);
            res.json(normalizedReviews);
        } catch (error) {
            console.error('Error in /api/reviews/hostaway:', error);
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ status: 'error', message: `Failed to retrieve and process reviews: ${errorMessage}` });
        }
    });

    export default router;
    