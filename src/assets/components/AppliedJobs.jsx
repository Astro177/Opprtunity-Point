import { useEffect, useState } from "react";
import { getAppliedJob } from "../utilities/fakeDB";
import AppliedDetails from "./AppliedDetails";

const AppliedJobs = () => {
  const [jobs, seJobs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => seJobs(data));
  }, []);
  const data = getAppliedJob();
  const savedJobs = [];
  for (const id in data) {
    const addedJob = jobs.jobs?.find((job) => job.id == id);
    if (addedJob) {
      savedJobs.push(addedJob);
    }
  }
  return (
    <div>
      <div className="font-bold text-5xl h-40 bg-slate-100 flex justify-center items-center">
        Applied Jobs
      </div>
      <div className="flex justify-center">
        <select className="mt-8 w-18 h-12 font-semibold rounded-md p-2 bg-slate-200">
          <option>Filter By</option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>
      <div className="flex flex-col gap-12 my-container items-center">
        {savedJobs.map((savedJob) => (
          <AppliedDetails savedJob={savedJob} key={savedJob.id} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
