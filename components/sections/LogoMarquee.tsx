import React from "react";

const logos = [
  {
    id: 1,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-500"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 2,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-500"
      >
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: 3,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-500"
      >
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-500"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    icon: (
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-500"
      >
        <path
          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const LogoMarquee = () => {
  return (
    <section className="bg-[#F5F5F6] lg:py-20 md:py-10 py-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-[#F5F5F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-[#F5F5F6] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            <div className="flex items-center lg:gap-x-16 md:gap-x-12 gap-x-8 gap-y-8 pr-16">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex items-center gap-2 text-gray-500 shrink-0"
                >
                  {logo.icon}
                  <span className="text-2xl font-bold tracking-tight whitespace-nowrap">
                    Logoipsum
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-x-16 gap-y-8 pr-16">
              {logos.map((logo) => (
                <div
                  key={`dup-${logo.id}`}
                  className="flex items-center gap-2 text-gray-500 shrink-0"
                >
                  {logo.icon}
                  <span className="text-2xl font-bold tracking-tight whitespace-nowrap">
                    Logoipsum
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
