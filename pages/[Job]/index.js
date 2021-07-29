import { useRouter } from "next/router";
import axios from "axios";

import JobDetail from "../../components/jobs/JobDetail";

function Job(props) {
  if (props.job) {
    return <JobDetail job={props.job} />;
  } else {
    return "";
  }
}

export async function getStaticPaths(context) {
  let response = await await axios.post("https://www.zippia.com/api/jobs/", {
      kills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    }),
    jobs = [];
  if (
    response &&
    response.data &&
    response.data.jobs &&
    response.data.jobs.length
  ) {
    jobs = response.data.jobs;
  }

  return {
    fallback: true,
    paths: jobs.map((job) => {
      return {
        params: {
          Job: job.jobId,
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  let jobId = context.params.Job;

  let response = await await axios.post("https://www.zippia.com/api/jobs/", {
      kills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    }),
    jobs = [];
  if (
    response &&
    response.data &&
    response.data.jobs &&
    response.data.jobs.length
  ) {
    jobs = response.data.jobs;
  }

  let job = jobs.find((job) => job.jobId === jobId);

  return {
    props: {
      job,
    },
    revalidate: 3600,
  };
}

export default Job;
