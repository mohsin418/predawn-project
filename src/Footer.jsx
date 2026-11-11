
import React from "react";

function Footer() {
  return (
    <div className="font-sans">

      {/* QUOTE SECTION */}
      <section className="bg-[#08243e] relative overflow-hidden px-5 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">
            <span className="text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-[3px]">
              Let's Work Together
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-5">
              Get a Custom Quote
              <br />
              for Your Packaging Needs
            </h2>

            <p className="text-blue-100/70 text-sm sm:text-base leading-7 mt-5 max-w-lg">
              Tell us about your project and our team will get back to you
              with the best solution and pricing. We are here to bring
              your packaging ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#quote-form"
                className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-md text-sm font-bold transition duration-300 shadow-lg shadow-orange-500/20"
              >
                Request a Quote →
              </a>

              <a
                href="#contact"
                className="border border-blue-300/40 hover:bg-white hover:text-slate-900 text-white px-7 py-4 rounded-md text-sm font-semibold transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div id="quote-form" className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">

            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Request Your Free Quote
            </h3>

            <p className="text-sm text-slate-500 mb-6">
              Fill out the form and we'll contact you shortly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your request has been submitted.");
              }}
              className="space-y-5"
            >

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Packaging Type *
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                >
                  <option value="" disabled>Select packaging type</option>
                  <option>Custom Printed Boxes</option>
                  <option>Food Packaging</option>
                  <option>Mailing Boxes</option>
                  <option>Retail Bags</option>
                  <option>Other Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Tell us about your packaging requirements..."
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm outline-none resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md text-sm transition duration-300 shadow-md"
              >
                Send Your Request →
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#03182b] text-white px-5 pt-14 pb-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

            {/* Company */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-orange-500 flex items-center justify-center text-2xl">
                  📦
                </div>
                <div>
                  <h3 className="font-extrabold text-lg leading-5">
                    Packaging
                  </h3>
                  <p className="text-orange-400 text-xs font-semibold">
                    Manufacturing Company
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-7 mt-5 max-w-xs">
                Your trusted partner for premium packaging solutions.
                We create packaging that makes your brand stand out.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-5">Quick Links</h3>

              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Our Products</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
                <li><a href="#quote-form" className="hover:text-orange-400 transition">Get a Quote</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-base mb-5">Contact Us</h3>

              <div className="space-y-5 text-sm text-slate-400">

                <p className="flex gap-3 items-center">
                  <span className="text-orange-400 text-lg">☎</span>
                  +1 (234) 567-890
                </p>

                <p className="flex gap-3 items-center break-all">
                  <span className="text-orange-400 text-lg">✉</span>
                  info@packagingcompany.com
                </p>

                <p className="flex gap-3 items-start">
                  <span className="text-orange-400 text-lg">⌖</span>
                  123 Business Street, New York, USA
                </p>

              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-base mb-5">Follow Us</h3>

              <div className="flex gap-3">
                {["f", "in", "◎", "✉"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-md bg-white/10 hover:bg-orange-500 flex items-center justify-center font-bold text-sm transition duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <p className="text-slate-400 text-sm mt-6 leading-6">
                Stay connected with us for the latest packaging ideas
                and updates.
              </p>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">

            <p>
              © 2026 Packaging Manufacturing Company. All Rights Reserved.
            </p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default Footer;
