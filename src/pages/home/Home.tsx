import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Home() {
  const [t] = useTranslation();

  return (
    <div className="flex h-[calc(100vh-102px)] items-center justify-center  md:h-[calc(100vh-58px)] bg-[url('/home-background.jpg')] bg-cover bg-center bg-no-reapeat">
      <div className=" flex items-center mx-auto  w-5/6 mx-auto">
        <div className="">
          <h1 className="text-6xl md:text-8xl font-bold block">{t("home.greeting")}</h1>
          <p className="text-1xl md:text-2xl my-5 text-slate-300">{t("home.description")}</p>
          <div className="flex gap-8 w-100 mt-12 text-slate-300">
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
