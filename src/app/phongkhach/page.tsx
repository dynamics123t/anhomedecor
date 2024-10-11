/* eslint-disable @next/next/no-img-element */
"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import Link from "next/link";

export default function ImageGrid() {
  const imageUrls = [
    "/pk/pk1.jpg",
    "/pk/pk2.jpg",
    "/pk/pk3.jpg",
    "/pk/pk4.jpg",
    "/pk/pk5.jpg",
    "/pk/pk7.jpg",
    "/pk/pk8.jpg",
    "/pk/pk9.jpg",
    "/pk/pk10.jpg",
    "/pk/pk11.jpg",
    "/pk/pk12.jpg",
    "/pk/pk13.jpg",
    "/pk/pk14.jpg",
    "/pk/pk15.jpg",
    "/pk/pk16.jpg",
    "/pk/pk17.jpg",
    "/pk/pk18.jpg",
    "/pk/pk19.jpg",
    "/pk/pk20.jpg",
    "/pk/pk21.jpg",
    "/pk/pk22.jpg",
    "/pk/pk23.jpg",
    "/pk/pk24.jpg",
    "/pk/pk25.jpg",
    "/pk/pk26.jpg",
    "/pk/pk27.jpg",
    "/pk/pk28.jpg",
    "/pk/pk29.jpg",
    "/pk/pk30.jpg",
    "/pk/pk31.jpg",
    "/pk/pk32.jpg",
    "/pk/pk33.jpg",
    "/pk/pk34.jpg",
    "/pk/pk35.jpg",
    "/pk/pk36.jpg",
    "/pk/pk37.jpg",
    "/pk/pk38.jpg",
    "/pk/pk39.jpg",
    "/pk/pk40.jpg",
    "/pk/pk41.jpg",
    "/pk/pk42.jpg",
    "/pk/pk43.jpg",
    "/pk/pk44.jpg",
    "/pk/pk45.jpg",
    "/pk/pk46.jpg",
    "/pk/pk47.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };
  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Header />

      <div className=" min-h-screen py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Hình Ảnh Thực Tế Thi Công Nội Thất Phòng Khách Đẹp, Hiện Đại
        </h1>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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