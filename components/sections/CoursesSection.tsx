"use client";

import Image from "next/image";
import React, { useState } from "react";
import LearningPaths from "./LearningPaths";
import { Signal } from "lucide-react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-1.png",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-2.png",
    category: "Digital Illustration",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-3.png",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-4.png",
    category: "Productivity",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-5.png",
    category: "Freelance & Entrepreneurship",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    instructor: "purepearl studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    students: 26,
    price: 25,
    image: "/courses/course-6.png",
    category: "Marketing",
  },
];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses =
    activeCategory === "Featured"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="bg-white lg:py-18 md:py-14 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-229.25 mx-auto">
          <h2 className="lg:text-[44px] md:text-4xl text-3xl font-semibold text-heading">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-3xl text-base font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-heading"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#4B4C53]/10"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="px-3 py-2 text-sm font-medium text-blue-500 hover:text-blue-600 cursor-pointer">
            + More
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-8 gap-6 lg:mt-19.25 md:mt-12 mt-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-[#CED0D3] p-4 hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative bg-gray-100 rounded-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={341}
                  height={195.14}
                  className="object-cover w-full"
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-4.75 left-3 right-3 flex justify-between lg:gap-3 md:gap-2 gap-1">
                  <span className="bg-[#F6F6F6]/60 backdrop-blur-md text-xs font-medium px-3 py-1.5 rounded-3xl">
                    {course.lessons} Lessons
                  </span>
                  <span className="bg-[#F6F6F6]/60 backdrop-blur-md text-xs font-medium px-3 py-1.5 rounded-3xl">
                    {course.duration}
                  </span>
                  <span className="bg-[#F6F6F6]/60 backdrop-blur-md text-xs font-medium px-3 py-1.5 rounded-3xl">
                    {course.comments} Comments
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="pt-5">
                <div className="flex items-start justify-between">
                  <h5 className="text-heading font-semibold text-xl leading-tight tracking-[-0.01em]">
                    {course.title}
                  </h5>
                  <div className="flex items-center gap-1 ml-2 shrink-0">
                    <span className="text-[#4F4F4F] text-lg">
                      {course.rating}
                    </span>
                    <svg
                      className="w-6 h-6 text-[#CED0D3]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-[#4F4F4F] text-xs">
                  by <span className="text-[#003BE2]">{course.instructor}</span>
                </p>

                {/* Level & Students */}
                <div className="flex items-center  mt-4 gap-3">
                  <div className="flex items-center gap-1 bg-[#F5F5F6] px-4 py-2.25 rounded-3xl">
                    <Signal width={16} height={16} />
                    <span className="text-gray-500 text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    <Image
                      src="/happy-students/student-1.png"
                      alt="student-1"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/happy-students/student-2.png"
                      alt="student-2"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/happy-students/student-3.png"
                      alt="student-3"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/happy-students/student-4.png"
                      alt="student-4"
                      width={32}
                      height={32}
                    />
                    <span className="bg-primary text-heading font-medium text-xs p-1 flex justify-center items-center rounded-full w-8 h-8">
                      26+
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-[#003BE2] font-semibold text-xl font-heding">
                    ${course.price}
                  </span>
                  <span className="text-[#4F4F4F] text-xs">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LearningPaths />
    </section>
  );
};

export default CoursesSection;
