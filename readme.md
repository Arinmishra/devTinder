# DevTinder (Backend)

## 🚀 About the Project

The backend for **DevTinder**, a developer matchmaking platform, provides authentication, user requests, and real-time interactions using a scalable and efficient architecture.

## 🛠️ Features

- 🔑 **User Authentication** (JWT-based login/signup/logout)
- 🏷 **Profile Management** (View and update developer profiles)
- 🔗 **Connection Requests** (Send, review, and manage requests)
- 🤝 **User Connections** (Track and manage accepted connections)
- 💬 **Real-Time Chat** (Instant messaging between connected users)
- 🌍 **Feed System** (Discover and interact with other developers)
- 📊 **Database Integration** (Efficient data storage and retrieval)
- 🚀 **Scalable API** (RESTful API with proper endpoints)

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Real-time Communication**: Socket.io
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
git clone https://github.com/your-username/devtinder.git

# Navigate to project directory
cd devtinder

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
| GET    | `/chat/:targetUserId`                | Fetch or create a chat between two users       |

## ⚡ Real-Time Chat (WebSockets)

### **How It Works**

- Uses **Socket.io** to enable real-time messaging between connected users.
- Ensures only **accepted connections** can chat.
- Listens for and emits events such as:
  - `joinChat` → A user joins a chat room.
  - `sendMessage` → A user sends a message.
  - `receiveMessage` → The recipient gets the message instantly.

### **Example Socket Events**

```javascript
socket.emit("joinChat", chatId);  // Join a chat room
socket.emit("sendMessage", { chatId, senderId, message });  // Send message
socket.on("receiveMessage", (newMessage) => { ... });  // Receive messages
```

## 🛠️ Future Improvements

- 📅 **Scheduled Matching System**
- 🌎 **Multi-language Support**
- 🎯 **Advanced Search & Filtering**
- 🤖 **AI-powered Recommendations**
- 📡 **Video & Voice Calls** (WebRTC)

## 📬 Contact

If you have any questions or suggestions, feel free to reach out! 🚀
