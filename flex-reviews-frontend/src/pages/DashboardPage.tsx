import { useState, useMemo } from 'react';
import type { NormalizedReview } from '../types/review';
import DashboardFilters from '../components/DashboardFilters';
import ReviewCard from '../components/ReviewCard';

interface DashboardPageProps {
    reviews: NormalizedReview[];
    loading: boolean;
    error: string | null;
    toggleApproved: (id: number) => void;
    uniqueListings: string[];
    uniqueChannels: string[];
}

const DashboardPage = ({
    reviews,
    loading,
    error,
    toggleApproved,
    uniqueListings,
    uniqueChannels
}: DashboardPageProps) => {
    const [filterListing, setFilterListing] = useState<string>('');
    const [filterRating, setFilterRating] = useState<string>('');
    const [filterChannel, setFilterChannel] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('dateDesc');

    const filteredAndSortedReviews = useMemo(() => {
        let filtered = reviews;

        if (filterListing) {
            filtered = filtered.filter(review =>
                review.listingName.toLowerCase().includes(filterListing.toLowerCase())
            );
        }

        if (filterRating) {
            const minRating = parseFloat(filterRating);
            filtered = filtered.filter(review => review.rating >= minRating);
        }

        if (filterChannel) {
            filtered = filtered.filter(review =>
                review.channel.toLowerCase() === filterChannel.toLowerCase()
            );
        }

        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'dateDesc') {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            } else if (sortBy === 'dateAsc') {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            } else if (sortBy === 'ratingDesc') {
                return b.rating - a.rating;
            } else if (sortBy === 'ratingAsc') {
                return a.rating - b.rating;
            }
            return 0;
        });

        return sorted;
    }, [reviews, filterListing, filterRating, filterChannel, sortBy]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <p className="text-gray-700 text-lg animate-pulse">Loading reviews...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-red-50">
                <p className="text-red-700 text-lg">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-inter text-gray-900">
            <header className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800">Flex Living Reviews Dashboard</h1>
            </header>

            <DashboardFilters
                filterListing={filterListing}
                setFilterListing={setFilterListing}
                filterRating={filterRating}
                setFilterRating={setFilterRating}
                filterChannel={filterChannel}
                setFilterChannel={setFilterChannel}
                sortBy={sortBy}
                setSortBy={setSortBy}
                uniqueListings={uniqueListings}
                uniqueChannels={uniqueChannels}
            />

            <div className="max-w-7xl mx-auto">
                {filteredAndSortedReviews.length === 0 ? (
                    <p className="text-center text-gray-600 p-8 bg-white rounded-lg shadow-md">No reviews match your filters.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAndSortedReviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                onToggleApproved={toggleApproved}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
