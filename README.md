
# 📚 LearnHub – Master Essential Skills for Modern Success

**LearnHub** is a modern, interactive learning platform designed to help professionals and learners acquire today’s most in-demand skills.  
From **Entrepreneurship** and **Product Management** to **AI for Business Leaders**, LearnHub offers curated content, expert-led lectures, and a built-in tracking system to monitor learning engagement.

***

## 🚀 Technology Stack

### Frontend
- **React 18 + Vite** for fast and modern frontend development
- **TypeScript** for type safety
- **Tailwind CSS** for responsive, modern UI
- **React Router** for smooth client-side navigation
- **Lucide Icons** for clean, scalable iconography
- **Shadcn/UI** (if using – assumed from styling pattern)

### Backend
- **Node.js + Express.js** for robust API handling
- **MongoDB** (via Mongoose ODM) for data persistence
- **Session-based Authentication** with **Demo User Login**
- **CORS** enabled for frontend-backend communication
- **Click & Page Tracking System** with storage in logs

### Development Tools
- **Nodemon** for auto-restart in backend dev
- **ESLint & Prettier** for clean, consistent code
- **Git** for version control

***

## 📁 Project Structure

```
learnhub/
├── backend/                  # Backend Node.js application
│   ├── app.js                 # Main Express server
│   ├── models/                # Mongoose models
│   ├── routes/                # API endpoints
│   ├── utils/                  # Utility & tracking functions
│   ├── package.json
│   └── logs.csv                # User activity logs
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/         # Reusable UI parts
│   │   ├── pages/              # Page views (Home, Course, Lecture)
│   │   ├── data/               # Course data
│   │   ├── types/              # Type definitions
│   │   └── main.tsx            # App entry
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

***

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB (local or Atlas)
- Git

### 1. Clone & Setup
```bash
git clone 
cd learnhub
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env
# MONGODB_URI=mongodb://localhost:27017/learnhub
# SESSION_SECRET_KEY=your_secret
# FRONTEND_URL=http://localhost:5173
# PORT=3000
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
# Create .env
# VITE_BACKEND_URL=http://localhost:3000
npm run dev
```

***

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/learnhub
SESSION_SECRET_KEY=your_secret
FRONTEND_URL=http://localhost:5173
PORT=3000
```

### Frontend (.env)
```
VITE_BACKEND_URL=http://localhost:3000
```

***

## 📱 Application Features

### 🔐 Demo & Authentication
- Select from demo users (**John Doe**, **Jane Smith**, **Bob Wilson**)
- In production: integrate with your real authentication system

### 📚 Course Offerings
| Level       | Course Name                         | Duration | Lectures | Instructor         |
|-------------|-------------------------------------|----------|----------|--------------------|
| Beginner    | Modern Entrepreneurship Fundamentals| 8 weeks  | 10       | Sarah Chen         |
| Intermediate| Strategic Product Management        | 10 weeks | 10       | Michael Rodriguez  |
| Beginner    | Digital Marketing Mastery           | 12 weeks | 10       | Emma Thompson      |
| Beginner    | Personal Finance & Wealth Building  | 6 weeks  | 10       | David Park         |
| Intermediate| AI for Business Leaders             | 8 weeks  | 10       | Dr. Lisa Wang      |

### 📊 Tracking System
- All **page views** and **click events** logged with user email, timestamp, and action
- Data saved to `backend/logs.csv` for analysis

### 🎨 Modern UI
- Fully responsive layout
- Sleek Tailwind CSS design
- Intuitive navigation with clear CTAs

***

## 🗺️ Navigation Flow
1. **Home Page** → View course catalog
2. **Course Details** → Learn about curriculum
3. **Lecture Pages** → Watch content
4. **Tracking** → System logs interactions
5. **Profile (Planned)** → Track your progress

***

## 📈 Analytics & Monitoring
- **Event Context**: Course / Page
- **Event Name**: Click, Page View
- **Description**: Detailed user action notes
- **User Tracking**: Linked to authenticated user

***

## 🚀 Deployment
- **Backend**: Deploy to Heroku / Railway / Render
- **Frontend**: Deploy to Netlify / Vercel
- **MongoDB**: Use MongoDB Atlas for cloud storage

***

## 🔮 Future Enhancements
- Real user authentication
- Progress tracking dashboard
- Certificates for completed courses
- Payment integration for premium access
- Instructor course creation tools

***

## 🆘 Support
If you run into issues:
1. Check browser console for frontend errors  
2. Verify `.env` variables  
3. Confirm MongoDB connection  
4. Ensure backend is running before frontend

***

✅ **LearnHub** is your gateway to mastering skills for the modern workplace — Built for learners, by experts.



Do you want me next to **add screenshots and badges** so your README looks like a polished open-source project on GitHub? That would make it look more like TechLearn Academy’s professional README.
