/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the first dropdown
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false); // State for the nested dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen(!isSubDropdownOpen);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsDropdownOpen(false); // Close dropdown after navigating
    setIsSubDropdownOpen(false); // Close nested dropdown if it was open
  };

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

        <div className="hidden md:flex">
          <nav className="flex items-center justify-center space-x-6">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer relative group"
            >
              <div className="flex">
                <span className="relative text-lg font-semibold mr-2"
                 onClick={toggleSubDropdown}>
                  Về ANHOME
                  <span
                    className={`inline-block h-[1px] bg-black absolute left-0 -bottom-1
              ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}
              transition-all ease duration-300`}
                  ></span>
                </span>
             
              </div>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    {isSubDropdownOpen && (
                        <ul className="py-2">
                          <li
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleNavigate("/mau-nha-dep")}
                          >
                            Mẫu nhà đẹp
                          </li>
                          <li
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleNavigate("/quytrinh")}
                          >
                            Quy Trình
                          </li>
                          <li
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleNavigate("/phongngu")}
                          >
                            Xưởng nội thất
                          </li>
                          <li
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleNavigate("/tuyendung")}
                          >
                            Tuyển dụng
                          </li>
                        </ul>
                    )}
                </div>
              )}
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
              ${
                pathname === "/phongkhach" ? "w-full" : "w-0 group-hover:w-full"
              }
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
        <div className="flex md:hidden relative">
          <button
            className="text-orange-500 hover:text-orange-700 focus:outline-none"
            onClick={toggleDropdown} // Open dropdown on button click
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

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul className="py-2">
                <li
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={toggleSubDropdown} // Toggle the nested dropdown
                >
                  Về Anhome
                </li>
                {isSubDropdownOpen && (
                  <div className="mt-1 w-48 bg-gray-200 border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/mau-nha-dep")}
                      >
                        Mẫu nhà đẹp
                      </li>
                      <li
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/quytrinh")}
                      >
                        Quy Trình
                      </li>
                      <li
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/phongngu")}
                      >
                        Xưởng nội thất
                      </li>
                      <li
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate("/tuyendung")}
                      >
                        Tuyển dụng
                      </li>
                    </ul>
                  </div>
                )}
                <li
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigate("/phongkhach")}
                >
                  Phòng khách
                </li>
                <li
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigate("/phongngu")}
                >
                  Phòng ngủ
                </li>
                <li
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavigate("/phongbep")}
                >
                  Phòng bếp
                </li>
              </ul>
            </div>
          )}
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
