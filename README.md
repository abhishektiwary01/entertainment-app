# Entertainment App

Our Entertainment App is a comprehensive platform designed to provide users with a rich and engaging experience for discovering and enjoying a wide range of entertainment content. The app features an extensive collection of movies, TV series, and sitcoms, all in one place, making it easy for users to explore and enjoy their favorite shows and films.

# Key Features:

* Diverse Content Library: Access a vast array of movies, TV series from various genres, including action, drama, comedy, and more. The app offers something for everyone, whether you’re looking for the latest blockbusters or classic favorites.

* User-Friendly Interface: Enjoy a sleek and intuitive interface that makes browsing and discovering new content a breeze. The app is designed with user experience in mind, featuring easy navigation and a clean layout.

* Personalized Recommendations: Get tailored recommendations based on your viewing history and preferences. The app uses advanced algorithms to suggest content you’re likely to enjoy, ensuring you never run out of great things to watch.

* Detailed Information: Each movie and TV series entry includes detailed information such as plot summaries, cast and crew, release dates, ratings, and more. Users can dive deep into the details of their favorite content.

* Bookmark and Save: Easily bookmark your favorite movies and shows, and keep track of what you’ve watched. The app provides options to manage and organize your saved content for quick access.

* Seamless Integration: The app leverages various technologies to provide a rich user experience:

   * Axios for making reliable and efficient API requests to fetch and update content.
   * Firebase for authentication, real-time database interactions, and other backend services, ensuring a secure and scalable platform.
   * Redux for state management, maintaining a predictable and consistent application state across different components.

* Responsive Design: The app is fully responsive and optimized for various devices, including smartphones, tablets, and desktops, ensuring a smooth experience across different screen sizes.

# Technology Stack:

* Frontend: React with Tailwind CSS for a dynamic and responsive user interface.
* Backend: Node.js with Express.js for robust server-side operations and API handling.
* Database: MongoDB for efficient data storage and retrieval.
* APIs: Integration with external APIs for real-time data fetching and updates.
* State Management: Redux for managing application state and ensuring smooth data flow.
* Authentication and Backend Services: Firebase for secure user authentication and additional backend functionalities.


# Installation Guide

To get the Entertainment App up and running on your local machine, follow these steps:

Prerequisites
Ensure you have the following installed on your machine:

* Node.js (which includes npm)
* MongoDB (for the database)
* Firebase CLI (for Firebase setup)

1. Clone the Repository

* git clone <repository-url>
* cd <repository-directory>

2. Install Dependencies

* Navigate to the root directory of the project and install the required npm packages:
* npm install

3. Set Up Firebase

* firebase login
* Initialize Firebase: Initialize Firebase in your project directory:

* firebase init

4. Start the Application

* npm start

* The React application should open in your default web browser at http://localhost:3000.

7. Verify the Application
* Open your web browser and go to http://localhost:3000 to ensure the app is running correctly. Check both the frontend and backend functionalities to confirm everything is working as expected.

# Application folder structure
```
├── public
│ 
├── src/
│   ├── assets
│   ├── frontend
|   |   └── components
|   |   |    └── Navbar.jsx
|   |   |    └── SearchBar.jsx
|   |   └── pages
|   |        └── Bookmarks.jsx
|   |        └── DetailsPage.jsx
|   |        └── Home.jsx
|   |        └── Loginpage.jsx
|   |        └── MoviePage.jsx
|   |        └── SignUp.jsx
|   |        └── TvSeries.jsx
│   └── models
│   |     └── Firebase.js
│   │ 
|   ├── App.jsx
|   ├── index.css
|   ├── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```
# Acknowledgements

* Tailwind CSS: For styling and responsive design.
* Express.js: For building the backend server.
* Redux: For managing application state and ensuring smooth data flow.

# Links
* Deployment Link:[ https://entertainment-app-theta-one.vercel.app/](https://entertainment-app-tawny-beta.vercel.app/)


# Developed By
 * Abhishek Tiwari

