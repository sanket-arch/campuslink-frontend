# 📚 Campus Link - Frontend

Campus Link is a platform designed to connect students across various courses and campuses.  
The frontend is built using **Next.js** and styled with **TailwindCSS**, ensuring a fast and modern user experience.  
The application runs inside a **Docker container** for consistency and easy deployment.

---

## 🚀 Features
- 📖 Student queries, reviews, and marketplace integration  
- 🏫 Campus-based segregation of users and content  
- 🧑‍🏫 Reviews for hostels, professors, and mess facilities  
- 🔒 JWT-based authentication & role-based access  
- 🎨 Modern UI with **Next.js** + **TailwindCSS**  

---

## 🛠️ Tech Stack
- **Frontend Framework:** Next.js (React + SSR)  
- **Styling:** TailwindCSS  
- **Authentication:** JWT integration with backend  
- **Containerization:** Docker & Docker Compose  

---

## 📦 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (if running locally without Docker)  
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)  

---

### Running with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/campus-link-frontend.git
   cd campus-link-frontend
   ```

2. Build and run the Docker container:
   ```bash
   docker-compose up --build
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

### Running Locally (without Docker)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📝 Project Structure

- `/src/app` - Main Next.js application code
- `/src/components` - Reusable UI components
- `/src/store` - Redux store and actions
- `/public` - Static assets
- `/Dockerfile` - Docker configuration
- `/docker-compose.yml` - Docker Compose setup

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---