import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

import { useParams } from 'react-router-dom';
import DecorScrollSection from './DecorScrollSection'

const Home = () => {
    const { keyword } = useParams();
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {!keyword && <Hero />}
                <FeaturedProducts keyword={keyword} />
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
    
            </main>
            <DecorScrollSection></DecorScrollSection>
            <Footer />
        </div>
    )
}

export default Home
