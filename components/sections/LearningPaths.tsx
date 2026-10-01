import React from "react";

const paths = [
  {
    id: 1,
    name: "Design",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Development",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "IT & Software",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Business",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Marketing",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Photography",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

const LearningPaths = () => {
  return (
    <section className="bg-white lg:pt-18 md:pt-14 pt-12 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-229.25 mx-auto">
          <h3 className="text-4xl font-semibold text-heading tracking-[-0.01em]">
            Explore Diverse Learning Paths at Bytespace
          </h3>
          <p className="text-gray-500 mt-4">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* Paths Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-10 md:gap-6 gap-4 lg:mt-17 md:mt-12 mt-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="flex flex-col items-center p-6 rounded-2xl border border-[#CED0D3] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-15 h-15 rounded-full bg-primary flex items-center justify-center text-heading group-hover:bg-primary transition-colors">
                {path.icon}
              </div>
              <span className="text-heading font-medium text-xl mt-3 text-center">
                {path.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
