import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="pt-20 mx-auto bg-gradient-to-r from-green-500 via-green-700 to-green-800 h-[30vh]">
        <div class="w-5/6 mx-auto">
          <h1 class="text-3xl font-bold text-white">Contact us</h1>
        </div>
      </section>
      <section class="mt-5 w-5/6 mx-auto mb-20">
        <h2 class="text-2xl font-bold mb-5">
          Please see our contact details below:
        </h2>
        <p>Email: info@ecloud.com</p>
        <p>Phone: +245,712345678</p>
        <p>Location: Nairobi - Kenya</p>

        <form class="mt-8">
          <label class="text-green-600" for="name">
            Name*
          </label>
          <br />
          <input
            class="border border-gray-400 p-2 rounded-sm mt-2 w-3/6 outline-none focus:border-green-600"
            type="text"
            placeholder="Enter Your Name"
          />
          <br />
          <br />
          <label class="text-green-600" for="email">
            Email*
          </label>
          <br />
          <input
            class="border border-gray-400 p-2 rounded-sm mt-2 w-3/6 outline-none focus:border-green-600"
            type="email"
            placeholder="Enter Your Email"
          />
          <br></br>
          <label class="text-green-600" for="message">
            Message*
          </label>
          <br />
          <textarea
            class="border border-gray-400 p-2 rounded-sm mt-2 w-3/6 outline-none focus:border-green-600 h-42"
            cols="30"
            rows="10"
            placeholder="Say Something"
          ></textarea>{" "}
          <br />
          <button className="py-2 px-5 mt-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
