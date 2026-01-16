# Blog Manager

A professional, responsive blog management system built with the Node,Express and Mongo DB

## Features

- **Full CRUD Functionality**: Create, read, update, and delete blog posts in real-time.
- **Responsive Dashboard**: A full-width, mobile-first design using CSS Grid and Flexbox.
- **Smart Timestamps**: Automatically tracks and displays when a post was created or last modified.
- **Programmer-Focused UI**: Sticky forms for easy content creation while browsing the feed.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: HTML5, CSS3 (Custom Variables), Vanilla JavaScript (ES6+)

## Project Structure

```text
├── controllers/
│   └── blogController.js   # API logic (CRUD operations)
├── models/
│   └── Blog.js             # Mongoose Schema (Title, Author, Body, Timestamps)
├── routes/
│   └── blogRoutes.js       # Express Router definitions
├── public/
│   ├── index.html          # Main dashboard entry point
│   ├── style.css           # Custom responsive styling
│   └── script.js           # Frontend API handling & DOM
└── server.js               # Entry point for the Node server
```

## Getting Started

### 1. Prerequisites

- Node.js installed
- MongoDB Atlas account or local MongoDB instance

### 2.Installation

- Clone the repository:

```
git clone  https://github.com/almatmz/Blog-Management
cd devblog-manager
```

Install dependencies:

```
npm install
```

### 3. Environment Setup

Create a .env file in the root directory and add your credentials:

```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
```

### 4. Run the Application

```
node server
```

The application will be available at http://localhost:3000.

### API Endpoints:

- GET/blogs
- GET/blogs/:id
- POST/blogs
- PUT/blogs/:id
- DELETE/blogs/:id
