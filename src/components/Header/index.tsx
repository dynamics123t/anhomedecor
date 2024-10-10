/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="bg-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            className="w-[40px] sm:w-[50px] h-auto object-cover"
            src="/images/logo.jpg"
            alt="ANHOME DECOR Logo"
          />
          <h1 className="font-bold text-lg ml-4">ANHOME DECOR</h1>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="hidden md:flex flex-1 max-w-[450px] mx-8">
          <form className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Image
                className="cursor-pointer"
                src="/images/search.svg"
                alt="Search Icon"
                width={20}
                height={20}
              />
            </div>
            <input
              type="search"
              className="w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Tìm mẫu nhà..."
              required
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
            >
              Tìm
            </button>
          </form>
        </div>

        {/* Menu - Responsive */}
        <div className="hidden md:flex">
          <nav className="flex items-center justify-center space-x-6">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer relative group"
            >
              <span className="relative text-lg font-semibold">
                Mẫu nhà đẹp
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-1
              ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/phongbep")}
              className="cursor-pointer relative group"
            >
              <span className="relative text-lg font-semibold">
                Phòng bếp
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-1
              ${pathname === "/phongbep" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/phongkhach")}
              className="cursor-pointer relative group"
            >
              <span className="relative text-lg font-semibold">
                Phòng khách
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-1
              ${pathname === "/phongkhach" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>

            <div
              onClick={() => router.push("/phongngu")}
              className="cursor-pointer relative group"
            >
              <span className="relative text-lg font-semibold">
                Phòng ngủ
                <span
                  className={`inline-block h-[1px] bg-black absolute left-0 -bottom-1
              ${pathname === "/phongngu" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                ></span>
              </span>
            </div>
          </nav>
        </div>

        {/* Menu button for mobile */}
        <div className="flex md:hidden">
          <button
            className="text-orange-500 hover:text-orange-700 focus:outline-none"
            onClick={() => router.push("/menu")} // Bạn có thể thay thế điều này bằng một menu bật lên.
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-8 pb-4">
        <form className="relative w-full">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Image
              className="cursor-pointer"
              src="/images/search.svg"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>
          <input
            type="search"
            className="w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Tìm mẫu nhà..."
            required
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 text-white bg-orange-500 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Tìm
          </button>
        </form>
      </div>
    </header>
  );
}
