const Footer = () => {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat mt-20"
      style={{
        backgroundImage: "url('https://i.ibb.co/WPy2KBC/pxfuel-16.jpg')",
      }}
    >
      <footer className="flex flex-col justify-center items-center h-screen text-white bg-opacity-90">
        <h2 className="text-3xl font-semibold mb-4 font-cinzel">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-300 mb-6">
          Get updates on our latest events and news
        </p>
        <div className="w-full max-w-md">
          <div className="flex items-center border-b border-white py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-white placeholder-white"
            />
            <button className="btn btn-outline btn-success">Sign Up</button>
          </div>
        </div>
        <div className="container  mx-auto px-4  z-10">
          <nav className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Services</h3>
                <a className="text-gray-300 hover:text-white block">Branding</a>
                <a className="text-gray-300 hover:text-white block">Design</a>
                <a className="text-gray-300 hover:text-white block">
                  Marketing
                </a>
                <a className="text-gray-300 hover:text-white">Advertisement</a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Company</h3>
                <a className="text-gray-300 hover:text-white block">About us</a>
                <a className="text-gray-300 hover:text-white block">Contact</a>
                <a className="text-gray-300 hover:text-white block">Jobs</a>
                <a className="text-gray-300 hover:text-white">Press kit</a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Legal</h3>
                <a className="text-gray-300 hover:text-white block">
                  Terms of use
                </a>
                <a className="text-gray-300 hover:text-white block">
                  Privacy policy
                </a>
                <a className="text-gray-300 hover:text-white block">
                  Cookie policy
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                <a className="text-gray-300 hover:text-white block">Facebook</a>
                <a className="text-gray-300 hover:text-white block">Twitter</a>
                <a className="text-gray-300 hover:text-white block">
                  Instagram
                </a>
                <a className="text-gray-300 hover:text-white block">LinkedIn</a>
              </div>
            </div>
          </nav>
          <hr className="mt-20" />
          <p className="text-center text-gray-600 mt-5">
            {" "}
            Copyright © 2023 by AncoraThemes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
