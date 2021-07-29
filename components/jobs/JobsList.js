import Job from "./Job";

function JobsList(props) {
  return (
    <ul style={{ padding: "0px" }}>
      {props.jobs.map((job) => {
        return (
          <Job
            key={job.jobId}
            id={job.jobId}
            jobTitle={job.jobTitle}
            companyName={job.companyName}
            shortDesc={job.shortDesc}
          />
        );
      })}
    </ul>
  );
}

export default JobsList;
