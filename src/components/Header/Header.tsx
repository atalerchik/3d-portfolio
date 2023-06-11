import { useSignOut, useAuthUser } from "react-auth-kit";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [t, i18n] = useTranslation();
  const locales: Record<string, string> = { en: "en", ru: "ru" };
  const location = useLocation();
  const signOut = useSignOut();
  const authUser = useAuthUser();

  return (
    <header className="flex flex-col-reverse gap-5 justify-between items-center md:flex-row py-3 w-5/6 my-0 mx-auto align-middle md:justify-between">
      <nav className="gap-10 flex text-stone-300 font-bold ">
        <Link
          to={"/"}
          className={`${
            location.pathname === "/"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          {t("header.home")}
        </Link>
        <Link
          to={"/works"}
          className={`${
            location.pathname === "/works"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          {t("header.works")}
        </Link>
        <Link
          to={"/about"}
          className={`${
            location.pathname === "/about"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          {t("header.about")}
        </Link>
      </nav>
      <div className="flex gap-10">
        <div className="flex gap-5 items-center">
          <Link to={"https://www.linkedin.com/in/alexey-leonov-26b39627a/"}>
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className="fill-stone-400 hover:fill-stone-300 cursor-pointer"
            >
              {" "}
              <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
            </svg>
          </Link>
          <Link to={"https://dribbble.com/Slasher888?onboarding=true"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EBEBEB"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 26.173828 11 C 22.039828 11 22 21.271 22 21.375 C 22 22.583 21.999078 23.375 22.080078 24.375 C 21.511078 24.178 20.849953 24.052734 20.126953 24.052734 C 15.880953 24.052734 14 28.376875 14 32.046875 C 14 35.507875 16.055391 39 20.650391 39 C 22.817391 39 24.650047 37.659203 26.123047 35.658203 C 27.429047 36.938203 28.796312 36.980469 29.820312 36.980469 C 33.036312 36.980469 35.165641 31.17775 35.931641 28.84375 C 36.175641 28.09675 35.743844 27.300453 34.964844 27.064453 C 34.192844 26.832453 33.355328 27.243234 33.111328 27.990234 C 32.206328 30.746234 31.254 33.28 29.75 34 C 29.225 34.251 28.418 33.924 27.625 32.875 C 29.468 29.148 30 24.621 30 21.5 C 30 12.774 28.135828 11 26.173828 11 z M 26.291016 14.046875 C 26.757016 14.711875 27.044922 16.736047 27.044922 21.498047 C 27.043922 24.026047 26.924234 27.018797 25.990234 29.591797 C 25.374234 27.590797 24.957031 24.892047 24.957031 21.373047 C 24.957031 18.129047 25.682016 15.087875 26.291016 14.046875 z M 20.125 27 C 21.384 27 22.349609 27.808547 22.349609 27.810547 C 22.421609 27.882547 22.500031 27.945 22.582031 28 C 22.995031 29.973 23.630734 31.926734 24.302734 33.177734 C 23.200734 34.979734 21.896 36 20.625 36 C 17.29 36 17 33.362 17 32.125 C 17 31.93 16.939 27 20.125 27 z" />
            </svg>
          </Link>
          <Link to={"https://www.instagram.com/slayer.of99/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#EBEBEB"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
            </svg>
          </Link>

          <div className="flex items-center">
            <ul className="flex items-center space-x-2 bg-stone-900 rounded-full border-2 border-stone-800">
              {Object.keys(locales).map((key) => (
                <li
                  key={key}
                  className={`cursor-pointer px-2 rounded-full ${
                    i18n.language === key ? "bg-blue-500" : ""
                  }`}
                >
                  <button onClick={() => i18n.changeLanguage(key)}>{locales[key]}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {authUser() ? (
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            <img src="./exit.png" height="18px" width="18px" alt="logo" />
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            <img src="./login.png" height="18px" width="18px" alt="logo" />
          </Link>
        )}
      </div>
    </header>
  );
}
