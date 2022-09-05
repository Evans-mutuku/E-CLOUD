import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Login from "../../auth/Login";
import { login, logout, selectUser } from "../../features/userSlice";
import { auth, db } from "../../utils/firebase";
import FetchMyJobs from "./FetchMyJobs";
import MyJobs from "./MyJobs";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

const UploadJob = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const dispatch = useDispatch();
  const [userJobs, setUserJobs] = useState([]);
  const [jobCount, setJobCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("jobs").add({
      user: user?.uid,
      jobTitle: jobTitle,
      company: company,
      location: location,
      price: price,
      description: description,
      appEmail: appEmail,
      displayName: user?.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setJobTitle("");
    setCompany("");
    setLocation("");
    setPrice("");
    setDescription("");
    setAppEmail("");
  };

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

  const fetchData = async () => {
    try {
      await db
        .collection(`posts`)
        .where("uid", "==", user?.uid)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setUserJobs(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
        );
    } catch (error) {
      console.log(error);
    }
  };
  const fetchJobsCount = async () => {
    await db
      .collection("posts")
      .where("uid", "==", user?.uid)
      .onSnapshot((snapshot) => setJobCount(snapshot.size));
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchJobsCount();
  }, []);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div>
          <main className="w-5/6 mx-auto mt-8">
            <section className="flex justify-between">
              <section className="w-4/6">
                <div className="bg-green-100 px-6 py-3 rounded-md ">
                  <div className="mb-5">
                    <h2 className="text-xl">
                      Hey, {user?.displayName} Welcome to your admin Dashboard
                    </h2>
                  </div>
                  <button
                    onClick={() => navigate("/developers")}
                    className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
                  >
                    Find Developers
                  </button>
                </div>
                <section className="mt-5 space-y-4 mb-10">
                  <h2 className="text-xl font-bold">Post new job here . . .</h2>
                  <form>
                    <span className="flex flex-col space-y-1 mb-3">
                      <p className="text-green-600">Job Title*</p>
                      <input
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                        type="text"
                        placeholder="Enter Job Title"
                      />
                    </span>
                    <span className="flex flex-col space-y-1 mb-3">
                      <p className="text-green-600">Company Name*</p>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                        type="text"
                        placeholder="Your Company Name (optional)"
                      />
                    </span>
                    <span className="flex flex-col space-y-1 mb-3">
                      <p className="text-green-600">Your Location*</p>
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                        type="text"
                        placeholder="Location"
                      />
                    </span>
                    <span className="flex flex-col space-y-1 mb-3">
                      <p className="text-green-600">Pay Amount*</p>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                        type="text"
                        placeholder="Project Price"
                      />
                    </span>
                    <span className="flex flex-col space-y-1 mb-3">
                      <p className="text-green-600">Aply Through*</p>
                      <input
                        value={appEmail}
                        onChange={(e) => setAppEmail(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm "
                        type="text"
                        placeholder="Link to apply"
                      />
                    </span>

                    <span className="flex flex-col space-y-1 mb-5">
                      <p className="text-green-600">Brief Description*</p>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border-green-600 px-2 py-1 outline-none focus:border-none border focus:outline-green-300 rounded-sm h-40"
                        placeholder="Enter Brief Job description here"
                      ></textarea>
                    </span>
                    <button
                      onClick={handleSubmit}
                      className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
                    >
                      Upload Job
                    </button>
                  </form>
                </section>
              </section>
              <section className="w-80">
                <h2 className="font-bold text-xl mb-3">
                  Your Job Post Listings
                </h2>

                {userJobs.length === 0 ? (
                  <div>
                    <h2>You've not posted yet</h2>
                  </div>
                ) : (
                  <>
                    {userJobs.map(
                      ({
                        id,
                        jobTitle,
                        blogBody,
                        backgroundImage,
                        currentTask,
                        displayName,
                        timestamp,
                        uid,
                      }) => (
                        <section key={id}>
                          <span>{jobTitle}</span>
                          sdghvhsjd
                        </section>
                      )
                    )}
                  </>
                )}
              </section>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default UploadJob;
