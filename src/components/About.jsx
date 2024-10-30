import React from "react";

const About = () => {
  return (
    <div className="text-[#94A3B8] text-base font-medium flex flex-col gap-10 pl-20">
      <p>
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{" "}
        <span className="text-teal-300">advertising agency</span>, a{" "}
        <span className="text-teal-300">start-up</span>, a{" "}
        <span className="text-teal-300">huge corporation</span>, and a{" "}
        <span className="text-teal-300">digital product studio</span>.
      </p>
      <p>
        My main focus these days is building accessible user interfaces for our
        customers at <span className="text-teal-300">Klaviyo</span>. I most
        enjoy building software in the sweet spot where design and engineering
        meet — things that look good but are also built well under the hood. In
        my free time, I've also released an{" "}
        <span className="text-teal-300">online video course</span> that covers
        everything you need to know to build a web app with the Spotify API.
      </p>
      <p>
        When I’m not at the computer, I’m usually rock climbing, reading,
        hanging out with my wife and two cats, or running around Hyrule
        searching for Korok seeds{" "}
        <span className="text-teal-300">Korokseeds.</span>
      </p>
    </div>
  );
};

export default About;