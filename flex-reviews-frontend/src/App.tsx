import  { useState, useMemo } from 'react';
import useReviews from './hooks/useReviews';
import DashboardPage from './pages/DashboardPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import type { NormalizedReview } from './types/review'; // Ensuring type-only import

const App = () => {
    const [currentPage, setCurrentPage] = useState<'dashboard' | 'propertyDetails'>('dashboard');

    const { reviews, loading, error, toggleApproved, uniqueListings, uniqueChannels } = useReviews();

    const approvedReviews: NormalizedReview[] = useMemo(() => {
        return reviews.filter(review => review.isApprovedForDisplay);
    }, [reviews]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <p className="text-gray-700 text-lg animate-pulse">Loading application data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-red-50">
                <p className="text-red-700 text-lg">Error initializing app: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold">Flex Living</span>
                    <div className="space-x-4">
                        <button
                            className={`px-4 py-2 rounded-md ${currentPage === 'dashboard' ? 'bg-green-700' : 'hover:bg-gray-700'}`}
                            onClick={() => setCurrentPage('dashboard')}
                        >
                            Dashboard
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md ${currentPage === 'propertyDetails' ? 'bg-green-700' : 'hover:bg-gray-700'}`}
                            onClick={() => setCurrentPage('propertyDetails')}
                        >
                            Property Page
                        </button>
                    </div>
                </div>
            </nav>

            {currentPage === 'dashboard' && (
                <DashboardPage
                    reviews={reviews}
                    loading={loading}
                    error={error}
                    toggleApproved={toggleApproved}
                    uniqueListings={uniqueListings}
                    uniqueChannels={uniqueChannels}
                />
            )}
            {currentPage === 'propertyDetails' && (
                <PropertyDetailsPage
                    approvedReviews={approvedReviews}
                />
            )}
        </div>
    );
};

export default App;
