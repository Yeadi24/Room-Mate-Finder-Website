import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Find Your Perfect Roommate",
    subtitle: "Matching lifestyle, budget, and vibe—seamlessly.",
    image: "https://i.ibb.co/gM386B2k/woody-kelly-v9d-F-Zm-Vltw-unsplash.jpg",
  },
  {
    id: 2,
    title: "Share Your Space With Confidence",
    subtitle: "Safe and verified profiles for better living.",
    image: "https://i.ibb.co/LzRYPqm5/Banner2.jpg",
  },
  {
    id: 3,
    title: "Roommate Matching Made Easy",
    subtitle: "Let technology find your ideal space partner.",
    image: "https://i.ibb.co/QFMHj4Zt/Banner3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(
    new Array(slides.length).fill(false)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleImageError = (index, url) => {
    console.error(`Image ${index + 1} failed to load:`, url);
  };

  return (
    <div className="w-full h-[500px] relative my-24 rounded-3xl overflow-hidden shadow-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: imageLoaded[index] ? 1 : 0,
              }}
            />

            <img
              src={slide.image}
              alt=""
              className="absolute invisible"
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index, slide.image)}
            />

            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                imageLoaded[index] ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: `linear-gradient(135deg, 
                  ${
                    index === 0
                      ? "#ec4899, #8b5cf6"
                      : index === 1
                      ? "#06b6d4, #10b981"
                      : "#f59e0b, #ef4444"
                  })`,
              }}
            />

            <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded text-xs">
              Slide {index + 1}: {imageLoaded[index] ? "Loaded" : "Loading..."}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-pink-300 drop-shadow-2xl mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-white font-semibold drop-shadow-lg max-w-3xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-pink-500/80 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-pink-500/80 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-400 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
