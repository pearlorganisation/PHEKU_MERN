const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Unlock Your Educational Potential
            </h1>
            <p className="mt-4 text-lg text-gray-700 md:text-xl lg:text-2xl">
              Discover a world of educational resources, from study abroad
              guidance to exam prep and language learning tools. Elevate your
              learning journey with our comprehensive platform.
            </p>
            <div className="mt-6 flex items-center">
              <input
                type="text"
                placeholder="Search colleges, exams, schools and more"
                className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-lg"
              />
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-r-md hover:bg-yellow-600 sm:text-lg">
                Search
              </button>
            </div>

            <div className="flex gap-2 p-8">
              <h3 className="underline text-purple-400">
                JEE MAIN College Predictor
              </h3>
              <h3 className="text-purple-400"> | </h3>
              <h3 className="underline text-purple-400">
                {" "}
                NEET College Predictor
              </h3>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <img
                src="https://media.istockphoto.com/id/1353383706/photo/young-indian-woman-on-yellow-copy-space-background-stock-photo.jpg?s=612x612&w=0&k=20&c=qehlC0Gmh-VzBdBpLv9mx-qmtnFRUHPpWMNM49eSLFE="
                alt="Student"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                  Mentors
                </p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  453
                </p>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                  Online Courses
                </p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  2K
                </p>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                  Video Courses
                </p>
                <p className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
                  3K+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
            Our Programs
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/17501/17501828.png"
                alt="Development"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                Development
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9872/9872371.png"
                alt="IT & Software"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                IT & Software
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2779/2779775.png"
                alt="Design"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                Design
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4166/4166798.png"
                alt="Speaking"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                Speaking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
