// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

function getJobs() {
  // returns promise
  return new Promise(async (resolve, reject) => {
    try {
      // requesting the data from external api
      var response = await axios.post("https://www.zippia.com/api/jobs/", {
        kills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 20,
        previousListingHashes: [],
      });

      // console.log(response)
      // if jobs are found, send them in response otherwise send a message that jobs are not found.
      if (response && response.data && response.data.jobs) {
        resolve(response.data.jobs);
      } else {
        reject({
          errmsg: "Jobs not found",
        });
      }
    } catch (e) {
      // if any error occurs, send the error
      reject(e);
    }
  });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    getJobs()
      .then((data) => {
        // console.log(data);
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
