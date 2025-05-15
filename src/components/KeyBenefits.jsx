import React from "react";

function KeyBenefits() {
  return (
    <section className="bg-[#2E2E2E] text-white py-20 px-6">
      <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Coloana 1: Text principal + buton */}
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Built for outperformance.
          </h2>
          <p className="text-gray-300 mb-6">
            COVID-19 and the developing global dynamic is forcing firms to
            rethink how they view technology.
          </p>
          <ul className="text-gray-200 space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <img src="/ckeckmark.png" alt="" />
              gets technological hurdles
            </li>
            <li className="flex items-center gap-2">
              <img src="/ckeckmark.png" alt="" /> out of your way so you can see
            </li>
          </ul>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200">
            See Our Platform
          </button>
        </div>

        {/* Coloana 2: 4 beneficii (2x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Beneficiu 1 */}
          <div>
            <div className="text-3xl mb-2">
              <img src="/security-user.png" alt="security-user" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Single source</h3>
            <p className="text-gray-400 text-sm">
              All modules use the same background data model, eliminating
              inconsistency.
            </p>
          </div>

          {/* Beneficiu 2 */}
          <div>
            <div className="text-3xl mb-2">
              <img src="/layer.png" alt="layer" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Software Service</h3>
            <p className="text-gray-400 text-sm">
              Portfolio managers, risk, and accounting see continuously.
            </p>
          </div>

          {/* Beneficiu 3 */}
          <div>
            <div className="text-3xl mb-2">
              <img src="/emoji-happy.png" alt="emoji-happy" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Work from anywhere</h3>
            <p className="text-gray-400 text-sm">
              Front-, middle-, and back-office users can perform their
              functions.
            </p>
          </div>

          {/* Beneficiu 4 */}
          <div>
            <div className="text-3xl mb-2">
              <img src="/data-2.png" alt="data-2" />
            </div>
            <h3 className="font-semibold text-lg mb-1">API-powered</h3>
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
