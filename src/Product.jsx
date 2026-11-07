
function Product() {

  const products = [
    {
      id: 1,
      name: "Corrugated Boxes",
      image: "/box1.png",
      description: "Strong and durable packaging boxes."
    },
    {
      id: 2,
      name: "Rigid Boxes",
      image: "/box2.png",
      description: "Premium packaging for luxury products."
    },
    {
      id: 3,
      name: "Pouches & Bags",
      image: "/box3.png",
      description: "Flexible packaging for everyday needs."
    },
    {
      id: 4,
      name: "Custom Packaging",
      image: "/box4.png",
      description: "Customized packaging for your brand."
    }
  ];

  return (
    <section className="w-full max-w-full overflow-hidden py-12 sm:py-16 bg-cyan-50">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 sm:mb-10">

          <p className="text-orange-500 font-semibold text-sm mb-3">
            • Our Products
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Packaging Solutions for Every Industry
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-7 mt-3 max-w-3xl">
            From retail to e-commerce, food to electronics — we offer
            a wide range of custom packaging solutions designed to
            fit your needs.
          </p>

        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {products.map((item) => (

            <div
              key={item.id}
              className="group min-w-0 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl"
            >

              {/* Image */}
              <div className="w-full h-48 sm:h-52 bg-gray-50 p-4 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain "
                />

              </div>

              {/* Card Content */}
              <div className="p-4">

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-500 transition">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  {item.description}
                </p>

                <button
                  className="text-orange-500 text-sm font-semibold mt-4 hover:text-orange-600 transition"
                >
                  View More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Product;
