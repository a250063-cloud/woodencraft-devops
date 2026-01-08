import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "1d2f5a54-6abe-4587-8159-77f4dd1ee99c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✅");
        event.target.reset();
      } else {
        setResult("Something went wrong ❌");
      }
    } catch (error) {
      setResult("Error sending message ❌");
    }
  };

  return (
    <>
   <Navbar></Navbar>
    <div className="bg-[#fdfaf6] min-h-screen">
      {/* Header */}
      <section className="bg-amber-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-amber-100">
          Reach out to us for wooden toys & décor inquiries
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* Info */}
        <div>
          <h2 className="text-3xl font-semibold text-amber-900 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-700 mb-8">
            Inspired by Sawantwadi’s wooden craftsmanship, we’d love to
            hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="text-amber-800" />
              <p>Sawantwadi, Maharashtra, India</p>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-amber-800" />
              <p>  <a href="tel:+91 8767819842">+91 8767819842</a></p>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-amber-800" />
              <p>support@woodencraft.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-amber-900 mb-6">
            Send Message
          </h3>

          <form onSubmit={onSubmit} className="space-y-5">
            <input type="hidden" name="subject" value="New Contact Form Message" />
            <input type="hidden" name="from_name" value="WoodenCraft Website" />

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition"
            >
              Send Message
            </button>

            {result && (
              <p className="text-sm text-center mt-3 text-green-600">
                {result}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Map */}
      {/* <iframe
        title="Sawantwadi Map"
        src="https://www.google.com/maps?q=Sawantwadi,Maharashtra,India&output=embed"
        className="w-full h-[350px] border-0"
        loading="lazy"
      ></iframe> */}
    </div>
    <Footer></Footer>
      </>
  );
};

export default Contact;
