import React, { useEffect } from "react";
import "./JobSection.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/actions/jobActions";
import JobCard from "../card/JobCard";
import JobFilters from "../filters/JobFilters";

const JobSection = () => {
  const dispatch = useDispatch();
  const { loading, jobs } = useSelector((state) => state.jobDetails);

  useEffect(() => {
    dispatch(getAllJobs());
    console.log(jobs);
  }, [dispatch]);

  return (
    <div>
      <JobFilters />
      {!loading &&
        jobs?.map((job, index) => <JobCard key={index} jobData={job} />)}
    </div>
  );
};

export default JobSection;
