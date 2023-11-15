const About = () => {
  return (
    <div>
      <section className=" my-10 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold  mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-lg ">
              <p className="">
                Welcome to [Your Company Name], your trusted partner for
                reliable and convenient taxi services.
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
      <div className="flex flex-col ">
        <h1 className="text-center text-4xl font-bold">How It Work</h1>
        <ul className="steps mt-5">
          <li className="step step-primary">Book in Just 2 Tabs</li>
          <li className="step step-primary">Get a Driver</li>
          <li className="step">Track your Driver</li>
          <li className="step">Arrive safely</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
