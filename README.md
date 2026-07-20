# 🐾 Pet Shop Client

A modern web application for browsing, discovering, and reserving pets through the **Pet Shop** platform.

The Client App is one of three applications that make up the complete **Pet Shop** ecosystem. Together, they provide a full-featured platform for exploring available animals, submitting reservation requests, and managing the entire system.

```text
                  🐾 Pet Shop Platform
                        │
        ┌───────────────┼───────────────┐
        │               │               │
🌐 Client App    🛠 Backend API    👑 Admin Panel
     Next.js         Node.js           React
     React           Express        React Router
```

The application provides users with an intuitive interface for browsing animals, applying filters, managing favorites, and submitting reservation requests. It communicates with the backend through a REST API, while authentication, business logic, and data persistence are handled by the backend.

---

## 📸 Application Preview

![Pet Shop Admin Demo](./screenshots/demo.gif)

---


## 📝 About the Project

The project demonstrates modern frontend development practices and includes:

- ⚡ Next.js App Router
- 🔄 Server & Client Components
- 📦 Dynamic & Intercepting Routes
- 🔍 URL Search Parameters
- 🔍 Dynamic SEO Metadata
- 🖼️ Image Optimization
- ⚡ TanStack Query
- 🌐 REST API Integration
- 🔐 Session-based Authentication
- 📋 Formik & Yup Validation
- 🎨 Reusable UI Components
- 📱 Responsive Design


---


## ✨ Features

### 🐾 Animal Catalog

- 🐶 **Browse Animals**
  - Explore animals by category
  - View detailed animal information
  - Browse image gallery
  - Navigate with breadcrumbs

- 🔍 **Advanced Filtering**
  - Filter by breed, gender, and price range
  - Sort by multiple criteria
  - Navigate through paginated results
  - Preserve filters when returning from the details page

### ❤️ Favorites

- ⭐ Save favorite animals
- 🗑️ Remove individual favorites
- 🧹 Clear the entire favorites list

### 📅 Reservation System

- 📝 Submit reservation requests
- 📌 Track reservation status
- ❌ Cancel pending reservations

### 👤 User Account

- 🔐 Secure registration and authentication
- 🔑 Password recovery and reset
- ✏️ Update profile information
- 🔒 Change username and password
- 📋 View reservation history

### 📊 Dynamic Content

- 📈 Live platform statistics
- 🐾 Real-time animal counts by category

---

## 🔗 URL State Management

Filtering, sorting, pagination, and navigation state are fully synchronized with URL search parameters, providing a consistent and shareable user experience.

This allows users to:

- 🔗 Share filtered catalog pages
- 🔄 Preserve state after page refresh
- ↩️ Navigate back without losing applied filters
- 🔖 Bookmark specific search results

---


## 🛠️ Technologies & Tools

- ⚛️ React
- ▲ Next.js
- 🔷 TypeScript
- 🎨 Tailwind CSS
- ⚡ TanStack Query
- 🐻 Zustand
- 🌐 Axios
- 📋 Formik
- ✅ Yup
- 🔔 React Hot Toast
- 🖼️ next/image
- 🔍 next/navigation
- ☁️ Vercel


---

## 🧱 Project Structure

The project follows a modular structure with a clear separation of routing, UI components, state management, API communication, and shared utilities.


```text
app/           # App Router pages and layouts
components/    # Reusable UI components
constants/     # Shared constants
hooks/         # Custom React hooks
lib/
 ┣ api/        # API clients
 ┗ stores/     # Zustand stores
providers/     # Context and app providers
public/        # Static assets
types/         # TypeScript types
utils/         # Utility functions
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root and add the required environment variables:

```env
NEXT_PUBLIC_API=
NEXT_PUBLIC_BACKEND=
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API` | Client application URL |
| `NEXT_PUBLIC_BACKEND` | Base URL of the Pet Shop Backend API |



---


## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/ivannashchokalo/pet-shop-client.git

cd pet-shop-client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and configure the required environment variables.

Start the development server:

```bash
npm run dev
```


---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run lint` | Runs ESLint to check code quality. |


---

## 🚀 Deployment

- 🌐 **Client App**  
  https://pet-shop-client-five.vercel.app

- 👑 **Admin Panel**  
  https://pet-shop-admin-taupe.vercel.app

- ⚙️ **Backend API**  
  https://pet-shop-api-tmbd.onrender.com


---


## 🔗 Related Repositories

- 👑 **Admin Panel**  
  Administrative dashboard for managing animals, processing reservation requests, and monitoring platform activity.  
  🔗 https://github.com/ivannashchokalo/pet-shop-admin

- ⚙️ **Backend API**  
  Backend service responsible for authentication, business logic, database operations, image uploads, and REST endpoints.  
  🔗 https://github.com/ivannashchokalo/pet-shop-api

---

> ⚠️ **Important**
>
> The Client App and Admin Panel share the same authentication cookies.
> When testing both applications simultaneously, use different browser windows (Incognito or another browser) to avoid cookie conflicts.


---

## 🔮 Future Improvements

- 📧 Email subscription for notifications about newly added animals
- 🔥 Trending animals based on user activity

---


## 👩‍💻 Author

**Ivanna Shchokalo**  
Junior Full-Stack Developer

- 💼 LinkedIn: https://linkedin.com/in/ivannashchokalo
- 🌐 GitHub: https://github.com/ivannashchokalo


---

## 📄 License

This project was created for educational and portfolio purposes.