import AvatarAndre from "../components/AvatarAndre.jsx";
import AvatarTheodor from "../components/AvatarTheodor";
import AboutJulian from "../components/AboutJulian";

export default function AboutUsPage() {
  return (
    <div className="py-32 space-y-16 text-white text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="font-medium text-4xl  text-gray-300">About Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed  text-gray-300">
          JATracker is the final project of module 2 of the Full-Stack Web Development Bootcamp at Ironhack.
          Built part time over four weeks by a team of three, it's a full-stack CRUD application.
        </p>
      </div>
      <div className="space-y-16">
        <AvatarAndre />
        <AvatarTheodor />
        <AboutJulian />
      </div>
    </div>
  );
}
