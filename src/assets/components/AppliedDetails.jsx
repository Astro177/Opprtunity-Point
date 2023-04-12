import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import JobDetails from "./JobDetails";

const AppliedDetails = ({ savedJob }) => {
  const {
    image,
    job_title,
    company_name,
    job_type,
    job_time,
    company_location,
    job_salary,
    id
  } = savedJob;
  return (
    <div>
      <div className="flex gap-4 items-center border border-gray-300 p-4">
        <div>
          <img src={image} alt="" className="h-32 w-32 mx-6 rounded-full" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-xl mb-2">{job_title}</p>
              <p className="font-semibold mb-4">{company_name}</p>
              <div className="flex mb-4">
                <button className="btn-outlined">{job_type}</button>
                <button className="btn-outlined">{job_time}</button>
              </div>
              <div className="flex gap-2">
                <MapPinIcon className="h-6 w-6" />
                {company_location}
                <CurrencyDollarIcon className="h-6 w-6" />
                {job_salary}
              </div>
            </div>
            <div>
             <Link to={`../job/${id}`}> <button className="btn-primary">View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedDetails;
