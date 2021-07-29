import axios from "axios";

import JobsList from "../components/jobs/JobsList";

function Jobs(props) {
  return <JobsList jobs={props.jobs} />;
}

export async function getStaticProps() {
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
    props: {
      jobs,
    },
    revalidate: 3600,
  };
}

export default Jobs;
