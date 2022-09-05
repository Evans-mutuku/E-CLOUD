import React from "react";

const About = () => {
  return (
    <div>
      <section class="mx-auto w-5/6 pt-7">
        <div class="flex items-center justify-between">
          <span class="w-3/6">
            <h2 class="md:text-4xl text-gray-700 mb-5 font-bold">
              Welcome to E-Cloud #1 online jobs platform.
            </h2>
            <p class="text-gray-700">
              We connect qualified developers like you to their dream jobs /
              projects and employers to the best talent to help grow their
              businesses and their online presence.
            </p>
          </span>
          <img
            class="rounded-full w-72 h-72"
            src="https://st2.depositphotos.com/1005233/5427/i/950/depositphotos_54274613-stock-photo-group-of-people-working-around.jpg"
            alt=""
          />
        </div>
        <div class="flex items-center justify-between mt-12">
          <img
            class="rounded-full w-72 h-72"
            src="https://previews.123rf.com/images/andreypopov/andreypopov1406/andreypopov140600858/29532617-group-of-young-business-people-using-computer-and-laptop-in-office.jpg"
            alt=""
          />
          <span class="w-3/6">
            <h2 class="md:text-4xl text-gray-700 mb-5 font-bold">
              Transforming HR and Productivity in Tech world
            </h2>
            <p class="text-gray-700">
              We connect qualified developers like you to their dream jobs /
              projects and employers to the best talent to help grow their
              businesses and their online presence.
            </p>
          </span>
        </div>
      </section>
      <section class="mt-16 mb-16 mx-auto w-5/6 flex flex-wrap justify-between">
        <div class="rounded-lg bg-green-200 py-5 px-6 text-center w-80">
          <h2 class="text-2xl font-bold">Mission</h2>
          <p class="mt-5 text-gray-700">
            To be world’s most user-centric and transparent career platform;
            where we connect the right candidates with the right opportunities.
          </p>
        </div>
        <div class="rounded-lg bg-green-200 py-5 px-6 text-center w-80">
          <h2 class="text-2xl font-bold">Our Vision</h2>
          <p class="mt-5 text-gray-700">
            To be the leading source of talent in our markets by providing a
            platform through which Job search and talent acquisition is
            simplified.
          </p>
        </div>
        <div class="rounded-lg bg-green-200 py-5 px-6 text-center w-80">
          <h2 class="text-2xl font-bold">Our Core Values</h2>
          <p class="mt-5 text-gray-700">
            We consider ourselves PACE setters and thus our core values are;
            Performance, Accountability, Continuous Learning and Excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
