
function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We discuss your ideas, understand your needs, and define the project goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6 3-3h9a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a3 3 0 0 0 2 3Z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "We create creative designs and interactive prototypes for your project.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 7v10l8 4 8-4V7l-8-4Z M4 7l8 4 8-4M12 11v10m-4-16 8 4" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Production",
      description:
        "Our team transforms the approved design into a high-quality final product.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M12 3 14 5l3-.2.8 2.8 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.8 2.8-3-.2-2 2-2-2-3 .2-.8-2.8L3.7 15.7l1-2.8-1-2.8 2.5-1.7L7 5.6l3 .2 2-2Z M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Go-to-Delivery",
      description:
        "We deliver the finished project, ensuring everything works perfectly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v11H3zM14 11h4l3 3v4h-7zM7 18a2 2 0 1 0 4 0m6 0a2 2 0 1 0 4 0" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 py-5 px-5 sm:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <span className="text-orange-500 text-md font-semibold">
           • Our Process
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            From Concept to Delivery
          </h2>

          <p className="text-slate-500 mt-3 max-w-xl text-sm sm:text-base leading-7">
            We follow a simple and effective process to turn your ideas
            into successful projects, delivering quality at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">

          {steps.map((step, index) => (
            <div key={step.number} className="relative group">

              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-[80%] border-t-2 border-dashed border-blue-200"></div>
              )}

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <div className="mt-7">
                <span className="text-xs font-bold tracking-widest text-blue-500">
                  STEP {step.number}
                </span>

                <h3 className="text-lg font-bold text-slate-800 mt-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 leading-7 mt-3 max-w-xs">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Process;
