import React from "react";
import FetchMyJobs from "./PostJob/FetchMyJobs";

const AllJobs = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-500 via-green-700 to-green-800  ">
        <div className="w-5/6 pt-10 pb-10 mx-auto">
          <h1 className="text-4xl leading-[5rem] font-bold w-3/6 text-white">
            Explore All job for you!
          </h1>
        </div>
      </section>
      <section className="mt-3 w-5/6  mx-auto">
        <h2 className="text-2xl font-bold mb-6">All Jobs</h2>
        <FetchMyJobs />
      </section>
    </>
  );
};

export default AllJobs;
