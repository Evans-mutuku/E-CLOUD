import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "../../utils/firebase";
import MyJobs from "./MyJobs";

const FetchMyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("jobs")
      // .where("uid", "==", user?.uid)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setJobs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="flex justify-between  flex-wrap">
      {!jobs || jobs.length === 0 ? (
        <div>
          <h3 className="text-gray-500 mt-5 font-semibold">
            No Jobs Available at the moment
          </h3>
        </div>
      ) : (
        jobs.map((job) => (
          <MyJobs
            key={job.id}
            jobTitle={job.data.jobTitle}
            timestamp={job.data.timestamp}
            displayName={job.data.displayName}
            company={job.data.company}
            location={job.data.location}
            price={job.data.price}
            description={job.data.description}
            appEmail={job.data.appEmail}
            uid={job.data.uid}
          />
        ))
      )}
    </div>
  );
};

export default FetchMyJobs;
