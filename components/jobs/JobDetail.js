import { useRouter } from "next/router";

import Card from "../ui/Card";

function JobDetail(props) {
  const router = useRouter();

  function goBackHandler() {
    router.push("/");
  }

  let jobDetail = (
    <Card>
      <h4 className="jobTitle">{props.job.jobTitle}</h4>
      <strong className="companyName">{props.job.companyName}</strong>
      <span className="shortDesc">{props.job.shortDesc}</span>
      <button onClick={goBackHandler}>Go Back</button>
    </Card>
  );

  return jobDetail;
}

export default JobDetail;
