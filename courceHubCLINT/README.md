# Course Subscription Platform

## Overview
This project is a course subscription platform that allows users to browse, purchase, and take courses. The platform is built with Node.js for the backend, Vite and React for the frontend, Redux for state management, Tailwind CSS for styling, and cryptography for secure authentication.

## Features
- **User Authentication:** Secure user authentication using cryptographic techniques.
- **Course Management:** Browse, search, and filter courses.
- **Subscription:** Purchase and subscribe to courses.
- **User Dashboard:** Manage enrolled courses and track progress.
- **Admin Panel:** Add, update, and delete courses.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** Vite, React
- **State Management:** Redux
- **Styling:** Tailwind CSS
- **Authentication:** Cryptography for secure login and signup

## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/course-subscription-platform.git
    cd course-subscription-platform/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory.
    - Add the following variables:
      ```env
      PORT=5000
      MONGODB_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `frontend` directory.
    - Add the following variables:
      ```env
      VITE_API_URL=http://localhost:5000
      ```

4. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage
1. Register a new user or log in with existing credentials.
2. Browse the available courses.
3. Subscribe to courses of interest.
4. Access the user dashboard to view and manage your enrolled courses.
5. Admin users can access the admin panel to manage course content.

## Project Structure
```plaintext
course-subscription-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── main.jsx
│   └── vite.config.js
└── README.md
