import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Thông tin liên hệ</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Showroom: T5-16 Mahatan, Vinhome Grand Park, Hồ Chí Minh, Thành phố Hồ Chí Minh, Vietnam
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Xưởng: Thủ đức</a>
              </li>
            </ul>
          </div>

          {/* Dịch vụ nổi bật */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Dịch vụ nổi bật</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Thiết kế nội thất</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Thiết kế nội thất chung cư</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Thiết kế nội thất nhà phố</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Thiết kế nội thất biệt thự</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Thi công nội thất</a>
              </li>
            </ul>
          </div>

          {/* Bài viết nổi bật */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Bài viết nổi bật</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Mẫu tủ bếp đẹp</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Mẫu nhà bếp nhỏ đẹp đơn giản</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Phòng ngủ màu hồng đẹp</a>
              </li>
            </ul>
          </div>

          {/* Thời gian làm việc */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Thời gian làm việc:</h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Thứ 2 đến CN: Từ 8h đến 17h</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Online: Hỗ trợ 24/7</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Hotline: 0933 68 79 89</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Email: lanhainfo@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
