import React from "react";

import JobPublication from "../../components/Jobs/JobPublication";
import SEO from "../../seo/SEO";
const AllJobs = () => {
  return (
    <div className="h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] flex justify-center items-center">
      <SEO
        title="Emplois"
        description="INRS - It is not Rocket Science - Retrouvez toutes les emplois postés par la communauté"
      />
      <JobPublication />
    </div>
  );
};

export default AllJobs;
