import ReactTimeago from "react-timeago";

const MyJobs = ({
  id,
  jobTitle,
  location,
  company,
  description,
  timestamp,
  price,
  appEmail,
}) => {
  return (
    <main className="w-72 mr-3 mb-3 h-fit">
      <div className="w-full p-3 rounded-md border-green-400 border">
        <p className="text-sm text-gray-800">
          Job Posted:{" "}
          <ReactTimeago
            className="text-gray-500"
            date={new Date(timestamp?.toDate()).toUTCString()}
          />
        </p>
        {/* <p className="font-bold text-xl">{timestamp}</p> */}
        <h2 className="font-bold text-xl mt-2">{jobTitle}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="mt-2 text-sm text-green-600">{company}</p>
        <span className="flex justify-between items-center">
          <p className="text-sm mt- mb-1">{location}</p>

          <p className="text-sm">ksh {price}</p>
        </span>
        <div className="flex items-center mt-3 text-sm space-x-2 text-green-700">
          <p className="">Aply Through: </p>
          <p>{appEmail}</p>
        </div>
      </div>
    </main>
  );
};

export default MyJobs;
