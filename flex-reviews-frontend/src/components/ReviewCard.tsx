import type { NormalizedReview } from '../types/review';
import StarRating from './StarRating';

interface ReviewCardProps {
    review: NormalizedReview;
    onToggleApproved: (id: number) => void;
}

const ReviewCard = ({ review, onToggleApproved }: ReviewCardProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{review.listingName}</h2>
            <p className="text-gray-700 mb-2">Guest: <span className="font-medium">{review.guestName}</span></p>
            <div className="flex items-center mb-3">
                <span className="text-yellow-500 text-lg font-bold mr-2">Rating: {review.rating.toFixed(1)}</span>
                <StarRating rating={review.rating} />
            </div>
            <p className="text-gray-800 italic mb-3 flex-grow">"{review.text}"</p>
            <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{review.channel}</span>
                </div>
                <button
                    onClick={() => onToggleApproved(review.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
                        ${review.isApprovedForDisplay
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    {review.isApprovedForDisplay ? 'Approved' : 'Approve for Display'}
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
