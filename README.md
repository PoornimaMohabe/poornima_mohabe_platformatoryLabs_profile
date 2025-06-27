# 🌐 Platformtory Profile App – By Purnima Mohabe

A full-stack profile management app built with:
- 🧠 Google OAuth Login (Passport.js)
- 📦 Backend (Node.js + Express + MongoDB)
- 🎨 Frontend (React + Tailwind CSS)
- ⚙️ Workflow Orchestration with [Temporal.io](https://temporal.io/)
- 🌐 Data mirrored to [CrudCrud](https://crudcrud.com) with delay

---

## 📁 Folder Structure
📦 poornima_mohabe_platformtoryLabs_profile
├── backend
│ ├── auth
│ ├── config
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── services
│ ├── index.js
│ └── .env
├── frontend_profile-app
│ ├── public
│ └── src
│ ├── assets
│ ├── context
│ └── pages
│ ├── LoginPage.jsx
│ ├── ProfilePage.jsx
│ └── EditProfilePage.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── App.css
├── temporal
│ ├── activities.js
│ ├── client.js
│ ├── worker.js
│ └── workflows.js


---

## 🚀 Features

- 🔐 Google Login using Passport.js
- 📋 View and edit user profile
- ✅ Profile updates trigger **Temporal workflow**
- ⏱️ 10s delay → then push to [CrudCrud](https://crudcrud.com)
- 🌍 Fully styled with Tailwind CSS
- 🧪 All data persisted in MongoDB

---

## ⚙️ How to Run Locally

### 1️⃣ Backend (Express + MongoDB + Passport

## Run backend
cd backend
npm install
npm start

GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
MONGO_URL=your_mongo_uri
SESSION_SECRET=some_secret

### Frontend (React + Tailwind)

cd temporal
npm install
npx ts-node worker.js
☑️ Must run alongside backend. Worker will listen to profile-task-queue and execute workflow with a 10s delay to push data to CrudCrud

🛠 Deployment
✅ Frontend deployed on: Vercel
* Live link 
###  https://poornima-mohabe-platformatory-labs.vercel.app/

## Home Page
![Home Page](https://github.com/PoornimaMohabe/poornima_mohabe_platformatoryLabs_profile/blob/main/frontend/profile-app/src/assets/images/Profile.png?raw=true)

## Profile Page
![Vendors Page](https://github.com/PoornimaMohabe/poornima_mohabe_platformatoryLabs_profile/blob/main/frontend/profile-app/src/assets/images/image.png?raw=true)


📡 API Endpoints
Method	Endpoint	Description
GET	/auth/google	Google login
GET	/auth/google/callback	OAuth callback
GET	/api/profile/:id	Fetch user by ID
POST	/api/profile/	Create new profile
PUT	/api/profile/:id	Update profile via Temporal

🔄 Temporal Workflow Description
Triggered on user update

Adds a 10-second delay

Then pushes profile to CrudCrud

All done asynchronously via Temporal Worker

🧪 Test Credentials
You can create Google OAuth keys here: https://console.developers.google.com
Or use existing keys and replace in .env.

🧼 Best Practices Followed
Component-based React architecture

Modular backend routing and services

Environment variables for secrets

Async error handling

Worker-based orchestration (Temporal)

🤝 Contact
Developed by: Purnima Mohabe
Reach out on: LinkedIn






