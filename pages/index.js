import axios from "axios";

import JobsList from "../components/jobs/JobsList";

function Jobs(props) {
  return <JobsList jobs={props.jobs} />;
}

export async function getStaticProps() {
  let response = await axios.get("http://localhost:3000/api/jobs"),
    jobs = [];
  if (response && response.data && response.data.length) {
    jobs = response.data;
  }

  return {
    props: {
      jobs,
    },
    revalidate: 3600,
  };
}

export default Jobs;
