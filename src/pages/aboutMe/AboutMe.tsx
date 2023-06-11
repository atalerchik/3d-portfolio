import { useTranslation } from "react-i18next";

const AboutMe: React.FC = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="./my-photo.webp"
        alt="Profile"
        className="aspect-square h-48 rounded-full mb-8 object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">{t("aboutMe.name")}</h1>
      <p className="text-lg text-gray-500 mb-8 w-full px-4 sm:w-[600px] text-justify">
        {t("aboutMe.description")}
      </p>
      <div className="flex flex-row mb-4">
        <div className="flex flex-col items-center mr-16">
          <h3 className="text-xl font-medium mb-2">{t("aboutMe.stats.locationHeading")}</h3>
          <p className="text-gray-600">{t("aboutMe.stats.location")}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-medium mb-2">{t("aboutMe.stats.experienceHeading")}</h3>
          <p className="text-gray-600">{t("aboutMe.stats.experience")}</p>
        </div>
      </div>
      <div className="flex flex-row">
        <a
          href="https://www.linkedin.com/in/alexey-leonov-26b39627a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <span className="mx-4">|</span>
        <a
          href="https://dribbble.com/Slasher888?onboarding=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
        >
          Dribbble
        </a>
        <span className="mx-4">|</span>
        <a
          href="https://www.instagram.com/slayer.of99/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
