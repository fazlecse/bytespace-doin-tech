import React from "react";
import SearchBox from "../ui/SearchBox";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-8 lg:pt-45 pt-28 bg-secondary relative z-0">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-233.75 mx-auto text-center">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="pt-8 text-[#E5E6E8]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <SearchBox className="lg:pt-15 pt-8" />
        </div>
        <div className="relative md:w-144.5 md:h-135.25 mx-auto">
          <Image
            className="w-full h-full object-cover"
            src="/hero-img.png"
            alt="Hero image"
            width={578}
            height={541}
          />

          <div className="absolute md:-left-17.5 left-0 hidden md:block top-31.25 bg-white rounded-2xl p-4 z-10">
            <p className="text-heading font-medium text-base">UI/UX Design</p>
            <p className="text-xs mt-1">200 Courses • 1000+ Students</p>
          </div>

          {/* Learning Progress Card */}
          <div className="absolute md:-right-5 right-0 hidden md:block  top-37 bg-white rounded-2xl p-4 z-10 md:w-58 w-auto">
            <p className="text-heading font-medium text-sm">
              Learning Progress
            </p>
            <h2 className="text-heading font-bold lg:text-5xl md:text-4xl text-3xl mt-2">55%</h2>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>

          {/* Happy Students Card */}
          <div className="absolute lg:-left-40 md:-left-10 md:bottom-16.5 bottom-3 bg-white rounded-2xl p-4 z-10">
            <p className="text-heading font-medium text-base">Happy Students</p>
            <div className="md:flex items-center gap-1 mt-1 text-xs hidden">
              <span className="text-heading">4.5</span>
              <span>(240)</span>
              <svg
                className="w-4 h-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="flex items-center mt-3">
              <div className="flex -space-x-4.25">
                <Image
                  src="/happy-students/student-1.png"
                  alt="student-1"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-2.png"
                  alt="student-2"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-3.png"
                  alt="student-3"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-4.png"
                  alt="student-4"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-5.png"
                  alt="student-5"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-6.png"
                  alt="student-6"
                  width={43}
                  height={43}
                />
                <Image
                  src="/happy-students/student-7.png"
                  alt="student-7"
                  width={43}
                  height={43}
                />
                <span className="bg-primary text-heading font-bold text-xs p-1 flex justify-center items-center rounded-full w-10.75 h-10.75">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className=" mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 -z-1"
        src="/shape-1.svg"
        alt="Hero image"
        width={1149}
        height={1149}
      />
      <Image
        className="absolute bottom-0 top-0 right-0 left-0 -z-2 h-full w-full object-cover"
        src="/line-shape.svg"
        alt="Hero image"
        width={1440}
        height={1024}
      />
      <Image
        className="absolute bottom-0 right-0 left-0 -z-1 w-full"
        src="/3d-ornament.svg"
        alt="3d ornaments"
        width={1719}
        height={803}
      />
    </div>
  );
};

export default HeroSection;
