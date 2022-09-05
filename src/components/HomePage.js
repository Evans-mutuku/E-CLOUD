import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import { auth, db } from "../utils/firebase";
import FetchMyJobs from "./PostJob/FetchMyJobs";

const HomePage = () => {
  const [allJobs, setAllJobs] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const fetchJobs = async () => {
    try {
      await db
        .collection("jobs")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setAllJobs(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } catch (err) {
      console.log(err?.message);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            profilePic: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout);
      }
    });
  }, [dispatch]);

  return (
    <>
      <section className="bg-gradient-to-r from-green-500 via-green-700 to-green-800 h-[70vh] ">
        <div className="w-5/6 pt-20 mx-auto">
          <h1 className="text-5xl leading-[5rem] font-bold w-3/6 text-white">
            Explore and discover the right job for you!
          </h1>
          {!user ? (
            <button className="py-2 px-5 mt-10 bg-white text-green-600 hover:border-white hover:bg-transparent hover:text-white border-green-600 border rounded-full">
              Login To Bid A Project
            </button>
          ) : (
            <button className="py-2 px-5 mt-10 bg-white text-green-600 hover:border-white hover:bg-transparent hover:text-white border-green-600 border rounded-full">
              Bid A Project
            </button>
          )}
        </div>
      </section>
      <section className="mt-5 w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Jobs for you</h2>
          <button className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border rounded-full text-white">
            Explore All Jobs
          </button>
        </div>
        <div className="space-x-14 mt-5">
          <button className="bg-red-100 text-red-500 text-sm py-1 px-4 rounded-lg">
            Featured
          </button>
          <button className="bg-blue-100 text-blue-600 text-sm py-1 px-4 rounded-lg">
            Popular
          </button>
          <button className="bg-green-100 text-green-600 text-sm py-1 px-4 rounded-lg">
            New
          </button>
        </div>
      </section>

      <section className="flex justify-between space-y-12 flex-wrap mt-6 w-5/6 mx-auto">
        <FetchMyJobs />
      </section>
      <section className="mt-6 w-5/6 mx-auto mb-24">
        <h2 className="text-2xl font-bold">People currently hiring in Kenya</h2>
      </section>
      <section className="h-[70vh] bg-green-700 mb-6">
        <div className="mt-6 w-5/6 mx-auto pt-12 flex justify-between">
          <div>
            <h2 className="text-4xl leading-[3rem] font-bold w-5/6 text-white">
              Advance your career with E-Cloud
            </h2>
            <p className="text-gray-300 mt-4 w-4/6">
              Create a free account, complete your profile, and get matched with
              your dream job.
            </p>
            <div className="flex space-x-10 mt-8">
              <div className="w-72">
                <h3 className="text-white text-xl mb-3 font-bold">
                  Get seen by employers
                </h3>
                <p className="text-gray-300">
                  With a complete profile, your applications and profile are
                  promoted to top employers, so you stand out.
                </p>
              </div>
              <div className="w-72">
                <h3 className="text-white text-xl mb-3 font-bold">
                  Get access to top jobs first
                </h3>
                <p className="text-gray-300">
                  Sign up for job alerts and be first in line for the latest
                  jobs that match your profile.
                </p>
              </div>
            </div>
          </div>
          <img
            className="h-[55vh]"
            src="https://www.brightermonday.co.ke/build/static-assets/img/brightermonday-theme/home-page/advance-your-career.6478c60f.png"
            alt=""
          />
        </div>
      </section>
      <section className="mx-auto w-5/6 h-[30vh] mt-16 bg-green-600 rounded-xl py-3 px-4 flex justify-between mb-16">
        <div>
          <h4 className="text-white text-2xl mb-2">For Employers</h4>
          <h2 className="text-white text-2xl font-bold">
            Searching for the right talent?
          </h2>
          <p className="text-gray-300 mt-2">
            We have over 1k developers across all levels, right for your
            organisation!{" "}
          </p>
          <button className="py-2 px-5 mt-6 bg-white text-green-600 hover:border-white hover:bg-transparent hover:text-white border-green-600 border rounded-full">
            Learn More...
          </button>
        </div>
        <img
          src="https://www.brightermonday.co.ke/build/static-assets/img/brightermonday-theme/home-page/right-talent_desktop.4edbdba8.png"
          alt=""
        />
      </section>
    </>
  );
};

export default HomePage;
