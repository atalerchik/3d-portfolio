const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="./my-photo.webp"
        alt="Profile"
        className="aspect-square h-48 rounded-full mb-8 object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">Alexey Leonov | 3D Designer</h1>
      <p className="text-lg text-gray-500 mb-8 w-full px-4 sm:w-[600px] text-justify">
        Hi there! My name is Alexey, and I am a 3D designer based in{" "}
        <span className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
          Grodno
        </span>
        . I have 3 years of experience in the field and specialize in{" "}
        <span className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
          3D modeling
        </span>
        . I love working with clients to bring their ideas to life, and I am always looking for new
        projects to take on.
      </p>
      <div className="flex flex-row mb-4">
        <div className="flex flex-col items-center mr-16">
          <h3 className="text-xl font-medium mb-2">Location</h3>
          <p className="text-gray-600">Grodno, Belarus</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-medium mb-2">Experience</h3>
          <p className="text-gray-600">3 years</p>
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
