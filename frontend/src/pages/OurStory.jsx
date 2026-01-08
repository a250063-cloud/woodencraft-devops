import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const OurStory = () => {
  return (
    <>
     <Navbar></Navbar>
   
    <div className="bg-[#fdfaf6] min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-40 mysection">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-50">
            Our Story
          </h1>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto">
            A journey carved from wood, guided by tradition, and shaped with heart.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-10">
          <p className="text-gray-700 text-lg leading-relaxed">
            Our story began not in a factory, but in a small workshop filled with
            the scent of natural wood and the sound of skilled hands at work.
            What started as a simple love for wooden craftsmanship slowly grew
            into a dream — to create toys and décor that feel warm, honest, and
            timeless.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We grew up believing that toys should spark imagination, not screens.
            That décor should tell a story, not follow trends. This belief became
            the foundation of our brand — crafting products that bring people
            closer to nature, tradition, and meaningful living.
          </p>
        </div>
      </section>

      {/* Image + Text */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600431521340-491eca880813"
              alt="Wooden craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-amber-900 mb-4">
              Crafted With Purpose
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every piece we create is handcrafted using responsibly sourced wood,
              shaped with care, and finished with non-toxic, eco-friendly
              materials. We don’t rush the process — because true craftsmanship
              takes time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our artisans bring years of experience, patience, and pride into
              each product, ensuring that what reaches your home carries a soul,
              not just a shape.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-amber-900 mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe in slow living, sustainable choices, and products that
            last for generations. Our wooden toys are designed to grow with
            children, and our décor pieces are meant to age beautifully with
            your home.
          </p>
        </div>
      </section>

      <section className="bg-[#fdfaf6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Video Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
              src="https://www.youtube.com/embed/Vp0o_tE7L50"
              title="Sawantwadi Wooden Toys"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-amber-900 mb-4">
              The Legacy of Sawantwadi Wooden Craft
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sawantwadi, a historic town in Maharashtra, is renowned for its
              centuries-old tradition of handcrafted wooden toys and decorative
              products. This craft is not just an art form — it is a cultural
              legacy passed down through generations of skilled artisans.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our project is inspired by this rich heritage. Each toy and décor
              piece reflects patience, precision, and passion, created using
              natural wood and traditional techniques that respect both nature
              and craftsmanship.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through this platform, we aim to preserve the identity of
              Sawantwadi’s wooden art while bringing these timeless creations
              into modern homes across the world.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* Closing Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-amber-900 mb-4">
            More Than Products — A Legacy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            When you choose us, you’re not just buying a wooden product.
            You’re supporting craftsmanship, sustainability, and a story
            that values authenticity over mass production.
            <br /><br />
            This is our story — and now, it becomes part of yours.
          </p>
        </div>
      </section>
    </div>
    <Footer></Footer>
     </>
  );
};

export default OurStory;
