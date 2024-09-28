const products = [
  {
    id: 1,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/college-compare.svg",
    name: "College Compare",
  },
  {
    id: 2,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/college-review.svg",
    name: "College Reviews",
  },
  {
    id: 3,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/btech-companion.svg",
    name: "B.Tech Companion",
  },
  {
    id: 4,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/mbbs-companion.svg",
    name: "NEET Companion",
  },
  {
    id: 5,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/course-listing.svg",
    name: "List of Courses",
  },
  {
    id: 6,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/admission-open.svg",
    name: "College Applications",
  },
];

const features = [
  {
    id: 1,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/student.png",
    name: "Students",
    quantity: "300M+",
  },
  {
    id: 2,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/colleges.png",
    name: "Colleges",
    quantity: "36000+",
  },
  {
    id: 3,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/exams.png",
    name: "Exams",
    quantity: "550+",
  },
  {
    id: 4,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/ebook.png",
    name: "E-Books",
    quantity: "1500+",
  },
  {
    id: 5,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/certification.png",
    name: "Certifications",
    quantity: "16000+",
  },
];

const magazines = [
  {
    id: 1,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/economic-times.png",
  },
  {
    id: 2,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/financial-express.png",
  },
  {
    id: 3,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/firstpost.png",
  },
  {
    id: 4,
    image:
      "https://cnextassets.careers360.com/frontend-common/_react_common/assets/livemint.png",
  },
];

const OtherProducts = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-bold text-2xl">Other Products</h1>
      </div>

      <div className="mt-6">
        <div className="grid grid-col lg:grid-cols-6 md:grid-cols-3 sm:grid-cols2 px-12 ml-6 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center mt-2 gap-3"
            >
              <img
                src={product.image}
                alt="prod image"
                className="w-[40px] h-[40px]"
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 p-12 gap-6">
          <div className="bg-orange-200 p-4">
            <div className="">
              <h1 className="text-purple-600 text-xl font-bold">
                Download Pheku App
              </h1>

              <div className="flex flex-row gap-6">
                <p className="mt-3">
                  Regular Exam Updates, QnA, Predictors, College Applications &
                  E-Books now on your mobile
                </p>

                <img
                  src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/google-play.png"
                  className="-mt-2 h-[40px]"
                />
              </div>

              <div className="flex flex-row gap-6">
                <div className="grid grid-cols-5 gap-2 mt-2 border-orange-800 border-2 p-2">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <img src={feature.image} className="w-[30px] h-[30px]" />
                      <h3 className="text-sm font-bold">{feature.quantity}</h3>
                      <h3 className="text-sm">{feature.name}</h3>
                    </div>
                  ))}
                </div>

                <img
                  src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/mobile-screen.png"
                  className="h-[100px] align-end"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-100">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-2xl text-purple-600">
                We Appeared In
              </h1>

              <div className="grid grid-cols-2">
                {magazines.map((magazine) => (
                  <div key={magazine.id} className="p-4">
                    <div className="bg-white">
                      <img src={magazine.image} className="p-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
