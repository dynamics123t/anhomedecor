/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Tuyendung() {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center min-h-screen py-10">
        <Image
          className="mx-auto w-full max-w-4xl"
          src="/images/hiring.png"
          width={1000}
          height={1000}
          alt="Quy trình"
        />
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Mô Tả Công Việc
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Nghiên Cứu và Phân Tích:
            </h2>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>
                Nghiên cứu thị trường và phân tích nhu cầu của khách hàng để
                hiểu rõ hơn về xu hướng và yêu cầu thiết kế nội thất.
              </li>
              <li>Nghiên cứu hiện trạng và đưa ra mục tiêu thiết kế cụ thể.</li>
              <li>
                Phân tích dữ liệu thiết kế về bối cảnh, phong cách, yêu cầu
                thiết kế, ….
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Thiết Kế Sáng Tạo:
            </h2>
            <p className="mb-6 text-gray-600">
              Tạo ra các ý tưởng và bản vẽ thiết kế nội thất sáng tạo và chất
              lượng, đồng thời đảm bảo rằng chúng đáp ứng được các yếu tố thẩm
              mỹ, chức năng và kỹ thuật.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Tư Vấn Khách Hàng:
            </h2>
            <p className="mb-6 text-gray-600">
              Gặp gỡ khách hàng để lắng nghe ý kiến, đánh giá và đề xuất giải
              pháp thiết kế phù hợp với mong muốn và ngân sách của họ.
            </p>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Yêu Cầu Công Việc
            </h1>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Sự sáng tạo và khả năng tư duy thiết kế vượt trội.</li>
              <li>
                Đã làm qua nhiều dự án, đặc biệt là trong các dự án cao cấp.
              </li>
              <li>
                Có kiến thức chuyên sâu về thiết kế nội thất: nguyên tắc màu
                sắc, vật liệu, nguyên tắc tỷ lệ, nhịp điệu, kết cấu, phân tích
                hiện trạng …
              </li>
              <li>Kỹ năng trao đổi, tư vấn, thuyết trình tốt.</li>
              <li>
                Sử dụng thành thạo các phần mềm thiết kế như AutoCAD, SketchUp,
                3ds Max, v.v.
              </li>
              <li>
                Chấp nhận làm việc ngoài giờ, đảm bảo hoàn thành dự án đúng tiến
                độ. Đáp ứng được workload lớn.
              </li>
            </ul>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Quyền Lợi
            </h1>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Bảo hiểm y tế, bảo hiểm xã hội, bảo hiểm thất nghiệp.</li>
              <li>
                Mức thu nhập từ 15tr đến 18tr dựa vào năng lực và đóng góp trong
                công việc.
              </li>
              <li>Được đào tạo bởi các chuyên gia đầu ngành.</li>
              <li>
                Được làm việc trong môi trường chuyên nghiệp, cạnh tranh hàng
                đầu trong ngành thiết kế nội thất.
              </li>
              <li>Thưởng lễ, Tết, lương tháng 13.</li>
              <li>Du lịch trong nước, nước ngoài.</li>
            </ul>
          </div>
        </div>

        <Image
          className="mx-auto w-full max-w-5xl my-10"
          src="/images/1.png"
          width={1000}
          height={1000}
          alt="Hình ảnh 1"
        />
      </div>

      {/* Contact section */}
      <h1 className="text-4xl font-bold text-center my-8 text-orange-700">
        LIÊN HỆ TƯ VẤN
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center my-8 space-y-6 sm:space-y-0 sm:space-x-12">
        <Link
          href="https://zalo.me/0933687989"
          target="_blank"
          className="mx-12"
        >
          <img
            src="/images/contact.png"
            className="w-auto max-h-[85vh] max-w-[90vw] object-contain"
            alt="Liên hệ"
          />
        </Link>
        <Link href="https://zalo.me/0939116237" target="_blank">
          <img
            src="/images/mrsnhung.png"
            className="w-auto max-h-[85vh] max-w-[90vw] object-contain"
            alt="Liên hệ"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
