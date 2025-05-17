import React from "react";

function KeyBenefits() {
  return (
    <section className="bg-[#2E2E2E] text-white py-20 px-6">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Col 1: Text principal + listă + buton */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Built for outperformance.
          </h2>
          <p className="text-gray-300 mb-6">
            COVID-19 and the developing global dynamic is forcing firms to
            rethink how they view technology.
          </p>
          <ul className="text-gray-200 space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <img src="/ckeckmark.png" alt="Checkmark" className="w-5 h-5 mt-1" />
              gets technological hurdles
            </li>
            <li className="flex items-start gap-2">
              <img src="/ckeckmark.png" alt="Checkmark" className="w-5 h-5 mt-1" />
              out of your way so you can see
            </li>
          </ul>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            See Our Platform
          </button>
        </div>

        {/* Col 2: 2x2 beneficii */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col gap-2">
            <img src="/security-user.png" alt="security-user" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Single source</h3>
            <p className="text-gray-400 text-sm">
              All modules use the same background data model, eliminating inconsistency.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col gap-2">
            <img src="/layer.png" alt="layer" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Software Service</h3>
            <p className="text-gray-400 text-sm">
              Portfolio managers, risk, and accounting see continuously.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col gap-2">
            <img src="/emoji-happy.png" alt="emoji-happy" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Work from anywhere</h3>
            <p className="text-gray-400 text-sm">
              Front-, middle-, and back-office users can perform their functions.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col gap-2">
            <img src="/data-2.png" alt="data-2" className="w-10 h-10" />
            <h3 className="font-semibold text-lg">API-powered</h3>
            <p className="text-gray-400 text-sm">
              Enfusion’s modules are built for plug-and-play integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyBenefits;
