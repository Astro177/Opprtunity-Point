import React from "react";
import {
  CalculatorIcon,
  LightBulbIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const JobCategory = () => {
  return (
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
  );
};

export default JobCategory;
