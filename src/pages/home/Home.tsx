import { useEffect, useState } from "react";
import Star from "../../assets/star.svg";

const usersReviewsPhotos = [
  "person-4.svg",
  "person-2.svg",
  "person-3.svg",
  "person-4.svg",
  "person-2.svg",
  "person-3.svg",
];

interface Image {
  name: string;
  src: string;
}

export function Home() {
  const loadImage = async (imageName: string): Promise<Image> => {
    const image = await import(`./${imageName}`);
    return { name: imageName, src: image.default };
  };

  const loadImages = async () => {
    const images: Image[] = await Promise.all(usersReviewsPhotos.map(loadImage));
    return images;
  };

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    loadImages().then((loadedImages) => setImages(loadedImages));
  }, []);

  return (
    <div className="bg-[url('/home-background.jpg')] bg-cover h-screen">
      <div className=" flex items-center h-screen w-5/6 mx-auto">
        <div className="">
          <h1 className="text-6xl md:text-8xl font-bold block"> Hi, I'm Alexey. </h1>
          <p className="text-1xl md:text-2xl my-5 text-slate-300">
            I am a 3D interior designer, at the moment I have more than 100 works
          </p>
          <div className="flex mb-10 gap-5 h-9">
            <div className="flex gap-1 content-center items-center">
              <div className="flex">
                <img src={Star} alt="User raiting" className="w-6 h-5" />
                <img src={Star} alt="User raiting" className="w-6 h-5" />
                <img src={Star} alt="User raiting" className="w-6 h-5" />
                <img src={Star} alt="User raiting" className="w-6 h-5" />
                <img src={Star} alt="User raiting" className="w-6 h-5" />
              </div>
              <p className="text-yellow-200 pt-1 font-bold">5.0</p>
            </div>
            <div className="flex ml-2">
              {images.map((image) => (
                <img key={image.name} src={image.src} alt={image.name} />
              ))}{" "}
            </div>
          </div>
          <div className="flex gap-8 w-100 text-slate-300">
            <button className="rounded-full border-stone-300 border-2 py-4 flex-1 hover:bg-blue-100 hover:text-slate-900">
              VIEW MY WORKS
            </button>
            <button className="rounded-full border-stone-300 border-2 py-4 flex-1 hover:bg-blue-100 hover:text-slate-900">
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
