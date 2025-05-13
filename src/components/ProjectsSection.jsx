import React from "react";

function ProjectsSection() {
  return (
    // Fundal întins complet
    <section className="w-full bg-gray-50 py-[115px] px-4 pb-[154px]">
      {/* Containerul limitat la 1140px */}
      <div className="max-w-[1140px] mx-auto w-full px-[20px] md:px-[60px]">
        {/* Titlu Central */}
        <div className="text-center mb-8 w-full">
          <h1 className="font-bold text-[52px] leading-[119%] text-center text-[#110f14] mb-[18px]">
            All things in perspective.
          </h1>
          <p className="text-lg mt-2 max-w-[490px] mx-auto">
            Wiaka gets technological hurdles out of your way so you can see,
            perform, and grow at the height of your talents.
          </p>
        </div>

        {/* Grid de Carduri */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
          {/* Card 1 - Sus pe toată lățimea */}
          <div className="p-[32px]   pb-0 bg-[#e6cab5] rounded-lg  col-span-2 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            {/* Text */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-[28px] text-[#110f14]">
                Wiaka wins Best Solution
              </h2>
              <p className="max-w-[475px] font-normal text-[18px] text-[#828282]">
                Wiaka Wins Best Institutional in the Investment Solution at the
                2021 of FinTech Breakthrough COVID-19.
              </p>
              <a href="#" className="text-blue-500 mt-4 block">
                Learn More
              </a>
            </div>

            {/* Imagine */}
            <div className="flex-shrink-0 self-end">
              <img
                src="/Projects-img-1.png"
                alt="Placeholder"
                className="object-cover rounded-md w-full md:w-[452px] h-auto md:h-[244px] max-w-full"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-[42px] pb-0 bg-[#e6cab5] rounded-lg  w-full flex flex-col justify-between h-full">
            <div className="mb-[32px]">
              <h2 className="text-xl font-semibold mb-2">
                Japanese Hedge Funds
              </h2>
              <p className="text-gray-700">
                Japanese hedge funds generated an absolute return of 5% at the
                end of 2020's Q3—Investment Solution.
              </p>
              <a href="#" className="text-blue-500 mt-4 block">
                Learn More
              </a>
            </div>
            <img
              src="/Photo-3.png"
              alt="Placeholder"
              className="object-cover rounded-md w-full md:w-[507px] h-auto md:h-[282px] max-w-full"
            />
          </div>

          {/* Card 3 */}
          <div className="p-[42px]   pb-0 bg-[#e6cab5] rounded-lg w-full flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-2">Webinar Replay</h2>
              <p className="text-gray-700">
                This reprioritization and with the reallocation of resources,
                along with a changing landscape.
              </p>
              <a href="#" className="text-blue-500 mt-4 block">
                Learn More
              </a>
            </div>
            <img
              src="/Photo-2.png"
              alt="Placeholder"
              className="object-cover rounded-md w-full md:w-[434px] h-auto md:h-[228px] max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
