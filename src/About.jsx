
function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6  w-full">

        {/* Left Side */}
        <div className="w-full">

          <p className="text-orange-500 font-semibold text-sm mb-3">
            • About Us
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Your Trusted Partner in Packaging Manufacturing
          </h1>

          <p className="text-gray-500 text-sm sm:text-base leading-6 mt-4">
            Packaging Manufacturing Company is a leading manufacturer
            of custom packaging solutions for businesses worldwide.
            We combine innovation, quality, and sustainability to
            deliver packaging that makes your brand stand out.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-6">

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
                15+
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
                500+
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
                1M+
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Boxes Produced
              </p>
            </div>

          </div>

          <button className="bg-slate-900 text-white px-5 sm:px-6 py-3 rounded-md text-sm mt-7 hover:bg-orange-500 transition duration-300">
            Learn More →
          </button>

        </div>

        {/* Right Side Image */}
        <div className="relative w-full">

          <img
            src="/aboutimage.png"
            alt="Packaging Manufacturing"
            className=" w-full max-w-full  h-[250px] sm:h-[350px] md:h-[320px] lg:h-[400px] object-cover rounded-2xl"
          />

          {/* Image Badge */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 max-w-[90%]">

            <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0">
              ✓
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Eco-Friendly Packaging
              </h3>

              <p className="text-[10px] sm:text-xs text-gray-500">
                Sustainable Solutions
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
