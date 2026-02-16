# 📒 Smart Notes

A simple and secure **full-stack note-taking web application** built with **React (Vite)** on the frontend and **Node.js + Express + MongoDB (Mongoose)** on the backend.
Each user can sign up, log in, and manage their own notes — create, update, delete and view notes securely using JWT authentication.

---

## 🧠 Features

✅ User Authentication
✔ Sign up & Sign in
✔ JWT based login
✔ Protected routes

📝 Notes Management
✔ Create new notes
✔ View all notes
✔ Update notes
✔ Delete notes
✔ Only logged-in users can see their own notes

---

## 📦 Tech Stack

**Frontend**

| Technology             | Purpose        |
| ---------------------- | -------------- |
| React (Vite)           | UI Library     |
| Axios                  | API requests   |
| React Router           | Client routing |
| React Hot Toast        | Notifications  |
| Tailwind CSS + DaisyUI | Styling        |

**Backend**

| Technology      | Purpose          |
| --------------- | ---------------- |
| Node.js         | Runtime          |
| Express         | Server           |
| MongoDB         | Database         |
| Mongoose        | MongoDB ORM      |
| JSON Web Tokens | Authentication   |
| Bcrypt          | Password hashing |

---

## 🧩 Project Structure

```
smart-notes/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── app.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   └── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### 🛠 Requirements

- Node.js (v14+)
- NPM or Yarn
- MongoDB (Local / Atlas)

---

## 🔧 Installation

### 1) Clone the Repo

```bash
git clone https://github.com/Abdul-Rafay-Munir/smart-notes.git
cd smart-notes
```

---

## 🧬 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=supersecretkey
```

Run the backend:

```bash
npm run dev
```

---

## ⚛️ Frontend Setup

```bash
cd frontend
npm install
```

Update API base URL (if needed):
📍 `frontend/src/lib/axios.js`

```js
baseURL: "http://localhost:5001/api",
```

Run frontend:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User signs up → stored in MongoDB
2. User logs in → backend returns a JWT
3. Frontend saves token in `localStorage`
4. Axios sends token with every request
5. Backend verifies token → user data attached to `req.user`

---

## 🧪 Supported API Endpoints

### 👤 Authentication

| METHOD | URL                | Access |
| ------ | ------------------ | ------ |
| POST   | `/api/auth/signup` | Public |
| POST   | `/api/auth/signin` | Public |
| POST   | `/api/auth/logout` | Public |

---

### 📝 Notes

| METHOD | URL              | Access    |
| ------ | ---------------- | --------- |
| GET    | `/api/notes`     | Protected |
| GET    | `/api/notes/:id` | Protected |
| POST   | `/api/notes`     | Protected |
| PUT    | `/api/notes/:id` | Protected |
| DELETE | `/api/notes/:id` | Protected |

---

## 🧠 Frontend Routes

| Path        | Component      | Auth Protected |
| ----------- | -------------- | -------------- |
| `/signin`   | SignInPage     | ❌             |
| `/signup`   | SignUpPage     | ❌             |
| `/`         | HomePage       | ✔              |
| `/create`   | CreatePage     | ✔              |
| `/note/:id` | NoteDetailPage | ✔              |

---

## 🙌 Contributing

Contributions are welcome!
Feel free to open issues or submit PRs.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💬 Contact

Built by **Abdul Rafay Munir**
GitHub: [https://github.com/Abdul-Rafay-Munir](https://github.com/Abdul-Rafay-Munir)
