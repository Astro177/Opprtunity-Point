import React from "react";
import Lottie from "lottie-react";
import homeanimation from "/Projects/Assignment-9/public/Home Animation/Home Animation.json";
import {
  CalculatorIcon,
  LightBulbIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  const { jobs } = useLoaderData();
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
      <div className="text-center mt-12">
        <p className="text-4xl font-bold mb-4">Job Category List</p>
        <p className="text-slate-500 mb-16">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mx-auto bg-violet-100 p-6 rounded-lg category-hover">
            <CalculatorIcon className="h-8 w-8 text-purple-500  mb-4" />
            <p className="font-bold text-xl">Account & Finance</p>
            <p className="text-slate-500">300+ Jobs Available</p>
          </div>
          <div className="mx-auto bg-violet-100 p-6 rounded-lg category-hover">
            <LightBulbIcon className="h-8 w-8 text-purple-500  mb-4" />
            <p className="font-bold text-xl">Creative Design</p>
            <p className="text-slate-500">100+ Jobs Available</p>
          </div>
          <div className="mx-auto bg-violet-100 p-6 rounded-lg category-hover">
            <CpuChipIcon className="h-8 w-8 text-purple-500  mb-4" />
            <p className="font-bold text-xl">Marketing & Sales</p>
            <p className="text-slate-500">150+ Jobs Available</p>
          </div>
          <div className="mx-auto bg-violet-100 p-6 rounded-lg category-hover">
            <ChartBarIcon className="h-8 w-8 text-purple-500  mb-4" />
            <p className="font-bold text-xl">Engineering Jobs</p>
            <p className="text-slate-500">220+ Jobs Available</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-24">
        <p className="text-4xl font-bold mb-4">Featured Jobs</p>
        <p className="text-slate-500 mb-16">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-48">
          {jobs.map((job) => (
            <FeaturedJobs key={job.id} job={job} />
          ))}
        </div>
      </div>
      <div className="mb-12 text-center">
      <button className="btn-primary">See More</button>
      </div>
    </div>
  );
};

export default Home;
