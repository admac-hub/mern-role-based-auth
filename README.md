# 🚀 MERN Role-Based Authentication System

A full-stack starter kit for implementing **secure, role-based login and authentication** using the **MERN stack** (MongoDB, Express, React/React Native, Node.js). Built for developers looking to ship fast with clean, scalable code.

Includes:
- ✅ Email verification with token
- ✅ Separate flows for users & vendors
- ✅ Vendor onboarding form
- ✅ Secure login with HTTP-only cookies

---

## 🔐 Features

- **Role-Based Authentication** — separate user/vendor access flows  
- **JWT + HTTP-only Cookies** — safe & secure token storage  
- **Password Hashing** — uses `bcrypt` for encryption  
- **Vendor Onboarding** — name, category, phone, address, and more  
- **Email Verification** — token sent via custom email sender  
- **Clean Architecture** — scalable folder structure & RESTful APIs  

---

## 🧱 Tech Stack

| Layer       | Tech                       |
|-------------|----------------------------|
| Backend     | Node.js, Express.js        |
| Frontend    | React or React Native      |
| Database    | MongoDB + Mongoose         |
| Auth        | JWT, bcrypt, cookies       |
| Email       | Nodemailer (custom config) |

## 📁 Folder Structure

```bash
backend/
├── config/
│   └── db.js                        # MongoDB connection config

├── controllers/                    # Business logic layer
│   ├── authController.js
│   └── vendorController.js

├── middleware/                     # Express middleware
│   └── authenticateToken.js

├── models/                         # Mongoose schemas
│   ├── User.js
│   └── Vendor.js

├── routes/                         # API routes
│   ├── auth.routes.js              # User auth routes
│   └── vendor.routes.js            # Vendor routes

├── services/                       # External services (e.g. emails)
│   └── sendVerificationEmail.js

├── tests/                          # Optional: HTTP or unit tests
│   └── api-tests.http

├── utils/                          # Helper functions (optional)
│   └── generateToken.js            # If you extract token logic here

├── .env
├── .gitignore
├── app.js                          # App config: middleware, routers
├── server.js                       # Entry point: connects DB + launches app
├── package.json
└── package-lock.json


webclient/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt

├── src/
│   ├── api/                  # Axios logic, all API modules here
│   │   └── authApi.js

│   ├── components/           # Reusable UI components
│   │   ├── AuthForm.js
│   │   └── VendorOnboarding.js

│   ├── pages/                # Full pages/views
│   │   ├── Homepage.js
│   │   └── auth/
│   │       ├── Login.js
│   │       └── Register.js

│   ├── styles/               # Global and modular styles
│   │   ├── App.css
│   │   └── index.css

│   ├── utils/                # Utility functions/helpers (optional)
│   │   └── validateForm.js (example)

│   ├── App.js
│   ├── index.js
│   └── setupTests.js

├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md




## 🛠️ Getting Started

1. **Clone the repo**

   Run the following commands in your terminal:

   - `git clone https://github.com/admac-hub/mern-role-based-auth.git`
   - `cd mern-role-based-auth`
   - `cd backend`
   - `npm install`


## 🔒 Environment Variables

The `.env` file is **intentionally excluded** from the repository via `.gitignore` to protect sensitive credentials like database URIs and JWT secrets.
To run the project locally, you need to create your own `.env` file inside the `/backend` folder.


2. **Create a `.env` file inside `/backend` and add:**
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
GMAIL_USER= create_your_goodlepass@account.com
GMAIL_PASS= your_key

3. **Run the backend server**
- `npm run dev`


🌱 Use Cases
Multi-role platforms (vendors, clients, admins)
Marketplaces (fitness, wellness, coaching, etc.)
SaaS starter templates with secure login systems


🤝 Contributing
Forks, stars, and pull requests are welcome!
This is a work-in-progress starter — feel free to extend it.


## 📄 License

This project is licensed under the MIT License — you're free to use, modify, and distribute it, both privately and commercially. Just keep the original copyright.

See the [LICENSE](./LICENSE) file for more details.

☕ Support My Work
If this project saved you time or helped you ship faster, consider buying me a coffee:
👉 buymeacoffee.com/devacuko





