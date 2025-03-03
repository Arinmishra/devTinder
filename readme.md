# DevTinder (Backend)

## 🚀 About the Project

The backend for **DevTinder**, a developer matchmaking platform, provides authentication, user requests, and real-time interactions using a scalable and efficient architecture.

## 🛠️ Features

- 🔑 **User Authentication** (JWT-based login/signup/logout)
- 🏷 **Profile Management** (View and update developer profiles)
- 🔗 **Connection Requests** (Send, review, and manage requests)
- 🤝 **User Connections** (Track and manage accepted connections)
- 🌍 **Feed System** (Discover and interact with other developers)
- 📊 **Database Integration** (Efficient data storage and retrieval)
- 🚀 **Scalable API** (RESTful API with proper endpoints)

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
  <!-- - **Real-time Communication**: Socket.io (if chat is included) -->
  <!-- - **Deployment**: Render / DigitalOcean / AWS -->
- **API Testing**: Postman

## 📂 Folder Structure

```
DevTinder-Backend/
│── src/
│   │── config/
│   │── middleware/
│   │── models/
│   │── routes/
│   │── utils/
│── .gitignore
│── package-lock.json
│── package.json
│── README.md
```

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/devtinder-backend.git

# Navigate to project directory
cd devtinder-backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

## 📡 API Endpoints

| Method | Endpoint                             | Description                                    |
| ------ | ------------------------------------ | ---------------------------------------------- |
| POST   | `/auth/signup`                       | Register a new user                            |
| POST   | `/auth/login`                        | Login and get token                            |
| POST   | `/auth/logout`                       | Logout the user                                |
| GET    | `/profile/view`                      | View user profile                              |
| PATCH  | `/profile/edit`                      | Edit user profile                              |
| POST   | `/request/send/:status/:toUserId`    | Send a connection request (interested/ignored) |
| POST   | `/request/review/:status/:requestId` | Review a request (accept/reject)               |
| GET    | `/user/request/received`             | View received connection requests              |
| GET    | `/user/connections`                  | View accepted connections                      |
| GET    | `/feed`                              | View developer feed                            |

<!-- ## 🚀 Deployment

The backend is deployed on **[Your Hosting Platform]**. -->

## 🛠️ Future Improvements

- 📅 **Scheduled Matching System**
- 🌎 **Multi-language Support**
- 🎯 **Advanced Search & Filtering**
- 📡 **WebSocket for real-time updates**
- 💬 **realtime communication**

## 📬 Contact

If you have any questions or suggestions, feel free to reach out! 🚀
