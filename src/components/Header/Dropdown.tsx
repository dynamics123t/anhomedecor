/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DropDown = () => {
  const [isDropDown, setDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

 
  return (
    <div className="relative" ref={dropDownRef}>
      <button
        onClick={() => setDropDown(!isDropDown)}
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600  md:mr-0 focus:ring-4 focus:ring-gray-100 "
        type="button"
      >
        <span className="sr-only">Open user menu</span>
       
        <Image
          className="cursor-pointer"
          src="/images/chevron-down-solid.svg"
          alt=""
          width={24}
          height={24}
        />
      </button>

      {isDropDown && (
        <div
          id="dropdownAvatarName"
          className="z-10 top-10 left-0 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
        
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <Link
                href="/user/profile"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Quy trình
              </Link>
            </li>
            <li>
              <a
                href="/user/history"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Nhà xưởng
              </a>
            </li>
            <li>
              <a
                href="/user/changepassword"
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                Tuyển dụng
              </a>
            </li>
          </ul>
          <div className="py-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 "
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;