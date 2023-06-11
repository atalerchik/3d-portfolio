import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Star from "../../assets/star.svg";

export function Home() {
  const [t, setI18n] = useTranslation();
  const usersReviewsPhotos = [
    "person-1",
    "person-2",
    "person-3",
    "person-1",
    "person-2",
    "person-3",
  ];

  return (
    <div className="flex h-[calc(100vh-102px)] items-center justify-center  md:h-[calc(100vh-58px)] bg-[url('/home-background.jpg')] bg-cover bg-center bg-no-reapeat">
      <div className=" flex items-center mx-auto  w-5/6 mx-auto">
        <div className="">
          <h1 className="text-6xl md:text-8xl font-bold block">{t("home.greeting")}</h1>
          <p className="text-1xl md:text-2xl my-5 text-slate-300">{t("home.description")}</p>
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
              {usersReviewsPhotos.map((photoName) => {
                return (
                  <img
                    src={photoName + ".jpg"}
                    alt={photoName}
                    className="w-8 h-8 bg-cover rounded-full -ml-2 hover:w-9 hover:h-9"
                  />
                );
              })}{" "}
            </div>
          </div>
          <div className="flex gap-8 w-100 text-slate-300">
            <Link
              to={"/works"}
              className="rounded-full text-center border-stone-300 border-2 py-4 flex-1 hover:bg-blue-500 bg-stone-900 bg-opacity-50 transition-color duration-200 ease-in"
            >
              {t("home.buttons.works")}
            </Link>
            <Link
              to={"/about"}
              className="rounded-full text-center border-stone-300 border-2 py-4 flex-1 hover:bg-blue-500 bg-stone-900 bg-opacity-50 transition-color duration-200 ease-in"
            >
              {t("home.buttons.about")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
