
interface DashboardFiltersProps {
    filterListing: string;
    setFilterListing: (value: string) => void;
    filterRating: string;
    setFilterRating: (value: string) => void;
    filterChannel: string;
    setFilterChannel: (value: string) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
    uniqueListings: string[];
    uniqueChannels: string[];
}

const DashboardFilters = ({
    filterListing, setFilterListing,
    filterRating, setFilterRating,
    filterChannel, setFilterChannel,
    sortBy, setSortBy,
    uniqueListings, uniqueChannels
}: DashboardFiltersProps) => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <label htmlFor="filterListing" className="block text-sm font-medium text-gray-700 mb-1">Filter by Property</label>
                <select
                    id="filterListing"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={filterListing}
                    onChange={(e) => setFilterListing(e.target.value)}
                >
                    {uniqueListings.map(listing => (
                        <option key={listing || 'all'} value={listing}>{listing || 'All Properties'}</option>
                    ))}
                </select>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <label htmlFor="filterRating" className="block text-sm font-medium text-gray-700 mb-1">Min Rating</label>
                <select
                    id="filterRating"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                >
                    <option value="">All Ratings</option>
                    <option value="9">9+</option>
                    <option value="8">8+</option>
                    <option value="7">7+</option>
                    <option value="5">5+</option>
                </select>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <label htmlFor="filterChannel" className="block text-sm font-medium text-gray-700 mb-1">Filter by Channel</label>
                <select
                    id="filterChannel"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={filterChannel}
                    onChange={(e) => setFilterChannel(e.target.value)}
                >
                    {uniqueChannels.map(channel => (
                        <option key={channel || 'all'} value={channel}>{channel || 'All Channels'}</option>
                    ))}
                </select>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                    id="sortBy"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="dateDesc">Date (Newest First)</option>
                    <option value="dateAsc">Date (Oldest First)</option>
                    <option value="ratingDesc">Rating (Highest First)</option>
                    <option value="ratingAsc">Rating (Lowest First)</option>
                </select>
            </div>
        </div>
    );
};

export default DashboardFilters;
