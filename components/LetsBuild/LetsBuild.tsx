import React from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";

const LetsBuild = () => {
  return (
    <section className="bg-white">
      <div className="xl:container xl:mx-auto py-12 md:py-24 px-8 lg:px-20 2xl:px-40">
        <h2 className="italic font-light font-sans-light tracking-wide text-5xl max-[768px]:text-4xl">
          Let's build
        </h2>

        <h2 className="mt-5 italic font-extrabold tracking-wide text-5xl max-[768px]:text-4xl">
          something amazing together!
        </h2>

        <p className="mt-5 tracking-wider leading-normal text-xl font-light lg:pr-32 pt-4 pb-12">
          We put you at the centre of everything we do. Top class service and a
          memorable experience awaits..
        </p>

        <LetsTalk text="LET'S TALK" />
      </div>
    </section>
  );
};

export default LetsBuild;
