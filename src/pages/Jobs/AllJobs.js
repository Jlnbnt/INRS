import React from "react";

import JobPublication from "../../components/Jobs/JobPublication";

const AllJobs = () => {
  return (
    <div className="h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] flex justify-center items-center">
      <JobPublication />
    </div>
  );
};

export default AllJobs;
