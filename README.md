# Sri Venkateshwara Catering Services - Event Booking System

A modern web application for managing catering bookings with React frontend and Node.js/Express backend.

## 🌐 Live Access

- **Frontend**: http://10.188.241.246:5174
- **Backend API**: http://10.188.241.246:5000
- **API Endpoint**: `/api/book-event` (POST)
- **View Bookings**: `/api/bookings` (GET)

## 📋 Features

✅ Responsive booking form with date, time, and location fields  
✅ Real-time booking submission  
✅ Persistent data storage (JSON-based)  
✅ CORS enabled for cross-origin requests  
✅ Professional catering services showcase  
✅ Gallery and testimonials section  
✅ Network-accessible from any device  

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Node.js, Express, CORS
- **Data Storage**: JSON file
- **Development**: Modern ES modules

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/chandutarigoppula/review.git
   cd review
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Running the Application

### Start Backend Server
```bash
npm run serve-backend
```
Backend runs on:
- Local: http://localhost:5000
- Network: http://YOUR_IP:5000

### Start Frontend Development Server
```bash
npm run dev
```
Frontend runs on:
- Local: http://localhost:5174
- Network: http://YOUR_IP:5174

### Build for Production
```bash
npm run build
```

## 📝 Booking Form Fields

- **Full Name** - Customer name
- **Phone** - Contact number
- **Event Type** - Wedding, Birthday, Corporate, etc.
- **Event Date** - Date of the event
- **Event Time** - Time of the event
- **Address** - Event location/area
- **Number of Guests** - Guest count
- **Food Preference** - Veg/NonVeg/Mixed
- **Special Requirements** - Additional notes

## 📊 Sample Data

The application includes 5 sample bookings:
1. **Rajesh Kumar** - Wedding (250 guests, June 15, 6:00 PM)
2. **Priya Sharma** - Birthday Party (75 guests, May 25, 12:00 PM)
3. **Arjun Singh** - Corporate Event (150 guests, June 5, 1:30 PM)
4. **Deepika Reddy** - Reception (350 guests, July 2, 7:00 PM)
5. **Vikas Patel** - Family Event (120 guests, June 20, 2:00 PM)

## 🔌 API Endpoints

### POST /api/book-event
Submit a new booking event.

**Request Body:**
```json
{
  "name": "Your Name",
  "phone": "+91 1234567890",
  "eventType": "Wedding",
  "date": "2026-06-15",
  "time": "18:00",
  "address": "Event Location",
  "guests": "250",
  "foodType": "Mixed",
  "requirements": "Special notes"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking submitted successfully.",
  "booking": { ...booking details }
}
```

### GET /api/bookings
Retrieve all bookings.

**Response:**
```json
{
  "success": true,
  "bookings": [{ ...booking data }]
}
```

## 📁 Project Structure

```
review/
├── src/
│   ├── App.jsx          # Main React component
│   └── main.jsx         # Entry point
├── server.js            # Express backend server
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
├── bookings.json        # Data storage
└── README.md            # Documentation
```

## 🌐 Access from Other Devices

On the same WiFi network, access the app using:
- **Laptop/Desktop**: http://10.188.241.246:5174
- **Mobile Phone**: http://10.188.241.246:5174

*Replace `10.188.241.246` with your actual machine IP if different*

## 📞 Contact Information

- **Phone**: +91 7702536653, 9989689924
- **Email**: srivenkateshwaracatering@gmail.com
- **Location**: Hyderabad, Dammaiguda, India

## 📄 License

MIT License - Free to use and modify

## 👨‍💻 Author

Chandu Tarigoppula  
GitHub: https://github.com/chandutarigoppula

---

**Made with ❤️ for Sri Venkateshwara Catering Services**
