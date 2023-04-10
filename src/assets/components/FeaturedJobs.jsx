import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    image,
    company_location,
    job_type,
    job_time,
    job_salary,
  } = job;
  return (
    <div className="mb-16 border border-slate-200 p-8">
      <img src={image} alt="" className="w-24 h-12 mb-4" />
      <p className="font-semibold text-lg mb-2">{job_title}</p>
      <p className="mb-4">{company_name}</p>
      <div className="flex gap-4 mb-4 -mx-4">
        <div>
          <button className="btn-outlined">{job_type}</button>
        </div>
        <div>
          <button className="btn-outlined">{job_time}</button>
        </div>
      </div>
      <div className="flex gap-12">
        <MapPinIcon className="w-6 h-6" />
        <div className="-mx-10">{company_location}</div>
        <CurrencyDollarIcon className="w-6 h-6" />{" "}
        <div className="-mx-8 mb-4">Salary: {job_salary}</div>
      </div>
      <Link to={`../job/${id}`}>
        <button className="btn-primary">View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
