# 🏆 PlayNearby - Connect, Play, Conquer!


> **Local Sports & Indoor Games Partner Finder Platform(playnearby)**  
> Level up your game with the perfect partner. Find, host, and join sports matches in your neighborhood effortlessly.

---

## 📖 Description

**PlayNearby** is a highly interactive, location-based platform designed to bridge the gap between sports enthusiasts. Whether you are looking for a badminton partner, a football team, or a chess rival, PlayNearby helps you find like-minded players in your vicinity. Built with a focus on real-time interaction and seamless user experience, it turns your local area into a giant sports arena.

---

## 🚀 Live Demo
✨ https://play-nearby-two.vercel.app
---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4.0 (Vanilla CSS Architecture)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & Database
- **Server**: Next.js Server Actions
- **Database**: MongoDB (Atlas)
- **ORM**: Prisma
- **Authentication**: JWT (jose) & Password Hashing (bcryptjs)

---

## ✨ Features

- 📍 **Location-Based Discovery**: Find matches and players nearby using real-time geolocation.
- 🎮 **Multi-Sport Support**: From indoor games like Chess and Table Tennis to outdoor sports like Football and Cricket.
- 🤝 **Match Hosting**: Create your own matches, set the venue, time, and number of players.
- 💬 **Smart Requests**: Send and receive "Play Requests" to connect with potential partners.
- 🔔 **Real-time Notifications**: Stay updated with match confirmations and player requests.
- 👤 **Dynamic Profiles**: Showcase your skill levels (Beginner, Intermediate, Pro) and sport preferences.
- 🌓 **Aesthetic Dark Mode**: A premium, eye-friendly design for all-day usage.

---
---

## 📥 Installation Guide

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Play-Nearby.git
   cd Play-Nearby
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your credentials:
   ```env
   DATABASE_URL="your_mongodb_connection_string"
   JWT_SECRET="your_jwt_secret"
   ```

4. **Database Migration & Client Generation**
   ```bash
   npx prisma generate
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Folder Structure

```text
/src
  ├── app/             # Next.js App Router (Routes, Layouts, Actions, API)
  ├── components/      # Reusable UI components (Shared, Match, User)
  ├── lib/             # Utility functions, DB connection, Auth logic
  ├── types/           # TypeScript interfaces and types
  └── generated/       # Prisma generated types
/prisma/               # Database schema (schema.prisma) and seed scripts
/public/               # Static assets (Logos, Icons)
/assets/               # Documentation images and screenshots
```

---

## 🔌 API Endpoints

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/notifications` | `GET` | Fetch real-time notifications for the user |
| `actions/auth.ts` | `Server Action` | Login, Register, Logout handling |
| `actions/match.ts` | `Server Action` | CRUD operations for matches |
| `actions/user.ts` | `Server Action` | Profile updates and user discovery |

---

## ❓ Why PlayNearby?

Finding a reliable sports partner is often harder than the game itself. **PlayNearby** eliminates this friction by:
- Reducing the time spent searching for teammates.
- Encouraging local community building through physical activity.
- Providing a safe and skill-matched environment for everyone.

---

## 🗺️ Future Improvements

- [ ] **In-app Chat**: Real-time messaging for match coordination.
- [ ] **Rating System**: Rate partners based on sportsmanship and skill.
- [ ] **Tournament Hosting**: Organize large-scale local tournaments.
- [ ] **Integration with Maps**: Better visualization of match locations.

---

## 👥 Author

**Gyan Ranjan Sahoo**
- GitHub: [@gyanranjansahoo209](https://github.com/gyanranjansahoo209-cmd)
- LinkedIn: [Your Profile](https://www.linkedin.com/in/gyan-ranjan-sahoo-446577370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

---

## 🤝 Contribution Guidelines

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 💖 Show your support

Give a ⭐ if this project helped you!

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=footer" />
</p>
