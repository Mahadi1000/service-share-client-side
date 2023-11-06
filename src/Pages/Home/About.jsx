const About = () => {
  return (
    <section className=" bg-base-300 my-10 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-600 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-lg text-gray-500">
            <p className="">
              Welcome to [Your Company Name], your trusted partner for reliable
              and convenient taxi services.
            </p>
            <p className="mt-4 ">
              Our mission is to provide safe and comfortable transportation
              solutions, connecting you to your destinations efficiently.
            </p>
            <p className="mt-4">
              With a team of dedicated drivers and a fleet of well-maintained
              vehicles, we ensure your travel experience is exceptional.
            </p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/ykhc6Gj/2.webp"
              alt="Company Image"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
