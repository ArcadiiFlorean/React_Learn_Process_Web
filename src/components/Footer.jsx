import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-[#333] w-full px-[20px] md:px-[60px] py-12">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-custom3 font-medium text-[20px] mb-3">Platform</h3>
            <ul>
              {[
                "Platform Overview",
                "Portfolio Management",
                "Execution Management",
                "Analytics",
                "Accounting",
                "Connectivity",
                "Account Management",
              ].map((item, index) => (
                <li key={index} className="mb-[10px]">
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-custom3 font-medium text-[20px] mb-3">Solutions</h3>
            <ul>
              {[
                "Solutions Overview",
                "New Fund Launches",
                "Execution Management",
                "Funds Outgrowing",
                "Hedge Funds",
                "Family Offices",
                "CFOs and Accountants",
              ].map((item, index) => (
                <li key={index} className="mb-[10px]">
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - 2 columns (top and bottom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-custom3 font-medium text-[20px] mb-3">Strategic Services</h3>
            <ul>
              <li className="mb-[10px]"><a href="">Solutions Overview</a></li>
              <li className="mb-[10px]"><a href="">New Fund Launches</a></li>
              <li className="mb-[10px]"><a href="">Execution Management</a></li>
              <li className="mb-[10px]"><a href="">Funds Outgrowing</a></li>
            </ul>

            <h3 className="font-custom3 font-medium text-[20px] mt-6 mb-3">Insights</h3>
            <ul>
              <li className="mb-[10px]"><a href="">Latest Insights</a></li>
              <li className="mb-[10px]"><a href="">Fund Launch</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-custom3 font-medium text-[20px] mb-3">Careers</h3>
            <ul>
              <li className="mb-[10px]"><a href="">Careers Overview</a></li>
              <li className="mb-[10px]"><a href="">Open Positions</a></li>
            </ul>

            <h3 className="font-custom3 font-medium text-[20px] mt-6 mb-3">Company</h3>
            <ul>
              <li className="mb-[10px]"><a href="">Company Overview</a></li>
              <li className="mb-[10px]"><a href="">Awards</a></li>
              <li className="mb-[10px]"><a href="">In The News</a></li>
              <li className="mb-[10px]"><a href="">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row: logo + text + icons */}
      <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-12 border-t mt-12 text-gray-600">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Wiak Logo" className="w-6 h-6" />
          <span className="font-semibold">Wiak</span>
          <span className="ml-2">&copy; 2021 Wiak. All rights reserved.</span>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <a href="#" aria-label="Google">
              <i className="bi bi-google text-xl hover:text-blue-600 transition-colors"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter text-xl hover:text-blue-400 transition-colors"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram text-xl hover:text-pink-500 transition-colors"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Messenger">
              <i className="bi bi-messenger text-xl hover:text-blue-500 transition-colors"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
