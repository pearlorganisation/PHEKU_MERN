const Counselling = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8 p-8">
        <h1 className="font-bold text-3xl"> Counselling</h1>

        <p className="mt-4 text-gray-600 w-[50%] text-center text-xl">
          We ease your biggest doubts with personalized Video Counselling from
          our Curated Experts and Answers from the Student Community.
        </p>

        <div className="mt-6 w-[80%]">
          <div className="flex gap-6 justify-around">
            <img
              src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/counseling.png"
              className="w-[80%] h-[80%]"
            />

            <div className="flex flex-col gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-12">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/expert-chat.svg "
                    className="w-[40px] h-[40px]"
                  />
                  <h1>Expert Counselling</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  Personalized Video Counselling from our Curated Experts on
                  Exams, Courses, Colleges and Career Selection on our app.
                </p>

                <div className="flex gap-4">
                  <h3 className="mt-2 text-green-400">START NOW</h3>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-12 min-w-min">
                <div className="flex gap-4 ">
                  <img
                    src="https://cnextassets.careers360.com/frontend-common/_react_common/assets/qna.svg"
                    className="w-[40px] h-[40px]"
                  />
                  <h1 className="font-bold text-xl">QnA</h1>
                </div>
                <p className="mt-2 w-[90%]">
                  1 Million+ Questions answered by the student community within
                  24 hours each
                </p>

                <div className="flex gap-4">
                  <h3 className="mt-2 text-green-400">ASK NOW</h3>

                  <h3 className="mt-2 text-green-400">QNA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counselling;
