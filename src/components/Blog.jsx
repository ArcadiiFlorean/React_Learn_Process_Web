import React from "react";
function Blog() {
  return (
    <section className="max-w-[1140px] mx-auto text-center pb-[200px]">
      <h1 className="text-start font-normal text-[48px] leading-[129%] uppercase text-[#1e2532] first-letter: pb-[32px]">
        Our blog{" "}
      </h1>
      <div className=" flex gap-[30px]">
        {/* card 1 */}
        <div className="text-start">
          <img
            src="/BlogImg-1.png"
            alt="BlogImg.png"
            className="w-96 h-60  mb-6 "
          />
          <span className="inline-block mb-6">July 20, 2021 </span>
          <h3 className="font-medium text-[24px] leading-[142%] text-black mb-[4px]">
            MakerDAO Has Come Full
          </h3>
          <p className="font-normal text-[16px] leading-[162%] text-[#3a3a3c]">
            With several Core Units approved by governance to efficiently
            organize.
          </p>
        </div>
        {/* card 2 */}
        <div className="text-start">
          <img
            src="/BlogImg-2.png"
            alt="BlogImg.png"
            className="w-96 h-60  mb-6 "
          />
          <span className="inline-block mb-6">July 20, 2021 </span>
          <h3 className="font-medium text-[24px] leading-[142%] text-black mb-[4px]">
            A Brief History of Finance
          </h3>
          <p className="font-normal text-[16px] leading-[162%] text-[#3a3a3c]">
            While the Bitcoin Protocol laid the more foundation for a new era of
            peer
          </p>
        </div>

        {/* card 3 */}

        <div className="text-start">
          <img
            src="/BlogImg-3.png"
            alt="BlogImg.png"
            className="w-96 h-60  mb-6 "
          />
          <span className="inline-block mb-6">July 20, 2021 </span>
          <h3 className="font-medium text-[24px] leading-[142%] text-black mb-[4px]">
            Why the MakerDAO Forum
          </h3>
          <p className="font-normal text-[16px] leading-[162%] text-[#3a3a3c]">
            In any organization, there are typically several channels through
            which
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
