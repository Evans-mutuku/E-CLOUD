import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "../../auth/Login";
import { selectUser } from "../../features/userSlice";
import { db } from "../../utils/firebase";
import FetchMyJobs from "./FetchMyJobs";
import MyJobs from "./MyJobs";
import firebase from "firebase/compat/app";

const PostJob = () => {
  const user = useSelector(selectUser);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Button Clicked Again and Again");
    await db
      .collection("jobs")
      .add({
        // uid: user?.uid,
        title: jobTitle,
        companyName: company,
        CompanyLocation: location,
        displayName: user?.displayName,
        projectPrice: price,
        projectDescription: description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setJobTitle("");
        setCompany("");
        setLocation("");
        setPrice("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {/* {!user ? (
        <Login />
      ) : ( */}
      <main className="w-5/6 mx-auto mt-8">
        <section className="flex justify-between">
          <section className="w-4/6">
            <div className="bg-green-100 px-6 py-3 rounded-md ">
              <div className="mb-5">
                <h2 className="text-xl">
                  Hey, Mary Mutinda. Welcome to your admin Dashboard
                </h2>
              </div>
              <button className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white">
                Find Developers
              </button>
            </div>
            <section className="mt-5 space-y-4 mb-10">
              <h2 className="text-xl font-bold">Post new job here...</h2>
              <form>
                <span className="flex flex-col space-y-1">
                  <label className="text-green-600" htmlFor="title">
                    Job Title*
                  </label>{" "}
                  <input
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                    type="text"
                    placeholder="Enter Job Title"
                  />
                </span>
                <span className="flex flex-col space-y-1">
                  <label className="text-green-600">Company Name*</label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                    type="text"
                    placeholder="Your Company Name (optional)"
                  />
                </span>
                <span className="flex flex-col space-y-1">
                  <label className="text-green-600">Your Location*</label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                    type="text"
                    placeholder="Location"
                  />
                </span>
                <span className="flex flex-col space-y-1">
                  <label className="text-green-600">Pay Amount*</label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                    type="text"
                    placeholder="Project Price"
                  />
                </span>
                <span className="flex flex-col space-y-1">
                  <label className="text-green-600">Brief Description*</label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm h-40"
                    placeholder="Enter Brief Job description here"
                  />
                </span>
                <button
                  onClick={handleSubmit}
                  className="text-green-600"
                  type="submit"
                >
                  Hidden Submit
                </button>
              </form>
            </section>
          </section>
          <section className="w-80">
            <h2 className="font-bold text-xl">Your Job Post Listings</h2>
            <FetchMyJobs />
            {/* <MyJobs /> */}
          </section>
        </section>
      </main>
    </>
  );
};

export default PostJob;
