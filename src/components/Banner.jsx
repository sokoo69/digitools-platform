const Banner = () => {
  return (
    <section id="home" className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="badge badge-lg inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
              Supercharge Your{' '}
              <span className="text-purple-600">Digital Workflow</span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
              Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="btn btn-primary bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg text-sm border-0"
              >
                Explore Products
              </a>
              <button className="btn btn-outline flex items-center gap-2 border-gray-300 hover:border-purple-300 text-gray-700 hover:text-purple-600 font-semibold px-6 py-3 rounded-lg transition-all text-sm">
                <img src="/Play.png" alt="Play" className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="/banner.png"
              alt="Digital Tools Illustration"
              className="w-full max-w-md lg:max-w-lg h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
