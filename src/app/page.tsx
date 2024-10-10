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
            {["/images/1.webp", "/images/2.webp", "/images/3.webp", "/images/4.webp", "/images/5.webp"].map((url, index) => (
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

      <div className="flex min-h-screen items-center text-dark">
        <div className="z-0 inline-block h-full w-full bg-light p-32">
          <div className="flex w-full items-start justify-between">
            <div className="flex w-1/2 flex-col items-center self-center">
              <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
                <div className="inline-block text-left text-dark text-6xl font-bold w-full capitalize leading-none">
                  Chúng tôi sáng tạo - bạn tận hưởng
                </div>
              </div>
              <p className="my-4 text-left text-base font-medium">
                Trong 1 năm qua, An Home đã phát triển vượt bậc trong thiết kế,
                xây dựng dân dụng và công nghiệp. Đội ngũ sáng lập viên là những
                chuyên gia hàng đầu về quản lí và kỹ thuật. Tiêu chí hoạt động
                của chúng tôi là tận tâm, chu đáo và nhiệt tình trong hậu mãi.
                Chúng tôi cam kết cung cấp giải pháp tối ưu cho mỗi yêu cầu của
                khách hàng, bao gồm thi công và sửa chữa các công trình như công
                trình nền, móng, bê-tông cốt thép, thiết kế đặc chủng và trang
                trí nội thất. Với kinh nghiệm dày dạn trong các lĩnh vực trên,
                An Home luôn đảm bảo chất lượng và hiệu quả tối đa, mong muốn
                đồng hành cùng khách hàng trong mọi dự án và mang đến không gian
                sống và làm việc đẹp và tiện nghi nhất.
              </p>
              <div className="mt-2 flex items-center self-start"></div>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-black bg-white p-8 ">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-black "></div>
              <img
                className="w-[550px] h-[550px] rounded-xl"
                src="/images/anhome.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Cá nhân hóa không gian
        </h2>
        <p className="text-lg text-center mb-6">
          Tổng hợp các dự án của ANHOME
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"].map((imgSrc, index) => (
            <div className="relative overflow-hidden group" key={index}>
              <img
                src={`/images/${imgSrc}`}
                alt={`Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 z-10"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 rounded-lg">
                Xem chi tiết
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="link" className="text-orange-700">
            Xem thêm
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="w-[1/2] text-center p-4 flex flex-col items-center justify-center h-500">
          <h2 className="text-2xl font-bold text-gray-800">
            Đơn vị thi công uy tín
          </h2>
        </div>
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            frameBorder="0"
            width="100%"
            height="500px"
            allowFullScreen
          ></iframe>
          <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg mt-3">
            {["Z71pBG3WEoY", "3ItE2e0zheE", "KxrHsF_SEOI", "1SxJHLTMo5Y"].map((videoId, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
                onClick={() => handleVideoClick(videoId)} // Gọi hàm khi nhấp vào video
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
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VideoComponent;