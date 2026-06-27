## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repo
```bash
   git clone https://github.com/prathameshbidkar98-sys/VertexMind-Mission-4.git
```

2. Install backend dependencies
```bash
   cd backend
   npm install
```

3. Install frontend dependencies
```bash
   cd frontend
   npm install
```

4. Set up environment variables
```bash
   # In backend/.env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
```

5. Run the app
```bash
   # Run backend (from /backend)
   npm run dev

   # Run frontend (from /frontend)
   npm run dev
```

## Tech Stack
- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Auth:** JWT, bcryptjs
