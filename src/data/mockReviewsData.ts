    import { RawHostawayReview } from '../models/review';

    const mockReviewsResult: RawHostawayReview[] = [
        {
            "id": 7453,
            "type": "host-to-guest",
            "status": "published",
            "rating": null,
            "publicReview": "Shane and family are wonderful! Would definitely host again :) The apartment was spotless and communication was excellent.",
            "reviewCategory": [
                { "category": "cleanliness", "rating": 10 },
                { "category": "communication", "rating": 10 },
                { "category": "respect_house_rules", "rating": 10 }
            ],
            "submittedAt": "2020-08-21 22:45:14",
            "guestName": "Shane Finkelstein",
            "listingName": "2B N1 A - 29 Shoreditch Heights"
        },
        {
            "id": 7454,
            "type": "guest-to-host",
            "status": "published",
            "rating": 8,
            "publicReview": "Great stay overall! The location was perfect, but the bed was a bit too firm for my liking. Communication with Flex Living was smooth.",
            "reviewCategory": [
                { "category": "location", "rating": 9 },
                { "category": "comfort", "rating": 7 },
                { "category": "value", "rating": 8 }
            ],
            "submittedAt": "2021-03-10 10:15:00",
            "guestName": "Maria Rodriguez",
            "listingName": "Charming Apartment in Belsize Park"
        },
        {
            "id": 7455,
            "type": "guest-to-host",
            "status": "published",
            "rating": 9,
            "publicReview": "Absolutely loved this apartment! It felt like home away from home. Very clean and well-equipped. Minor issue with the Wi-Fi at times.",
            "reviewCategory": [
                { "category": "cleanliness", "rating": 10 },
                { "category": "amenities", "rating": 9 },
                { "category": "accuracy", "rating": 9 }
            ],
            "submittedAt": "2022-01-25 15:30:00",
            "guestName": "David Chen",
            "listingName": "Charming Apartment in Belsize Park"
        },
        {
            "id": 7456,
            "type": "guest-to-host",
            "status": "published",
            "rating": 7,
            "publicReview": "Decent place for a short stay. It was a bit noisy from the street, but the location was central. Good communication.",
            "reviewCategory": [
                { "category": "noise", "rating": 6 },
                { "category": "location", "rating": 8 },
                { "category": "communication", "rating": 8 }
            ],
            "submittedAt": "2022-06-01 09:00:00",
            "guestName": "Sophie Dubois",
            "listingName": "Studio Flat Covent Garden"
        },
        {
            "id": 7457,
            "type": "guest-to-host",
            "status": "published",
            "rating": 10,
            "publicReview": "Fantastic experience! Everything was perfect, from check-in to check-out. Highly recommend this property.",
            "reviewCategory": [
                { "category": "overall", "rating": 10 }
            ],
            "submittedAt": "2023-02-14 11:00:00",
            "guestName": "Liam Gallagher",
            "listingName": "Luxury Penthouse London"
        }
    ];

    export const mockHostawayApiResponse = {
        status: "success",
        result: mockReviewsResult
    };
    