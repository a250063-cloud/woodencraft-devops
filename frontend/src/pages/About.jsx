import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-[#faf7f2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Wooden Creations
          </h1>
          <p className="text-lg text-amber-100">
            Handcrafted Wooden Toys & Decorative Products Made with Love
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-amber-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are passionate creators of premium wooden toys and decorative
              products that blend traditional craftsmanship with modern design.
              Our mission is to bring joy, creativity, and sustainability into
              every home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Each product is carefully handcrafted using eco-friendly wood and
              non-toxic finishes, ensuring safety for children and durability
              for long-term use.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
              alt="Wooden Toys"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-amber-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-amber-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600 text-sm">
                We use responsibly sourced wood to protect nature.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-amber-800 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600 text-sm">
                Non-toxic paints and child-safe designs.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-amber-800 mb-2">
                Handcrafted
              </h3>
              <p className="text-gray-600 text-sm">
                Every item is crafted with attention to detail.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-amber-800 mb-2">
                Timeless Design
              </h3>
              <p className="text-gray-600 text-sm">
                Products that never go out of style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-amber-900 mb-4">
            Crafted for Joy, Designed to Last
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether it’s a child’s first toy or a decorative piece for your
            living space, our wooden creations are designed to bring warmth,
            happiness, and authenticity into your life.
          </p>
        </div>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
};

export default About;

