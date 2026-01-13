# Referral Management System

A **full‑stack Referral Management System** built using the **MERN stack** that streamlines the process of submitting, managing, and reviewing candidate referrals. The application supports secure authentication, resume uploads via cloud storage, and a clean admin‑friendly workflow.

---

## ✨ Features

### 👤 User Side

* Submit candidate referral details
* Upload resumes (PDF supported)
* Secure authentication (JWT based)
* Responsive UI

### 🛠 Admin Side

* View all referred candidates
* Access uploaded resumes
* Track referral records
* Secure protected routes

### 🔐 Security

* JWT authentication & authorization
* Environment‑based configuration
* Secure file upload handling

---

## 🧰 Tech Stack

### Frontend

* **React.js** (with Vite)
* **Axios** – API communication
* **React Router DOM** – Routing
* **Tailwind CSS** – Styling

### Backend

* **Node.js**
* **Express.js** – REST API
* **MongoDB Atlas** – Database
* **Mongoose** – ODM
* **JWT (JSON Web Token)** – Authentication
* **Bcrypt.js** – Password hashing

### File Upload & Storage

* **Multer** – File handling
* **Cloudinary** – Resume storage

### Deployment

* **Backend**: Render / Vercel
* **Frontend**: Vercel / Netlify
* **Database**: MongoDB Atlas

---

## 📁 Project Structure

### Backend Structure

```
backend/
│── controllers/
│   ├── authController.js
│   └── candidateController.js
│
│── models/
│   ├── User.js
│   └── Candidate.js
│
│── routes/
│   ├── authRoutes.js
│   └── candidateRoutes.js
│
│── middleware/
│   ├── authMiddleware.js
│   └── uploadMiddleware.js
│
│── config/
│   ├── db.js
│   └── cloudinary.js
│
│── server.js
│── .env
```

### Frontend Structure

```
frontend/
│── src/
│   ├── components/
│   │   ├── ReferralForm.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
│── vite.config.js
```

---

## 🔄 Application Flow

1. **User Authentication**

   * User logs in
   * Backend validates credentials
   * JWT token generated and sent to frontend

2. **Referral Submission**

   * User fills referral form
   * Resume uploaded via Multer
   * File stored on Cloudinary
   * Metadata saved in MongoDB

3. **Admin Review**

   * Admin fetches candidate list
   * Resume accessible via Cloudinary URL

4. **Authorization**

   * Protected routes validated using JWT middleware

---

## 🚀 Deployment Guide (Summary)

### Backend

1. Push backend to GitHub
2. Deploy on Render / Vercel
3. Add environment variables
4. Verify MongoDB & Cloudinary connectivity

### Frontend

1. Update API base URL
2. Build using `npm run build`
3. Deploy on Vercel / Netlify
4. Add SPA rewrite rules

---

## 🧪 Testing

* API tested using **Postman**
* File uploads verified via Cloudinary dashboard
* Authentication tested for protected routes

---

## 📌 Future Enhancements

* Role‑based access control (Admin/User)
* Referral status tracking
* Email notifications
* Search & filter candidates
* Dashboard analytics

---

## 👨‍💻 Author

**Kartik Garg**
MERN Stack Developer

---

## ⭐ Notes

This project is designed to be **production‑ready**, scalable, and suitable for real‑world enterprise referral workflows. It demonstrates strong backend fundamentals, clean frontend architecture, and real deployment experience.
