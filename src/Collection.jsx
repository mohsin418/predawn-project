
function App() {
  const products = [
    {
      name: "Custom Printed Boxes",
      price: "Starting from $0.45",
      image:
        "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=600",
      tag: "CUSTOM DESIGN",
    },
    {
      name: "Food Packaging",
      price: "Starting from $0.35",
      image:
        "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600",
      tag: "FOOD GRADE",
    },
    {
      name: "Mailing Boxes",
      price: "Starting from $0.55",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600",
      tag: "BEST SELLER",
    },
    {
      name: "Retail Bags",
      price: "Starting from $0.25",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
      tag: "ECO FRIENDLY",
    },
  ];

  return (
    <section className="bg-white py-16 px-5 sm:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <span className="text-orange-500 text-md font-semibold">
           • Our Collection
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Popular Packaging Products
          </h2>

          <p className="text-sm text-slate-500 mt-3 max-w-xl leading-6">
            Discover our most requested and high-performing packaging
            solutions, designed to elevate your brand.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative bg-slate-100 rounded-xl overflow-hidden h-64">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-3 left-3 bg-white text-slate-700 text-[10px] font-bold tracking-wider px-3 py-2 rounded-md shadow-sm">
                  {product.tag}
                </span>

                <button className="absolute bottom-3 right-3 bg-white w-10 h-10 rounded-full flex items-center justify-center text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                  ↗
                </button>
              </div>

              {/* Product Details */}
              <div className="pt-4">
                <h3 className="text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-slate-500">
                    {product.price}
                  </p>

                  <span className="text-orange-500 text-lg">
                    →
                  </span>
                </div>

                <div className="w-full h-px bg-slate-200 mt-4 group-hover:bg-orange-400 transition-colors"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default App;
