import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import os from "os";

const app = express();
const port = process.env.PORT || 5000;
const bookingsFile = path.resolve("./bookings.json");
const publicDir = path.resolve("./public");

app.use(cors());
app.use(express.json());
app.use(express.static(publicDir));

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

app.post("/api/bookings", async (req, res) => {
  try {
    const { name, phone, eventDate, eventType } = req.body;

    if (!name || !phone || !eventDate || !eventType) {
      return res.status(400).json({
        success: false,
        message: "All fields (Name, Phone, Date, Event Type) are required.",
      });
    }

    const cleanPhone = String(phone).replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number.",
      });
    }

    const bookings = await readBookings();
    const newInquiry = {
      id: `LS-${Date.now()}`,
      name: name.trim(),
      phone: cleanPhone,
      eventDate,
      eventType,
      submittedAt: new Date().toISOString(),
      status: "Pending Review",
    };

    bookings.push(newInquiry);
    await writeBookings(bookings);

    return res.status(201).json({
      success: true,
      message: "Inquiry saved successfully! The owner will contact you shortly.",
      bookingId: newInquiry.id,
    });
  } catch (error) {
    console.error("Backend processing error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error occurred while processing reservation.",
    });
  }
});

app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await readBookings();
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not read records database." });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const localIP = getLocalIPAddress();
app.listen(port, "0.0.0.0", () => {
  console.log(`\n===================================================`);
  console.log(` Laxmi Srinivasa Tent House API running on port ${port}`);
  console.log(` Frontend available at http://localhost:${port}`);
  console.log(` Network URL: http://${localIP}:${port}`);
  console.log(`===================================================\n`);
});
