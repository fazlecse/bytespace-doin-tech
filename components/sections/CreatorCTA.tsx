import Image from "next/image";
import React from "react";

const CreatorCTA = () => {
  return (
    <section className="bg-secondary lg:py-21 md:py-16 py-12 relative overflow-hidden z-0">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className=" text-white lg:text-[44px] md:text-4xl text-3xl font-semibold leading-tight tracking-[-0.01em]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="text-[#F5F5F6] lg:mt-10 md:mt-6 mt-4 max-w-241 text-lg mx-auto leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="lg:mt-10 md:mt-6 mt-4 cursor-pointer bg-primary hover:bg-primary/90 text-heading font-medium text-lg px-6 py-3 rounded-full transition-colors">
          Join as Creator
        </button>
      </div>

      <Image
        className="absolute bottom-0 top-0 right-0 left-0 -z-2 h-full w-full object-cover"
        src="/line-shape.svg"
        alt="Hero image"
        width={1440}
        height={1024}
      />
      <Image
        className="absolute bottom-0 right-0 left-0 -z-1 w-full xl:block hidden"
        src="cta-bg.svg"
        alt="cta bg"
        width={1719}
        height={803}
      />
    </section>
  );
};

export default CreatorCTA;
