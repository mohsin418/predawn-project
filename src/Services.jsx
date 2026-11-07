
function Services() {

  const features = [
    {
      id: 1,
      icon: "✦",
      title: "Premium Materials",
      description: "High-quality and durable materials."
    },
    {
      id: 2,
      icon: "⚙",
      title: "Advanced Technology",
      description: "Modern equipment for quality."
    },
    {
      id: 3,
      icon: "✓",
      title: "Custom Solutions",
      description: "Packaging made just for you."
    },
    {
      id: 4,
      icon: "♻",
      title: "Eco-Friendly Options",
      description: "Sustainable choices for a better future."
    }
  ];

  return (
    <section className="w-full p-6 sm:p-6 bg-[#021C3B]">

      {/* <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl lg:mx-20 md:mx-16 sm:mx-12">

          {/* Left Side */}
          <div className=" text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-center">

            <p className="text-orange-500 text-sm font-semibold mb-3">
              • Why Choose Us
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Quality, Innovation &
              <span className="text-orange-500"> Sustainability</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-7 mt-4 max-w-xl">
              We go beyond packaging. We create solutions that
              protect your products, elevate your brand and support
              a greener future.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

              {features.map((item) => (

                <div
                  key={item.id}
                  className="flex items-start gap-3 group"
                >

                  <div className="w-11 h-11 shrink-0 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-orange-500 transition duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-5">
                      {item.description}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side Image */}
          <div className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-full">

            <img
              src="/services.png"
              alt="Eco Friendly Packaging"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

          </div>

        </div>

      {/* </div> */}

    </section>
  );
}

export default Services;
