
function Industries() {
  const industries = [
    {
      icon: "🥫",
      title: "Food & Beverage",
      desc: "Food Packaging Solutions"
    },
    {
      icon: "📦",
      title: "E-Commerce",
      desc: "Boxes & Mailers"
    },
    {
      icon: "🧴",
      title: "Cosmetics",
      desc: "Luxury Packaging"
    },
    {
      icon: "💻",
      title: "Electronics",
      desc: "Protective Packaging"
    },
    {
      icon: "🏭",
      title: "Pharmaceuticals",
      desc: "Safe & Secure Packaging"
    },
    {
      icon: "🛍️",
      title: "Retail",
      desc: "Custom Retail Boxes"
    }
  ];

  return (
    <section className="bg-white py-16 px-5">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <span className="text-orange-500 text-sm font-semibold">
            • OUR INDUSTRIES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            Packaging for Every Industry
          </h2>

          <p className="text-gray-500 text-sm leading-7 mt-4 max-w-xl">
            We provide innovative and sustainable packaging solutions
            designed to meet the unique needs of different industries.
            Quality packaging for every business.
          </p>

          {/* Industry Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 mt-10">

            {industries.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >

                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl group-hover:bg-orange-500 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-4 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-2">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl">

          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000"
            alt="Packaging Warehouse"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/20 to-transparent"></div>

          {/* Image Content */}
          <div className="absolute bottom-0 left-0 p-8 text-white">

            <h3 className="text-2xl font-bold">
              From Small Orders
              <br />
              to Large-Scale Production.
            </h3>

            <p className="text-gray-300 text-sm mt-3 leading-6 max-w-sm">
              We are ready to support your business with
              reliable and high-quality packaging solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Industries;
