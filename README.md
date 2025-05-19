# 📚 Personal Study Planner – MERN Stack Authentication System

The **Personal Study Planner** is a full-stack web application built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It includes user **authentication** (sign up, log in, log out) and **protected dashboard features** using **JWT (JSON Web Tokens)** and **HTTP-only cookies** for secure session management.

This `README.md` file provides a step-by-step guide on setting up, running, and securing the application. The document includes architecture details, components, routes, security measures, and deployment suggestions.

---

## 🛠️ Tech Stack

### 🌐 Frontend (React.js)
- React v18+
- Axios for API calls
- React Router for page routing
- Context API for auth state (optional)

### 🚀 Backend (Node.js + Express.js)
- Express.js
- MongoDB + Mongoose
- bcrypt for password hashing
- JSON Web Token (JWT)
- cookie-parser for secure cookie handling

### 🗃️ Database
- MongoDB (Local or Cloud via MongoDB Atlas)

---

## 📁 Project Structure
study-planner/
├── backend/
│ ├── controllers/
│ │ └── authController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── .env
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ └── Dashboard.js
│ │ ├── App.js
│ │ ├── index.js
│ └── package.json

---

## 🔐 Authentication Flow (Step-by-Step)

1. **User registers** via the React frontend
2. Password is hashed and saved in MongoDB
3. **JWT token is generated** on login
4. Token is stored in a **secure HTTP-only cookie**
5. Protected routes verify token before giving access

---

## 🔙 Backend Setup

### 1. Install Dependencies

In the `backend/` folder:

```bash
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser cors
