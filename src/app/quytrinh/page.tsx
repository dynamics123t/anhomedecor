/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function quytrinh() {
  return (
    <div>
      <Header />

      <div className="flex flex-col justify-center items-center min-h-screen py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          QUY TRÌNH THIẾT KẾ THI CÔNG NỘI THẤT
        </h1>
        <p className="text-sm font-medium text-center mb-8 mx-4 md:mx-0">
          Với tiêu chí “Giữ nguyên chất lượng từ công xưởng đến tổ ấm”, toàn bộ{" "}
          <br />
          sản phẩm đều trải qua quy trình 6 bước được thực hiện và kiểm soát{" "}
          <br />
          hoàn toàn bởi ANHOME, không qua trung gian, không thuê mướn, đảm bảo
          kiểm soát chi phí tối ưu nhất.
        </p>

        <Image
          className="mx-auto w-3/4 max-w-4xl"
          src="/images/quytrinh.jpg"
          width={1000}
          height={1000}
          alt="Quy trình"
        />

        <Image
          className="mx-auto w-3/4 max-w-5xl my-10"
          src="/images/1.png"
          width={1000}
          height={1000}
          alt="Hình ảnh 1"
        />
        <h1 className="text-4xl font-bold text-center">NHÀ XƯỞNG</h1>
        <p className="text-sm font-medium text-center mb-8 mx-4 md:mx-0">
          Chúng tôi đầu tư vào nhà xưởng với diện tích 1000m², được thiết kế{" "}
          <br />
          thông minh nhằm tối ưu hóa quy trình sản xuất. Với sự trang bị đầy đủ{" "}
          <br />
          máy móc hiện đại, bao gồm 5 máy cắt, 3 máy gia công và 2 máy lắp ráp,{" "}
          <br />
          chúng tôi đảm bảo khả năng sản xuất linh hoạt, đáp ứng nhanh chóng mọi{" "}
          <br />
          nhu cầu của khách hàng. Môi trường làm việc sạch sẽ và an toàn không{" "}
          <br />
          chỉ đảm bảo chất lượng sản phẩm mà còn nâng cao tinh thần làm việc của
          đội ngũ nhân viên.
        </p>
        <Image
          className="mx-auto w-3/4 max-w-5xl my-10"
          src="/images/2.png"
          width={1000}
          height={1000}
          alt="Hình ảnh 2"
        />
        <h1 className="text-4xl font-bold text-center">NHÂN SỰ</h1>
        <p className="text-sm font-medium text-center mb-8 mx-4 md:mx-0">
          Chúng tôi tự hào có đội ngũ 30 nhân viên giàu kinh nghiệm, được đào
          tạo bài bản và chuyên môn cao. Đội ngũ này bao gồm: <br />
          20 công nhân sản xuất có tay nghề, đảm bảo quy trình sản xuất diễn ra
          trơn tru. <br />5 nhân viên quản lý có khả năng lãnh đạo và giám sát
          chất lượng. <br />3 nhân viên bán hàng nhiệt tình, sẵn sàng tư vấn và
          hỗ trợ khách hàng. <br />
          2 nhân viên kho vận đảm bảo nguyên liệu và thành phẩm được quản lý
          hiệu quả. <br />
          Với đội ngũ này, chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách
          hàng, từ giai đoạn sản xuất đến khi giao hàng.
        </p>
        <Image
          className="mx-auto w-3/4 max-w-5xl my-10"
          src="/images/3.png"
          width={1000}
          height={1000}
          alt="Hình ảnh 3"
        />
        <h1 className="text-4xl font-bold text-center">VẬT TƯ</h1>
        <p className="text-sm font-medium text-center mb-8 mx-4 md:mx-0">
          Chúng tôi hiểu rằng nguyên liệu chất lượng là yếu tố then chốt quyết{" "}
          <br />
          định thành công của sản phẩm. Chúng tôi sử dụng nguyên liệu cao cấp{" "}
          <br />
          như gỗ tự nhiên, sơn và keo, được nhập khẩu từ các nhà cung cấp uy
          tín. <br /> Với diện tích kho lên đến 200m² cho nguyên liệu và 100m²
          cho thành phẩm, <br /> chúng tôi đảm bảo khả năng lưu trữ và quản lý
          hàng tồn kho hiệu quả. Hệ thống quản lý tồn kho hiện đại giúp <br />{" "}
          chúng tôi theo dõi chính xác lượng nguyên liệu và sản phẩm, từ đó
          tối ưu hóa quy trình sản xuất và giảm thiểu lãng phí.
        </p>
        <Image
          className="mx-auto w-3/4 max-w-5xl my-10"
          src="/images/4.png"
          width={1000}
          height={1000}
          alt="Hình ảnh 4"
        />
        <h1 className="text-4xl font-bold text-center">CAM KẾT</h1>
        <p className="text-sm font-medium text-center mb-8 mx-4 md:mx-0">
          Chúng tôi cam kết mang đến sản phẩm chất lượng cao nhất với giá cả
          cạnh tranh nhất. <br /> Hãy để chúng tôi đồng hành cùng bạn trong hành
          trình phát triển bền vững!
        </p>
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
