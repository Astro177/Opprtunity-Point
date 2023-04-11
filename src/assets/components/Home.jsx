import React, { useState } from "react";
import Lottie from "lottie-react";
import homeanimation from "/Projects/Assignment-9/public/Home Animation/Home Animation.json";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";
import JobCategory from "./JobCategory";

const Home = () => {
  const { jobs } = useLoaderData();
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => {
    setSeeMore(true);
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-container bg-gray-100 lg:max-h-fit">
        <div>
          <p className="text-7xl font-bold mb-8">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-700">Dream Job</span>
          </p>
          <p className="text-slate-500 font-semibold mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div>
          <Lottie animationData={homeanimation} loop={true} />
        </div>
      </div>
      <JobCategory />
      <div className="text-center mt-24">
        <p className="text-4xl font-bold mb-4">Featured Jobs</p>
        <p className="text-slate-500 mb-16">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-48">
          {jobs.slice(0, seeMore ? 8 : 4).map((job) => (
            <FeaturedJobs key={job.id} job={job} />
          ))}
        </div>
      </div>
      <div className="mb-12 text-center">
        {
          !seeMore && (<button className="btn-primary" onClick={() => handleSeeMore()}>
          See More
        </button>)
        }
      </div>
    </div>
  );
};

export default Home;
