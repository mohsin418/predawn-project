
function Commitment() {
  return (
    <section className="relative min-h-[450px] bg-[#092d20] overflow-hidden flex items-center">

      {/* Background Overlay */}
      <div className="absolute inset-0  to-transparent z-10"></div>

      {/* Background Image */}
      <img
        src="/commitment.png"
        alt="Sustainable Packaging"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-10 py-20">

        <div className="max-w-xl">

          {/* Small Heading */}
          <p className="text-green-300 text-sm font-semibold tracking-wider mb-4">
            • OUR COMMITMENT
          </p>

          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Sustainable Packaging
            <span className="block text-green-400">
              for a Greener Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-7 mt-6 max-w-lg">
            We are committed to reducing environmental impact
            through eco-friendly materials, responsible production
            and innovative packaging solutions.
          </p>

          {/* Button */}
          <button className="mt-8 px-7 py-3 border border-green-400 text-white rounded-full text-sm font-semibold hover:bg-green-500 hover:border-green-500 transition duration-300">
            Our Sustainability →
          </button>

        </div>

      </div>

      {/* Eco Badge */}
      <div className="absolute z-20 right-8 top-8 md:right-16 md:top-12 w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-green-400 flex flex-col items-center justify-center text-green-400 bg-[#092d20]/60 backdrop-blur-sm">

        <span className="text-3xl md:text-4xl">♻</span>

        <span className="text-[9px] md:text-xs font-semibold text-center mt-1">
          Less Waste<br />More Impact
        </span>

      </div>

    </section>
  );
}

export default Commitment;
