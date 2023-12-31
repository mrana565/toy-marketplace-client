import { FaTruck, FaLock, FaHeadphonesAlt, FaGrunt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="Container grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      <div
        data-aos="flip-left"
        data-aos-duration="2000"
        className="service p-8 shadow-xl rounded-lg text-center space-y-3"
      >
        <FaTruck className="block mx-auto text-5xl text-blue-400" />

        <h4 className="text-xl font-bold text-[#405a7f]">Free Delivery</h4>
        <p>Delivery to any point of the city and regions</p>
      </div>
      <div
        data-aos="flip-right"
        data-aos-duration="2000"
        className="service p-8 shadow-xl rounded-lg text-center space-y-3"
      >
        <FaLock className="block mx-auto text-5xl text-blue-400" />

        <h4 className="text-xl font-bold text-[#405a7f]">Easy and Secure</h4>
        <p>Online payment with credit and debit card</p>
      </div>
      <div
        className="service p-8 shadow-xl rounded-lg text-center space-y-3"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <FaHeadphonesAlt className="block mx-auto text-5xl text-blue-400" />

        <h4 className="text-xl font-bold text-[#405a7f]">24/7 Support</h4>
        <p>We are always ready to take your phone</p>
      </div>
      <div
        className="service p-8 shadow-xl rounded-lg text-center space-y-3"
        data-aos="flip-left"
        data-aos-duration="2000"
      >
        <FaGrunt className="block mx-auto text-5xl text-blue-400" />

        <h4 className="text-xl font-bold text-[#405a7f]">100% Original</h4>
        <p>We are always sell branded item.</p>
      </div>
    </div>
  );
};

export default Service;
