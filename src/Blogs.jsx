

import { useState } from "react";

function Blogs() {

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
      review: "Amazing experience working with this team. Their attention to detail and professionalism made the entire process smooth and easy."
    },
    {
      name: "John Smith",
      role: "Business Owner",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRii46i32zUdQ107Pxw8d-tldnquyu7_ehXe0rDUtmdJQ&s=10",
      rating: 5,
      review: "Excellent service and outstanding results. The team understood our requirements and delivered exactly what we needed."
    },
    {
      name: "Emily Wilson",
      role: "Creative Director",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvm_M6Od5TRX34xcBbW5wUKmh1KsHHQ7vSOEFLhxIOg&s=10",
      rating: 4,
      review: "Very professional team with great communication. I am really happy with the final results and their amazing work."
    },
    {
      name: "Michael Brown",
      role: "Project Manager",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqnzlJF23Yk1H7bHre1OZ46wPgAg8LceXU2HRUDbiwA&s=10",
      rating: 5,
      review: "Working with this company was a wonderful experience. They completed everything on time and exceeded our expectations."
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[current];

  return (
    <section className="bg-gray-50 flex items-center justify-center px-5 py-16">

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-20 items-center">

        {/* Left Content */}
        <div className="xl:ml-10 md:ml-6 sm:ml-4">

          <span className="text-orange-500 text-sm font-semibold">
            • OUR TESTIMONIALS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-6 max-w-md">
            We believe in building strong relationships with our clients
            by delivering quality work and excellent services.
          </p>

          {/* Review */}
          <div className="flex items-start gap-5 mt-10">

            <img
              src={activeReview.image}
              alt={activeReview.name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="flex-1">

              <div className="text-orange-500 text-xl ">
                {"★".repeat(activeReview.rating)}
                {"☆".repeat(5 - activeReview.rating)}
              </div>

              <p className="text-gray-600 text-sm leading-7 mt-3 max-w-md">
                "{activeReview.review}"
              </p>

              <h3 className="font-bold text-gray-900 mt-5 text-sm">
                {activeReview.name}
              </h3>

              <p className="text-gray-400 text-xs mt-2">
                {activeReview.role}
              </p>

            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 mt-12">

            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition"
            >
              ←
            </button>

            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 ml-7">

              {reviews.map((review, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-7 bg-orange-500"
                      : "w-2.5 bg-gray-300"
                  }`}
                ></button>
              ))}

            </div>

          </div>
        </div>

        {/* Right Image Card */}
        <div className="relative w-full md:w-1/2 h-[380px] overflow-hidden rounded-xl shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
            alt="Interior Design"
            className="w-full h-[280px] object-cover"
          />

          <div className="bg-slate-900 text-white p-7 h-[100px]">

            <h3 className="text-xl font-bold">
              Real Packaging.
            </h3>

            <p className="text-sm text-gray-300 mt-1">
              Real Impact.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Blogs;
