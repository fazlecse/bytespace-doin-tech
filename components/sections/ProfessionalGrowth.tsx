import Image from "next/image";
import React from "react";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const ProfessionalGrowth = () => {
  return (
    <section className=" lg:pt-30 md:ty-20 pt-12 overflow-hidden relative z-0 lg:pb-0  pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Content */}
          <div>
            <h2 className="lg:text-[44px] md:text-4xl text-3xl font-semibold text-heading  leading-tight tracking-[-0.01em]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="text-[#4B4C53] lg:mt-10 md:mt-6 mt-4 leading-relaxed max-w-119.25">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div className="flex lg:gap-14 md:gap-10 gap-8 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#003BE2] font-heding">
                    {stat.value}
                  </div>
                  <div className="text-[#4B4C53] text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Cards */}
          <Image
            src="/professional-growth-1.png"
            alt="professional growth img 1"
            width={621}
            height={552}
            className="object-cover rounded-2xl lg:mx-auto"
          />
          <div
            className="absolute bottom-0 -left-78 w-284.25 h-284.25 opacity-40 blur-2xl rounded-full -z-1"
            style={{
              background:
                "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 -right-156 w-284.25 h-284.25 opacity-40 blur-2xl rounded-full -z-1"
            style={{
              background:
                "radial-gradient(circle, rgba(0,59,226,1) 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)",
            }}
          ></div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  mt-8">
          {/* Left Image with Cards */}
          <Image
            src="/professional-growth-2.png"
            alt="professional growth img 2"
            width={621}
            height={552}
            className="object-cover rounded-2xl lg:mx-auto"
          />

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="lg:text-[44px] md:text-4xl text-3xl font-semibold text-heading  leading-tight tracking-[-0.01em]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="text-[#4B4C53] lg:mt-10 md:mt-6 mt-4 leading-relaxed">
              <span className="font-semibold text-heading">ByteSpace</span>
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Features List */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-heading text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-46 -left-78 w-2xl h-168  opacity-60 blur-2xl rounded-full -z-1"
        style={{
          background:
            "radial-gradient(circle, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
        }}
      ></div>
      <div
        className="absolute -bottom-110 -right-156 w-284.25 h-284.25 opacity-40 blur-2xl rounded-full -z-1"
        style={{
          background:
            "radial-gradient(circle, rgba(0,59,226,1) 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)",
        }}
      ></div>
    </section>
  );
};

export default ProfessionalGrowth;
