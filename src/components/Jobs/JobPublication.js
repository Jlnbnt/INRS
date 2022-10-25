import React from "react";
import { JobPreview, JobDescription } from "./components/JobComponents";

import JobForm from "../Form/JobForm";
const JobPublication = () => {
  return (
    <div className="flex w-full text-light dark:text-dark">
      <JobPreview />
      <JobDescription />
      <JobForm />
    </div>
  );
};

export default JobPublication;
