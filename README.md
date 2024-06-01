# Drag & Drop To Do List

This is a MERN stack application for managing a to-do list with drag-and-drop functionality. It utilizes Tailwind CSS for styling.

## Screenshot
![Screenshot (20)](https://github.com/mantukumaryadav/Drag-Drop-To-Do-List/assets/65592276/2a192db8-7018-4c61-b6e4-3fdb44dcfc47)
![Screenshot (21)](https://github.com/mantukumaryadav/Drag-Drop-To-Do-List/assets/65592276/3dd19dd6-82f2-4768-a1d4-af867aff731a)
![Screenshot 2024-06-01 100050](https://github.com/mantukumaryadav/Drag-Drop-To-Do-List/assets/65592276/0df2b8d6-bbd9-4ff0-8739-833055a54ee4)



## Features

- Add new tasks with a title and description.
- Drag and drop tasks to change their status.
- Task statuses: Pending, In Progress, Completed.
- Responsive design using Tailwind CSS.
  
## Installation

### Prerequisites

Make sure you have the following installed:

- React.js
- Tailwind css
- Node.js
- MongoDB
- Express.js

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/mantukumaryadav/Drag-Drop-To-Do-List.git
    cd Drag-Drop-To-Do-List
    ```

2. Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You can now add, update, and delete tasks.
3. Drag and drop tasks to change their status (Pending, In Progress, Completed).

## Technologies

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **State Management**: React Hooks
- **Drag-and-Drop**: `react-beautiful-dnd`
- **HTTP Client**: Axios


