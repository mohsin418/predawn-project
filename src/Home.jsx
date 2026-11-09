function Home() {
   const features = [
  {
    icon: "◎",
    title: "High-Quality",
    desc: "Materials"
  },
  {
    icon: "✧",
    title: "Custom Design",
    desc: "& Printing"
  },
  {
    icon: "♧",
    title: "Sustainable",
    desc: "Solutions"
  },
  {
    icon: "◉",
    title: "On-Time",
    desc: "Delivery"
  }
];
  return(
  <div>
    <div className="relative w-full h-[600px] mx-w-[800px] overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/mainimage.png"
        alt="Premium Packaging"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 px-8 md:px-16 pt-16 text-white">

        <p className="text-sm text-orange-400 mb-4">
          Custom Packaging Solutions
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Premium Packaging <br />
          for a Stronger <br />
          <span className="text-orange-500">
            Tomorrow
          </span>
        </h1>

        <p className="text-sm text-gray-200 mt-5 max-w-md leading-6">
          We design and manufacture high-quality,
          sustainable packaging solutions that protect
          your products, strengthen your brand and
          fuel your growth.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md lg:text-[15px] md:text-[15px] text-[10px] font-semibold">
            Explore Our Products →
          </button>

          <button className="border border-white text-white hover:bg-white hover:text-black px-5 py-2 rounded-md lg:text-[15px] md:text-xs text-[10px]">
            Get a Quote
          </button>

        </div>
      </div>

      
{/* Bottom Features */}



<div className="absolute mt-4 left-8 md:left-16 right-8 z-10 grid lg::grid-cols-4 md:grid-cols-4 grid-cols-2  gap-2 text-white">

  {features.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 mt-4"
    >
      <span className="xl:text-5xl lg:text-4xl text-white sm:text-3xl text-2xl">
        {item.icon}
      </span>

      <span className="text-sm font-medium">
        {item.title}
        <br />
        {item.desc}
      </span>
    </div>
  ))}

</div>


    </div>

  </div>
)}

export default Home;