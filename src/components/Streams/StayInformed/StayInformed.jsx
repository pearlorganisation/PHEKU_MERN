import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    id: 1,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
  {
    id: 2,
    image:
      "https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
  {
    id: 3,
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
  {
    id: 4,
    image:
      "https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
  {
    id: 5,
    image: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
    name: "Shubham asdjasdlk asdajsdlkasdj ",
    description:
      "Lorem lksdflkjl al;asldkaljskd lkvjlxkcvljkxcjv ljljadjlasdk lsjklksdfjlsdkljf",
  },
];

const StayInformed = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesPerRow: 3,
  };
  return (
    <div className="bg-white mt-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mt-4">
          Stay <span className="text-orange-500"> informed </span>
        </h1>

        <p className="text-2xl mt-3">
          with the latest news in the space of Engineering and Architecture
        </p>
      </div>

      <div className="w-3/4 m-auto">
        <div className="mt-20 gap-3">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.id}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 rouded-t-xl bg-white flex justify-center items-center">
                  <img src={d.image} className="w-44 h-44 rounded-full" />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold"> {d.name} </p>

                  <p> {d.description}</p>

                  <button className="bg-indigo-500 text-white text-lg  px-6 py-1 rounded-xl">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 p-3">
        <button className="rounded-full bg-gray-400 px-6 py-2">View All</button>
      </div>
    </div>
  );
};

export default StayInformed;
