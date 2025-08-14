Flex Living Reviews Dashboard
This project is a web application designed for Flex Living managers to monitor and manage guest reviews for their properties. It consists of a backend API (Node.js/Express/TypeScript) that processes review data and a frontend dashboard (React/TypeScript) for interaction.

✨ Features
Manager Dashboard
Review Overview: Displays a comprehensive list of all guest reviews.

Filtering and Sorting: Allows managers to filter reviews by property name, minimum rating, and review channel. Reviews can be sorted by submission date or rating.

Review Approval: Provides functionality to approve or unapprove individual reviews for display on the public property page.

Review Display Page
Layout Replication: Mimics the design and structure of the Flex Living property details page.

Dynamic Review Display: Shows only the reviews that have been explicitly approved by the manager on the dashboard.

Consistent Design: Ensures the review section integrates seamlessly with the existing Flex Living property page style.

Hostaway Integration (Mocked)
The backend includes a mock API endpoint (GET /api/reviews/hostaway) that simulates fetching review data from the Hostaway Reviews API.

Raw review data is normalized into a consistent format for easy consumption by the frontend.

💻 Tech Stack
Frontend:

React 18: For building the dynamic user interface.

TypeScript: Enhances code quality and maintainability with static typing.

Vite: A fast development server and build tool for a snappy developer experience.

Tailwind CSS: A utility-first CSS framework for rapid UI development and responsive design.

Backend:

Node.js: JavaScript runtime environment.

Express.js: A popular web application framework for building RESTful APIs.

TypeScript: Provides type safety for backend logic and API definitions.

CORS: Middleware configured to enable Cross-Origin Resource Sharing between the frontend and backend.

🚀 Setup and Local Development
To get the Flex Living Reviews Dashboard running on your local machine, follow these steps:

Prerequisites
Ensure Node.js (LTS version recommended) and npm are installed on your system.

1. Backend Setup
   Navigate to the backend project directory:

cd flex-reviews-app

Install backend dependencies:

npm install

Start the backend API server:

npm run dev

The API should now be running and accessible at http://localhost:3001. Keep this terminal window open.

2. Frontend Setup
   Open a new terminal window.

Navigate to the frontend project directory:

cd flex-reviews-frontend

Install frontend dependencies:

npm install

Start the frontend development server:


npm run dev

The frontend application should now be running and accessible at http://localhost:5173 (or another port specified in your terminal).

You can now interact with the Flex Living Reviews Dashboard in your web browser, switching between the dashboard and the property display page to see the features in action.


<img width="1920" height="1158" alt="Vite-React-TS-08-14-2025_03_11_PM" src="https://github.com/user-attachments/assets/88f3c909-854e-44b6-857f-9030adeb0c06" />

<img width="1920" height="1158" alt="Vite-React-TS-08-14-2025_03_11_PM" src="https://github.com/user-attachments/assets/2be15234-b0d1-4b6b-bc54-79dd4949e325" />
