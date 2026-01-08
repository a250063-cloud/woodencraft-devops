import React, { useEffect, useRef } from "react";



const decorItems = [
  {
    title: "Handcrafted Wall Décor",
    image: "https://i.pinimg.com/736x/65/58/f3/6558f3e343c46810bf7ed807e4086221.jpg",
  },
  {
    title: "Traditional Wooden Toys",
    image: "https://tse2.mm.bing.net/th/id/OIP.or7_o-eNpDTZSIut561upgHaFc?pid=Api&P=0&h=180",
  },
  {
    title: "Eco-Friendly Home Accents",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
  },
  {
    title: "Sawantwadi Art Pieces",
    image: "https://tse4.mm.bing.net/th/id/OIP.bmryYf8RqCw7kSTn-K60_AHaFa?pid=Api&P=0&h=180",
  },
  {
    title: "Minimal Wooden Décor",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

const DecorAutoScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let animationFrame;

    const autoScroll = () => {
      scrollAmount += 0.5; // speed (lower = slower)
      scrollContainer.scrollLeft = scrollAmount;

      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#fdfaf6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-900">
            Timeless Wooden Décor
          </h2>
          <p className="text-gray-600 mt-2">
            Inspired by the heritage of Sawantwadi craftsmanship
          </p>
        </div>

        {/* Auto Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden"
          onMouseEnter={() => (scrollRef.current.style.animationPlayState = "paused")}
          onMouseLeave={() => (scrollRef.current.style.animationPlayState = "running")}
        >
          {[...decorItems, ...decorItems].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] h-[420px] bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="h-[70%] overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-amber-900">
                  {item.title}
                </h3>
                <button className="mt-3 text-sm font-medium text-primary-600 hover:underline">
                  Explore Collection → 
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DecorAutoScroll;
