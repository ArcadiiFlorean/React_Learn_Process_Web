import React from "react";

function StrengthSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-12">
          Strength in numbers.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Bloc 1 */}
          <div>
            <h3 className="text-5xl font-bold text-[#0F172A]">9+</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Our global footprint allows for 24/6, follow-the-sun predates the
              rise a support.
            </p>
          </div>

          {/* Bloc 2 */}
          <div>
            <h3 className="text-5xl font-bold text-[#0F172A]">15+</h3>
            <p className="mt-4 text-gray-600 text-sm">
              The architecture of more our platform predates the rise of SaaS
              for industry.
            </p>
          </div>

          {/* Bloc 3 */}
          <div>
            <h3 className="text-5xl font-bold text-[#0F172A]">9000+</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Hundreds of funds trust Wiaka technology platform for their
              architecture operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrengthSection;
