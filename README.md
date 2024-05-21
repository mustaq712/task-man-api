

## Task Management App: Get Organized and Efficient!

This web application helps you conquer your to-do list!  Create, manage, and prioritize your tasks with ease. Perfect for busy individuals or anyone who wants to streamline their workflow.

**Key Features:**

* **Stay on Top:**  Create new tasks, update existing ones, mark them complete, and delete them as needed.
* **Prioritize Wisely:**  Set priorities for your tasks so you can focus on the most important ones.
* **Filter and Find Quickly:**  Easily filter your tasks based on their completion status (All, Completed, Pending) to quickly find what you need.
* **Secure Login:**  Register and log in securely with a user account.

**Built with Modern Technologies:**

*  **Frontend:** A smooth and responsive interface built with React, Bootstrap, and Material-UI.
*  **Backend:** Powerful functionalities powered by Express.js, MongoDB, and Mongoose.
*  **Deployment:** Easy deployment to Vercel for a seamless user experience.

**Getting Started (Easy as 1, 2, 3!):**

This guide walks you through setting up and running the application on your local machine. 

**Prerequisites:**

* Node.js and npm (Node Package Manager) installed on your system.
* A MongoDB database.

**Installation:**

1. **Clone the Repository:** Use Git to clone the project from GitHub.

```bash
git clone https://github.com/mustaq712/task-man.git
cd task-man-app
```

2. **Backend Setup:**

   Navigate to the `backend` directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

   **Environment Variables:**

   Create a `.env` file in the backend directory and add the following environment variables:

   ```
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   * `MONGO_URI`: The connection string for your MongoDB database.
   * `JWT_SECRET`: A secret key for signing JWT tokens. Keep this confidential!
   * `PORT`: The port on which the backend server will run (default is 5000).

   **Run the Backend Server:**

   ```bash
   npm start
   ```

   The backend server will start on the specified port.

3. **Frontend Setup:**

   Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

   **Run the Frontend Server:**

   ```bash
   npm start
   ```

   The frontend server will start on port 3000 by default.

**Deployment (Vercel - Frontend and Backend):**

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel
   ```

**Usage:**

* Register a new user or log in with existing credentials.
* Create new tasks, update existing tasks, or delete tasks.
* Filter tasks based on their completion status and priority.
* Update user profile information and change the password.

**Contributing:**

We welcome contributions! Feel free to fork the repository and create pull requests with your improvements.

