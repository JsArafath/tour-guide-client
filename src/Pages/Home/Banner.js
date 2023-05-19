import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://i.ibb.co/6gjNHps/21684314-Sightseeing-visit-by-group-of-tourists-and-lady-guide-with-flag.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content  text-neutral-content">
        {/* <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-gray-200">
            A Perfect Adventure
          </h1>
          <p className="mb-5">Memory Of Lifeline</p>
          <button className="btn btn-primary">Get Started</button>
        </div> */}
      </div>
    </div>
  );
};
export default Banner;
