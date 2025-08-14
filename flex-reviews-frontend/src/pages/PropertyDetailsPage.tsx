import type { NormalizedReview } from '../types/review';
import StarRating from '../components/StarRating';

interface PropertyDetailsPageProps {
    approvedReviews: NormalizedReview[];
}

const PropertyDetailsPage = ({ approvedReviews }: PropertyDetailsPageProps) => {
    return (
        <div className="min-h-screen bg-gray-50 p-6 font-inter text-gray-900">
            <header className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800">Flex Living Property Details</h1>
                <p className="text-gray-600">This is a placeholder for the property details layout.</p>
            </header>

            <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Charming Apartment in Belsize Park</h2>
                <div className="mb-8">
                    <img
                        src="https://placehold.co/1200x600/E0E0E0/333333?text=Property+Hero+Image"
                        alt="Property Hero"
                        className="w-full h-auto rounded-lg shadow-md mb-4"
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <img src="https://placehold.co/300x200/F0F0F0/555555?text=Gallery+1" alt="Gallery 1" className="w-full h-auto rounded-md" />
                        <img src="https://placehold.co/300x200/F0F0F0/555555?text=Gallery+2" alt="Gallery 2" className="w-full h-auto rounded-md" />
                        <img src="https://placehold.co/300x200/F0F0F0/555555?text=Gallery+3" alt="Gallery 3" className="w-full h-auto rounded-md" />
                        <img src="https://placehold.co/300x200/F0F0F0/555555?text=Gallery+4" alt="Gallery 4" className="w-full h-auto rounded-md" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">About this property</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Discover the charm of Belsize Park in this beautiful, spacious apartment. Located in a vibrant neighborhood with easy access to public transport, cafes, and boutiques, it offers the perfect blend of urban convenience and tranquil living. The apartment features high ceilings, modern furnishings, and ample natural light, ensuring a comfortable stay.
                        </p>

                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Amenities</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6 text-gray-700">
                            <li><span className="font-semibold">WiFi:</span> High-speed internet</li>
                            <li><span className="font-semibold">Kitchen:</span> Fully equipped</li>
                            <li><span className="font-semibold">Air Conditioning:</span> Yes</li>
                            <li><span className="font-semibold">Heating:</span> Central heating</li>
                            <li><span className="font-semibold">Washing Machine:</span> Available</li>
                            <li><span className="font-semibold">TV:</span> Smart TV</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Stay Policies</h3>
                        <div className="mb-6 text-gray-700">
                            <p className="mb-2"><span className="font-semibold">Check-in:</span> After 3:00 PM</p>
                            <p className="mb-2"><span className="font-semibold">Check-out:</span> Before 11:00 AM</p>
                            <p className="mb-2"><span className="font-semibold">House Rules:</span> No smoking, no parties, no pets.</p>
                            <p className="mb-2"><span className="font-semibold">Cancellation Policy:</span> Flexible - Free cancellation for 48 hours, then cancel up to 24 hours before check-in for a full refund, minus service fee.</p>
                        </div>

                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Guest Reviews</h3>
                        {approvedReviews.length === 0 ? (
                            <p className="text-gray-600 italic">Be the first to leave a review!</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {approvedReviews.map((review) => (
                                    <div key={review.id} className="bg-gray-50 p-5 rounded-md border border-gray-200">
                                        <div className="flex items-center mb-2">
                                            <span className="font-bold text-lg text-blue-700">{review.guestName}</span>
                                            <span className="ml-auto text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <StarRating rating={review.rating} />
                                            <span className="ml-2 text-md font-medium text-gray-700">{review.rating.toFixed(1)}/10</span>
                                        </div>
                                        <p className="text-gray-800 italic">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">Location</h3>
                        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                            [Map Placeholder]
                        </div>
                    </div>

                    <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md h-fit">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Book your stay</h3>
                        <div className="space-y-4">
                            <input type="date" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Check-in" />
                            <input type="date" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Check-out" />
                            <select className="w-full p-2 border border-gray-300 rounded-md">
                                <option>Guests</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <button className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition duration-200">
                                Check availability
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-800 text-gray-300 p-8 mt-8 rounded-lg shadow-inner">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="font-bold mb-2 text-white">Join The Flex</h4>
                        <input type="email" placeholder="Your email" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 mb-2" />
                        <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition duration-200">Subscribe</button>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2 text-white">The Flex</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2 text-white">Quick Links</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2 text-white">Contact Us</h4>
                        <ul>
                            <li>Email: info@flexliving.com</li>
                            <li>Phone: +1 234 567 8900</li>
                            <li>Address: 123 Flex St, London, UK</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                    &copy; 2025 Flex Living. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PropertyDetailsPage;
