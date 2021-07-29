import { useRouter } from "next/router";
import axios from "axios";

import JobDetail from "../../components/jobs/JobDetail";

function Job(props) {
  return <JobDetail job={props.job} />;
}

export async function getStaticPaths(context) {
  let response = await axios.get("http://localhost:3000/api/jobs"),
    jobs = [];
  if (response && response.data && response.data.length) {
    jobs = response.data;
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

  let response = await axios.get("http://localhost:3000/api/jobs"),
    jobs = [];
  if (response && response.data && response.data.length) {
    jobs = response.data;
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
