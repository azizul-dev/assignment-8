# 🎓 SkillSphere — Online Learning Platform

![SkillSphere Banner](./images/1.png)

## 🌐 Live Demo

🔗 [https://assignment-8-eta-two.vercel.app](https://assignment-8-eta-two.vercel.app)

---

## 📌 About The Project

SkillSphere is a modern, fully responsive online learning platform where users can explore courses, filter by category, search by keyword, and manage their profile. Built with Next.js 15, Better Auth, and MongoDB.

![Features](./images/3.png)

---

## ✨ Key Features

- 🔐 **Google OAuth Login** — Sign in with Google using Better Auth
- 📧 **Email & Password Auth** — Register and login with credentials
- 📚 **Course Browsing** — Explore all available courses
- 🔍 **Search & Filter** — Filter by category, search by keyword
- 👤 **User Profile** — View and update profile information
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- ⚡ **Fast Loading** — Page-level loading with CircleLoader

![Responsive Design](./images/2.png)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | Frontend Framework |
| Better Auth | Authentication |
| MongoDB | Database |
| Mongoose | ODM |
| Tailwind CSS | Styling |
| DaisyUI | UI Components |
| React Hook Form | Form Handling |
| React Toastify | Notifications |
| date-fns | Date Formatting |

---

## 📦 NPM Packages Used

```bash
better-auth
mongoose
react-hook-form
react-toastify
react-spinners
date-fns
next
tailwindcss
daisyui
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/azizul-dev/assignment-8.git

# Navigate to project directory
cd assignment-8

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### Environment Variables

```env
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure