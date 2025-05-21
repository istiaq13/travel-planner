"use client";
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// ✅ Mock destination data
const destinationData = [
  {
    id: 1,
    country: "France",
    image: "/images/d1.jpg",
    travelers: "2.5M+ travelers"
  },
  {
    id: 2,
    country: "Italy",
    image: "/images/d2.jpg",
    travelers: "1.8M+ travelers"
  },
  {
    id: 3,
    country: "Japan",
    image: "/images/d3.jpg",
    travelers: "3.2M+ travelers"
  },
  {
    id: 4,
    country: "Brazil",
    image: "/images/d4.jpg",
    travelers: "1.5M+ travelers"
  },
  {
    id: 5,
    country: "Australia",
    image: "/images/d5.jpg",
    travelers: "2.1M+ travelers"
  },
];

// ✅ Carousel responsiveness
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const DestinationSlider = () => {
  return (
    <div className="py-10">
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {destinationData.map((data) => (
          <div key={data.id} className="m-3">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-25 z-10"></div>

              {/* Image */}
              <Image
                src={data.image}
                alt={data.country}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            {/* Text Content */}
            <div className="mt-2">
              <h1 className="text-xl font-semibold">{data.country}</h1>
              <p className="text-gray-600">{data.travelers}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DestinationSlider;
