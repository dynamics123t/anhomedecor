"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const VideoComponent = () => {
  const [mainVideoId, setMainVideoId] = useState("Z71pBG3WEoY");

  const handleVideoClick = (videoId: string) => {
    setMainVideoId(videoId);
  };

  return (
    <div className="bg-white">
      <Header />
      <div className="flex justify-center items-center mt-5">
        <Carousel className="w-full max-w-none">
          <CarouselContent>
            {[
              "/images/1.png",
              "/images/slide2.png",
              "/images/slide3.png",
              "/images/slide4.png",
              "/images/slide5.png",
            ].map((url, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex max-h-96 h-auto items-center justify-center p-6">
                      <img
                        src={url}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen items-center text-dark p-4 lg:p-32">
        <div className="flex flex-col w-full lg:w-1/2 items-center self-center">
          <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center sm:py-0">
            <div className="text-left text-dark text-3xl md:text-5xl lg:text-6xl font-bold w-full capitalize leading-none">
              Chúng tôi sáng tạo - bạn tận hưởng
            </div>
          </div>
          <p className="my-4 text-left text-base font-medium">
            Trong 1 năm qua, An Home đã phát triển vượt bậc trong thiết kế, xây
            dựng dân dụng và công nghiệp. Đội ngũ sáng lập viên là những chuyên
            gia hàng đầu về quản lí và kỹ thuật. Tiêu chí hoạt động của chúng
            tôi là tận tâm, chu đáo và nhiệt tình trong hậu mãi. Chúng tôi cam
            kết cung cấp giải pháp tối ưu cho mỗi yêu cầu của khách hàng, bao
            gồm thi công và sửa chữa các công trình như công trình nền, móng,
            bê-tông cốt thép, thiết kế đặc chủng và trang trí nội thất. Với kinh
            nghiệm dày dạn trong các lĩnh vực trên, An Home luôn đảm bảo chất
            lượng và hiệu quả tối đa, mong muốn đồng hành cùng khách hàng trong
            mọi dự án và mang đến không gian sống và làm việc đẹp và tiện nghi
            nhất.
          </p>
        </div>
        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-8 mt-6 lg:mt-0">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-black"></div>
          <img
            className="w-full lg:w-[550px] h-[300px] lg:h-[550px] rounded-xl object-cover"
            src="/images/anhome.jpg"
            alt="An Home"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          Cá nhân hóa không gian
        </h2>
        <p className="text-lg text-center mb-6">
          Tổng hợp các dự án của ANHOME
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"].map(
            (imgSrc, index) => (
              <div className="relative overflow-hidden group" key={index}>
                <img
                  src={`/images/${imgSrc}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                  Xem chi tiết
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-center mt-6">
          <Button variant="link" className="text-orange-700">
            Xem thêm
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 px-4 lg:px-0">
        <div className="w-full lg:w-1/2 text-center p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Đơn vị thi công uy tín
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <iframe
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            frameBorder="0"
            width="100%"
            height="300px"
            allowFullScreen
          ></iframe>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-screen-lg mt-3">
            {["Z71pBG3WEoY", "3ItE2e0zheE", "KxrHsF_SEOI", "1SxJHLTMo5Y"].map(
              (videoId, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
                  onClick={() => handleVideoClick(videoId)}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    width="100%"
                    height="200px"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">Item {index + 1}</h3>
                    <p className="text-gray-600">Mô tả cho item {index + 1}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoComponent;
