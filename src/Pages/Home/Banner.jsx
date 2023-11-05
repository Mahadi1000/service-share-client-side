import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TypeWriterEffect from "react-typewriter-effect";
const Banner = () => {
  return (
    <div>
      <Carousel className="relative">
        <div className="">
          <div className="absolute">
            <img src="https://i.ibb.co/Ycwygwd/pxfuel-14.jpg" />
          </div>
          <div className="absolute mt-24 p-24">
            <h1 className="text-white text-3xl font-semibold">
              Welcome to <em>Digital Store</em>
            </h1>
            <p className="mt-6">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#D21F3C",
                  fontWeight: 600,
                  fontSize: "1.5em",
                }}
                startDelay={1000}
                cursorColor="#3F3D56"
                multiText={[
                  "Our services is Electronic Devices",
                  "Computer Accessories, Desktop",
                  "Laptop, Cameras",
                  "Gaming Console",
                  "Happy Shopping",
                ]}
                multiTextDelay={1000}
                typeSpeed={50}
              />
            </p>
          </div>
        </div>
        <div>
          <img
            className="max-h-screen"
            src="https://i.ibb.co/3RfCkv9/lucas-favre-4x-67z-Ta-Go-unsplash.jpg"
          />
        </div>
        <div>
          <img src="https://i.ibb.co/LzZWKD4/pxfuel-12.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner
