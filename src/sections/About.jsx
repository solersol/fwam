
import React from 'react';
import { about } from "../assets/images";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 pl-64 pt-0 mt-0 pb-0 mb-0">
      <div className="lg:w-6/12 p-2">
        <h1 className="font-elite text-[30px] font-black mb-8 text-[#fcffd3]">WHO's $AVTU</h1>
        <h2 className="font-elite text-[22px] mb-4 text-[#fcffd3]">
          You can smell his sweat from a mile away. You can hear his cranky voice in your dreams. You can hear saliva dripping down on his table & you can hear the crumbs falling on the floor...
          <br />
          <br />We all know him, it's $AVTU. The average trx user looks just like this they are a bit stupid in general so we decided to expose them join the tg if you agree
          <br /><br />
          Can we all expose them now lol?
        </h2>
      </div>
      <div className=" h-full p-1  flex justify-center">
        <img src={about} alt="New Section" className=" " />
      </div>
    </section>
  );
};

export default About;
