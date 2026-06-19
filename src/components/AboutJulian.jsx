import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

const julianStats = {
  name: "Julian Rußmeyer",
  description:
    "I've been shaping products at Flower Labs as a UI/UX designer and after years of handing off the implementation to engineers, I decided it was time to become one. Currently completing Ironhack's Full-Stack Bootcamp and can't wait to build great stuff on my own.",
  image: "https://avatars.githubusercontent.com/u/73818387?v=4",
  location: "Hamburg, Germany",
  company: "Flower Labs",
  email: "julian@flower.ai",
  github: "https://github.com/Julianrussmeyer",
  linkedin: "https://www.linkedin.com/in/julian-russmeyer/",
};

function copyToClipboard(copyText) {
  navigator.clipboard.writeText(copyText);
  alert(`Copied to Clipboard: ${copyText}`);
}

export default function AboutJulian() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-8 rounded-xl bg-white/3 px-8 py-10 shadow-lg ring-1 ring-white/20 backdrop-blur-md">
        <div className="my-auto col-span-1 shadow-lg ring-1 ring-white/20 rounded-lg backdrop-blur-md overflow-hidden h-72">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={julianStats.image}
          />
        </div>
        <div className="my-auto col-span-1 text-white text-left">
          <h1 className="mb-2 font-bold text-2xl font-sans">
            {julianStats.name}
          </h1>
          <div className="mb-2 flex gap-4 text-xs text-gray-300">
            <p className="flex">
              <FaMapMarkerAlt className="-mb-2 mr-2" />
              {julianStats.location}
            </p>
            <p className="flex">
              <FaBriefcase className="-mb-2 mr-2" />
              {julianStats.company}
            </p>
          </div>
          <p className="mb-2 font-sans text-gray-300">
            {julianStats.description}
          </p>
          <a
            className="mb-4 block text-purple-400 hover:text-purple-600 "
            href={`mailto:${julianStats.email}`}
          >
            Get in touch →
          </a>
          <div className="flex items-start gap-4">
            <a href={julianStats.github} target="_blank">
              <FaGithub className="h-6 w-auto hover:text-purple-400" />
            </a>
            <a href={julianStats.linkedin} target="_blank">
              <FaLinkedin className="h-6 w-auto hover:text-purple-400" />
            </a>
            <button onClick={() => copyToClipboard(julianStats.email)}>
              <FaEnvelope className="h-6 w-auto hover:text-purple-400 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
