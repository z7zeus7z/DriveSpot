# 🚗 DriveSpot – Full-Stack Car Rental Platform

**DriveSpot** is a modern full-stack car rental web application built with **React (Vite)**, **Node.js / Express**, and **MongoDB Atlas**.  
It allows users to browse, filter, and rent cars online — with a secure backend and admin management system (restricted).

🌐 **Live Demo:** [https://drive-spot.vercel.app](https://drive-spot.vercel.app)  
⚙️ **Backend API:** [https://drivespot.onrender.com](https://drivespot.onrender.com)  
💻 **Repository:** [https://github.com/z7zeus7z/DriveSpot](https://github.com/z7zeus7z/DriveSpot)

---

## 🧰 Tech Stack

**Frontend:**
- React (Vite)
- React Router
- CSS Modules
- Font Awesome

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (image uploads)
- JWT Authentication
- bcrypt.js
- dotenv

**Hosting:**
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## ⚙️ Features

### 👤 User Features
- Browse all cars with details and images
- Filter cars by **type**, **capacity**, and **price**
- View full car details
- Secure user registration and login
- Rent a car through a simple and clean interface

### 🧩 Admin Features (Restricted Access)
- Manage car listings (Add / Edit / Delete)
- Upload multiple car images
- Protected admin panel (not publicly accessible)

> ⚠️ *For security reasons, the admin dashboard is restricted and not accessible in the public demo.*

---

## 🖼️ Screenshots

### 🏠 Homepage & Cars Page
![DriveSpot Homepage](https://raw.githubusercontent.com/z7zeus7z/DriveSpot/refs/heads/main/assets/drive-spot.vercel.app_%201.png)

### 🚘 Car Details Page & Filters
![DriveSpot Car Details](https://raw.githubusercontent.com/z7zeus7z/DriveSpot/refs/heads/main/assets/drive-spot.vercel.app_%202.png)

### 🔐 Login Page
![DriveSpot Login](https://raw.githubusercontent.com/z7zeus7z/DriveSpot/refs/heads/main/assets/drive-spot.vercel.app_%203.png)

### 🧾 Admin – List Car *(Restricted)*
![Admin List Car](https://raw.githubusercontent.com/z7zeus7z/DriveSpot/refs/heads/main/assets/drive-spot.vercel.app_%204.png)

### 📁 Admin – Manage Cars *(Restricted)*
![Admin Manage Cars](https://raw.githubusercontent.com/z7zeus7z/DriveSpot/refs/heads/main/assets/drive-spot.vercel.app_%205.png)

---

## 🗂️ Project Structure

```
DriveSpot/
│
├── Client/               # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── .env
│
├── Server/               # Express backend
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Uploads/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/z7zeus7z/DriveSpot.git
cd DriveSpot
```

### 2️⃣ Install Dependencies
**Frontend**
```bash
cd Client
npm install
```

**Backend**
```bash
cd ../Server
npm install
```

### 3️⃣ Configure Environment Variables

**Server/.env**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Client/.env**
```
VITE_API_URL=http://localhost:5000/api
```

### 4️⃣ Run the App Locally
**Backend:**
```bash
cd Server
npm start
```

**Frontend:**
```bash
cd ../Client
npm run dev
```

Then open → [http://localhost:5173](http://localhost:5173)

---

## 🧠 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/api/users/register` | Register new user |
| **POST** | `/api/users/login` | User login |
| **GET** | `/api/cars` | Fetch all cars |
| **POST** | `/api/cars` | Add new car *(Admin only)* |
| **PUT** | `/api/cars/:id` | Update car *(Admin only)* |
| **DELETE** | `/api/cars/:id` | Delete car *(Admin only)* |

---

## 🌟 Future Improvements
- Payment integration (Stripe)
- “My Rentals” user dashboard
- Enhanced UI animations and loading states
- Dark mode

---

## 👨‍💻 Author

**Zaid Sabbah**  
💼 Full-Stack Developer  
📍 Jordan  
📧 [zaidsabbah89@gmail.com](mailto:zaidsabbah89@gmail.com)

---

## 🏁 Summary
DriveSpot is a complete full-stack project showcasing React, Node.js, and MongoDB integration, deployed entirely on cloud platforms.  
It’s secure, fast, and designed to reflect real-world software engineering practices — perfect for portfolios and technical interviews.
