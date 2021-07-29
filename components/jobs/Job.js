// A job type

import { useRouter } from "next/router";

import Card from "../ui/Card";

function Job(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  let job = (
    <Card>
      <h4 className="jobTitle">{props.jobTitle}</h4>
      <strong className="companyName">{props.companyName}</strong>
      <span className="shortDesc">{props.shortDesc}</span>
      <button onClick={showDetailsHandler}>Show Details</button>
    </Card>
  );

  return job;
}

export default Job;
