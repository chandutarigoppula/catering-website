import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import os from "os";

const app = express();
const port = process.env.PORT || 5000;
const bookingsFile = path.resolve("./bookings.json");

app.use(cors());
app.use(express.json());

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

async function readBookings() {
  try {
    const raw = await fs.readFile(bookingsFile, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

async function writeBookings(bookings) {
  await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2), "utf8");
}

app.post("/api/book-event", async (req, res) => {
  const booking = req.body;

  if (!booking.name || !booking.phone || !booking.eventType || !booking.date || !booking.time || !booking.address) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, phone, event type, date, time, and address.",
    });
  }

  booking.id = Date.now().toString();
  booking.createdAt = new Date().toISOString();

  try {
    const bookings = await readBookings();
    bookings.push(booking);
    await writeBookings(bookings);
    console.log("New booking received:", booking);

    res.status(201).json({
      success: true,
      message: "Booking submitted successfully.",
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to save booking.",
    });
  }
});

app.get("/api/bookings", async (req, res) => {
  const bookings = await readBookings();
  res.json({ success: true, bookings });
});

const localIP = getLocalIPAddress();
app.listen(port, "0.0.0.0", () => {
  console.log(`\n✅ Backend server running on:`);
  console.log(`   Local:  http://localhost:${port}`);
  console.log(`   Network: http://${localIP}:${port}\n`);
});
