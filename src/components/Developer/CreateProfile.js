import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../auth/Login";
import { login, logout, selectUser } from "../../features/userSlice";
import { auth, db } from "../../utils/firebase";

const CreateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const addProfile = async () => {
    try {
      await db
        .collection("profile")
        .add({
          uid: user?.uid,
          name: name,
          email: email,
          phone: phone,
          website: website,
          country: country,
          city: city,
          bio: bio,
        })
        .then(() => {
          setName("");
          setEmail("");
          setPhone("");
          setWebsite("");
          setCountry("");
          setCity("");
          setBio("");
        });
    } catch (error) {
      console.log(error.message);
    }
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

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <main className="">
          <div className="bg-green-100 px-6 py-3 rounded-md w-5/6 mx-auto mt-6">
            <div className="mb-5">
              <h2 className="text-xl">
                Hey, {user?.displayName} Welcome to your developer Dashboard
              </h2>
            </div>
            <button
              onClick={() => navigate("/jobs")}
              className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
            >
              Find Jobs
            </button>
          </div>
          <section className="mt-6 w-5/6 mx-auto flex space-x-24 mb-12">
            <section className="space-y-3">
              <p className="text-green-600 font-bold hover:text-green-600 cursor-pointer">
                Home
              </p>
              <p className="font-bold hover:text-green-600 cursor-pointer">
                About
              </p>
              <p className="font-bold hover:text-green-600 cursor-pointer">
                Contact
              </p>
              <p className="font-bold hover:text-green-600 cursor-pointer">
                Developers
              </p>
              <p className="font-bold hover:text-green-600 cursor-pointer">
                Jobs
              </p>
              <p className="font-bold hover:text-green-600 cursor-pointer">
                Privacy
              </p>
            </section>
            <section className="w-4/6">
              <h1 className="font-bold text-2xl">Create profile</h1>
              <p className="text-sm text-gray-700">
                Employers on E-Cloud will get to know you with the info below
              </p>

              <div className="mt-5">
                <h3 className="text-green-600">Personal Details</h3>
                <article className="flex justify-between ">
                  <div className="">
                    <label htmlFor="">Full Name</label> <br />
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="text"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Email</label> <br />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </article>
              </div>
              <div className="mt-2">
                <article className="flex justify-between">
                  <div className="">
                    <label htmlFor="">Phone </label> <br />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="text"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Website URL</label> <br />
                    <input
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="text"
                      placeholder="Website URL"
                    />
                  </div>
                </article>
              </div>

              <div className="mt-5">
                <h3 className="text-green-600">Address Details</h3>
                <article className="flex justify-between space-x-12">
                  <div className="">
                    <label htmlFor="">Country</label> <br />
                    <input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="text"
                      placeholder="Enter Country Name"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">City</label> <br />
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="border border-gray-400 outline-none mt-1  py-1 px-2"
                      type="text"
                      placeholder="Enter City"
                    />
                  </div>
                </article>
              </div>
              <div className="mt-5 mb-5">
                <h3 className="text-green-600">Add Bio</h3>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full h-48 outline-none border border-gray-400 p-3"
                  placeholder="Add Your Bio"
                ></textarea>
              </div>

              <button
                onClick={addProfile}
                className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
              >
                Save Profile
              </button>
            </section>
          </section>
        </main>
      )}
    </>
  );
};

export default CreateProfile;
