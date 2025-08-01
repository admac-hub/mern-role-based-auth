# MERN Role-Based Authentication System

A full-stack starter kit for implementing **role-based login and authentication** using the **MERN stack** (MongoDB, Express, React/React Native, Node.js). Includes secure user and vendor flows with JWT stored in **HTTP-only cookies**, password hashing, and a scalable onboarding process.

## 🚀 Features

- 🔐 **Role-based Authentication** — separate flows for users and vendors  
- 🍪 **JWT + HTTP-only Cookies** — secure token storage  
- 🔑 **Secure Password Hashing** with `bcrypt`  
- 🧾 **Vendor Onboarding** — business name, category, phone, address  
- 🧪 **RESTful API** for easy frontend/mobile integration  
- 🧱 Scalable project structure  

## 📦 Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** React (or React Native)  
- **Database:** MongoDB + Mongoose  
- **Auth:** JSON Web Tokens (JWT), Cookies  

## 📁 Folder Structure

```bash
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # User auth logic
│   └── vendorController.js   # Vendor onboarding & logic
├── middleware/
│   └── authenticateToken.js  # JWT auth middleware
├── models/
│   ├── User.js               # User schema
│   └── Vendor.js             # Vendor schema
├── routes/
│   ├── auth.js               # User auth routes
│   └── authVendor.js         # Vendor auth/onboarding routes
├── utils/
│   └── generateToken.js      # Token generator
├── tests/                    # API test files (if used)
├── .env                      # Env variables
├── app.js                    # App configuration (Express middleware)
├── server.js                 # Entry point (loads app.js, connects DB)
├── package.json
└── package-lock.json

webclient/
├── public/                   # favicon, manifest, etc.
├── src/
│   ├── api/
│   │   └── authApi.js        # Handles axios calls for auth
│   ├── components/
│   │   └── VendorOnboarding.js  # Component for vendor form
│   ├── pages/
│   │   ├── login.js          # Login page
│   │   └── register.js       # Register page
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── .env
├── package.json
└── README.md



## 🛠️ Getting Started

1. **Clone the repo**

   Run the following commands in your terminal:

   - `git clone https://github.com/admac-hub/mern-role-based-auth.git`
   - `cd mern-role-based-auth`
   - `cd backend`
   - `npm install`

2. **Create a `.env` file inside `/backend` and add:**
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000

3. **Run the backend server**
- `npm run dev`

🧪 API Endpoints
| Route                       | Method | Description             |
| --------------------------- | ------ | ----------------------- |
| `/api/auth/register`        | POST   | Register user           |
| `/api/auth/login`           | POST   | Login user              |
| `/api/auth/vendor/register` | POST   | Register vendor         |
| `/api/auth/vendor/login`    | POST   | Login vendor            |
| `/api/vendor/onboard`       | POST   | Complete vendor profile |

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

