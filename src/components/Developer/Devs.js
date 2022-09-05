import FetchDevProfile from "./FetchDevProfile";

const Devs = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-500 via-green-700 to-green-800  ">
        <div className="w-5/6 pt-10 pb-10 mx-auto">
          <h1 className="text-4xl leading-[3rem] font-bold w-3/6 text-white">
            Hire a Developer from E-Cloud
          </h1>
        </div>
      </section>
      <section className="mt-7 w-5/6 mx-auto mb-10">
        <FetchDevProfile />
      </section>
    </>
  );
};

export default Devs;
