import React, { useState } from "react";

export default function SriVenkateshwaraCatering() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    time: "",
    address: "",
    guests: "",
    foodType: "",
    requirements: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const services = [
    "Wedding Catering",
    "Birthday Parties",
    "Corporate Events",
    "Traditional South Indian Meals",
    "Outdoor Catering",
    "Festival Catering",
  ];

  const menuItems = [
    "Veg & NonVeg Items",
    "All types of Veg curries",
    "All types of NonVeg curries",
    "Sweets",
    "Tiffins",
    "Customized menu",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Submitting booking...");

    try {
      const response = await fetch("/api/book-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Booking submission failed.");
      }

      setStatusMessage("Booking Submitted Successfully!");
      console.log(result.booking);
      setFormData({
        name: "",
        phone: "",
        eventType: "",
        date: "",
        time: "",
        address: "",
        guests: "",
        foodType: "",
        requirements: "",
      });
    } catch (error) {
      setStatusMessage(error.message);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-600 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white py-16 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Sri Venkateshwara Catering Services</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Delicious Food • Traditional Taste • Memorable Events
        </p>
        <a
          href="#booking-form"
          className="mt-6 inline-block bg-white text-yellow-600 px-6 py-3 rounded-2xl shadow-md font-semibold hover:scale-105 transition-transform"
        >
          Book Your Event
        </a>
      </header>

      {/* About Section */}
      <section className="py-14 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-orange-700">About Us</h2>
          <p className="text-lg leading-8">
            Sri Venkateshwara Catering Services provides quality vegetarian and non-vegetarian catering services for weddings, receptions, corporate functions, birthday celebrations, and family events. We are known for hygienic preparation, authentic flavors, and excellent customer service.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
            alt="Catering Food"
            className="rounded-3xl shadow-2xl w-full h-[350px] object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">Our Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-orange-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p>
                  Professional catering with tasty food, quality ingredients, and excellent service for every occasion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-form" className="py-14 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-8">Book Your Event</h2>
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="text-gray-700">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                required
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-gray-700">Event Type</span>
              <input
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                placeholder="Wedding, Birthday, Corporate, etc."
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Event Date</span>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Event Time</span>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-gray-700">Address</span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Number of Guests</span>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                min="1"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Food Preference</span>
              <input
                type="text"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                placeholder="Veg, NonVeg, Mixed"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-gray-700">Special Requirements</span>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
                rows="4"
                placeholder="Any dietary needs, decoration requests, or notes"
              />
            </label>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-white shadow-lg transition hover:bg-orange-700"
              >
                Submit Booking
              </button>
              {statusMessage && (
                <p className="mt-4 text-sm text-orange-700">{statusMessage}</p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">Popular Menu Items</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-100 rounded-2xl p-5 shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">Gallery</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-6">Contact Us</h2>

        <div className="bg-orange-100 rounded-3xl p-8 shadow-lg">
          <p className="text-lg mb-3"><strong>Phone:</strong> +91 7702536653,9989689924</p>
          <p className="text-lg mb-3"><strong>Email:</strong> srivenkateshwaracatering@gmail.com</p>
          <p className="text-lg"><strong>Location:</strong> hyderabad dammaiguda, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white text-center py-6 mt-10">
        <p>© 2026 Sri Venkateshwara Catering Services. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
