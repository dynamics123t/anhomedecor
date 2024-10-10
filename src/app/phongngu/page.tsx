/* eslint-disable @next/next/no-img-element */
"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import Link from "next/link";

export default function ImageGrid() {
  // List of image URLs
  const imageUrls = [
    "/pn/pn1.jpg",
    "/pn/pn2.jpg",
    "/pn/pn3.jpg",
    "/pn/pn4.jpg",
    "/pn/pn5.jpg",
    "/pn/pn6.jpg",
    "/pn/pn7.jpg",
    "/pn/pn8.jpg",
    "/pn/pn9.jpg",
    "/pn/pn10.jpg",
    "/pn/pn11.jpg",
    "/pn/pn12.jpg",
    "/pn/pn13.jpg",
    "/pn/pn14.jpg",
    "/pn/pn15.jpg",
    "/pn/pn16.jpg",
    "/pn/pn17.jpg",
    "/pn/pn18.jpg",
    "/pn/pn19.jpg",
    "/pn/pn20.jpg",
    "/pn/pn21.jpg",
    "/pn/pn22.jpg",
    "/pn/pn23.jpg",
    "/pn/pn24.jpg",
    "/pn/pn25.jpg",
    "/pn/pn26.jpg",
    "/pn/pn27.jpg",
    "/pn/pn28.jpg",
    "/pn/pn29.jpg",
    "/pn/pn30.jpg",
    "/pn/pn31.jpg",
    "/pn/pn32.jpg",
    "/pn/pn33.jpg",
    "/pn/pn34.jpg",
    "/pn/pn35.jpg",
    "/pn/pn36.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to handle click and show popup
  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Header />

      <div className="bg-gray-100 min-h-screen py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Hình Ảnh Thực Tế Thi Công Nội Thất Phòng Khách Đẹp, Hiện Đại
        </h1>

        <div className="container mx-auto px-4">
          {/* Grid layout with responsive classes */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick(url)}
              >
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popup Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative bg-white p-4 rounded-lg">
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closePopup}
              >
                &#x2715;
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Contact section */}
      <h1 className="text-4xl font-bold text-center my-8 text-orange-700">
        LIÊN HỆ TƯ VẤN
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center my-8 space-y-6 sm:space-y-0 sm:space-x-12">
        <Link href="https://zalo.me/0933687989" target="_blank" className="mx-12">
          <img
            src="/images/contact.png"
            className="w-auto max-h-[85vh] max-w-[90vw] object-contain"
            alt="Contact"
          />
        </Link>
        <Link href="https://zalo.me/0939116237" target="_blank">
          <img
            src="/images/mrsnhung.png"
            className="w-auto max-h-[85vh] max-w-[90vw] object-contain"
            alt="Contact"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
}