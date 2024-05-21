# Task Management Application

## Overview

The Task Management Application is a web-based tool that allows users to manage their tasks efficiently. The app provides functionalities for creating, updating, and deleting tasks, as well as filtering tasks based on their status and priority.

## Features

- User Authentication (Register/Login)
- Create, Read, Update, and Delete (CRUD) operations for tasks
- Task filtering by status (All, Completed, Pending)
- Task prioritization
- User profile management

## Technologies Used

- **Frontend**: React, Bootstrap, Material-UI
- **Backend**: Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel
## Setup and Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

   bash
   git clone https://github.com/mustaq712/task-man.git
   cd task-man-app
 ### Backend Setup

**2. Navigate to the `backend` directory and install dependencies:**

bash
cd backend
npm install
Environment Variables
Create a .env file in the backend directory and add the following environment variables


MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
MONGO_URI: The connection string for your MongoDB database.
JWT_SECRET: A secret key for signing JWT tokens. This key should be kept confidential.
PORT: The port on which the backend server will run (default is 5000).
Run the Backend Server
bash

npm start
The backend server will start on the specified port.

### Frontend Setup
Navigate to the frontend directory and install dependencies:

bash

cd ../frontend
npm install
Run the Frontend Server
bash

npm start
The frontend server will start on port 3000 by default.

### Deployment
Vercel (Frontend and Backend)
Install Vercel CLI:
bash

npm i -g vercel
Login to Vercel:
bash

vercel login
Deploy:
bash

vercel

### Usage
Register a new user or log in with existing credentials.
Create new tasks, update existing tasks, or delete tasks.
Filter tasks based on their completion status and priority.
Update user profile information and change the password.
Contributing
## Contributions are welcome! Please fork the repository and create a pull request with your changes.
