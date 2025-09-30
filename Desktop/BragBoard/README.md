# 🏆 BragBoard - Employee Recognition System

A modern internal employee recognition system built with React and FastAPI.

## 🚀 Features

- User authentication (Register/Login)
- JWT-based security
- PostgreSQL database
- Modern React frontend with TypeScript
- RESTful API backend
- Admin panel for user management

## 🛠️ Technology Stack

### Frontend
- React 19.1.1 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- FastAPI (Python)
- PostgreSQL database
- SQLAlchemy ORM
- JWT authentication
- Pydantic for data validation

## ⚡ Quick Start

### Prerequisites
- Node.js 16+
- Python 3.8+
- PostgreSQL 12+

### Backend Setup
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Database Setup
1. Install PostgreSQL
2. Create database: `bragboard_db`
3. Update `.env` file with your database credentials
4. Tables will be created automatically on first run

## 📋 Environment Variables

Create a `.env` file in the backend directory:

```properties
DATABASE_URL=postgresql://bragboard_user:bragboard_password@localhost:5432/bragboard_db
SECRET_KEY=your-secret-key-here-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_DAYS=7
FRONTEND_URL=http://localhost:3000
```

## 🌐 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login

### Admin
- `GET /admin/users` - Get all users
- `GET /admin/users/count` - Get user count
- `GET /admin/users/search/{email}` - Search user by email
- `GET /admin/users/department/{department}` - Get users by department

## 🔧 Development

### Backend Development
```bash
cd backend
.venv\Scripts\activate
python main.py
```
Server runs on: http://localhost:8001

### Frontend Development
```bash
cd frontend
npm start
```
Client runs on: http://localhost:3000

## 📁 Project Structure

```
BragBoard/
├── backend/                # FastAPI backend
│   ├── app/
│   │   ├── core/          # Configuration and security
│   │   ├── models/        # Database models and schemas
│   │   └── routers/       # API endpoints
│   ├── main.py            # Application entry point
│   └── requirements.txt   # Python dependencies
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── services/      # API services
│   └── package.json       # Node dependencies
└── README.md
```

## 🔐 Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS configured for frontend access
- Environment variables for sensitive data

## 📝 License

This project is for internal use only.