import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  InboxIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const { id } = useParams();
  const jobData = useLoaderData();
  const [selectedJob, setSelectedJob] = useState(null);
  useEffect(() => {
    const selectedJob = jobData.jobs.find((job) => job.id === id);
    setSelectedJob(selectedJob);
  }, [id]);
  if (!selectedJob) {
    return <div>Not found</div>;
  }
  return (
    <div>
      <div className="font-bold text-5xl h-40 bg-slate-100 flex justify-center items-center">
        <p>Job Details</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-container gap-4">
        <div>
          <p className="mt-8">
            <span className="font-bold">Job Description:</span>{" "}
            {selectedJob.job_description}
          </p>
          <p className="mt-4">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {selectedJob.job_responsibility}
          </p>
          <p className="mt-4">
            <span className="font-bold">Educational Requirements:</span>{" "}
            {selectedJob.education_requirements}
          </p>
          <p className="mt-4">
            <span className="font-bold">Experiences:</span>{" "}
            {selectedJob.experience}
          </p>
        </div>
        <div>
          <div className="bg-slate-200 p-4 rounded-2xl text-center">
            <p className="font-bold text-xl mb-4">Job Details</p>
            <hr className="border-violet-300" />
            <div className="flex gap-2 mt-4 items-center">
              <div>
                <CurrencyDollarIcon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <span className="font-semibold">Salary:</span>
                {selectedJob.job_salary}
              </div>
            </div>
            <div className="flex gap-2 mt-3 mb-6 items-center">
              <div>
                <CalendarDaysIcon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <span className="font-semibold">Job Title:</span>
                {selectedJob.job_title}
              </div>
            </div>
            <p className="font-bold text-xl mb-4">Contact Information</p>
            <hr className="mb-4 border-violet-300" />
            <div className="flex gap-2 items-center">
              <div>
                <PhoneIcon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <span className="font-semibold">Phone</span>:{selectedJob.phone}
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div>
                <InboxIcon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <span className="font-semibold">Email</span>:{selectedJob.email}
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div>
                <MapPinIcon className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <span className="font-semibold">Location</span>:
                {selectedJob.company_location}
              </div>
            </div>
          </div>
          <button className="btn-primary mt-4">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
