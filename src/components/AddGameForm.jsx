import {useState, useContext} from 'react'
import {UserData} from '../context/Context'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ rating, setRating }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          type="button"
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="text-2xl transition"
        >
          {hovered >= star || rating >= star
            ? <AiFillStar className="text-purple-400" />
            : <AiOutlineStar className="text-white/20" />
          }
        </button>
      ))}
    </div>
  );
};

export default function AddGame() {
  const {addGame} = useContext(UserData);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [screenshots, setScreenshots] = useState(["", "", "", ""]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [rating, setRating] = useState(0);

  const GENRES = ["Action", "Adventure", "RPG", "Strategy", "Simulation",
    "Sports", "Racing", "Puzzle", "Horror", "FPS", "MMO", "Indie"];

  const PLATFORMS = [
    { id: "pc", label: "PC" },
    { id: "ps5", label: "PS5" },
    { id: "xbox", label: "Xbox" },
    { id: "switch", label: "Switch" },
    { id: "mobile", label: "Mobile" },
    { id: "mac", label: "Mac" },
  ];

  const handleScreenshot = (index, value) => {
    const updated = [...screenshots];
    updated[index] = value;
    setScreenshots(updated);
  };

  const togglePlatform = (id) => {
    setSelectedPlatforms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!title || !genre || !description) {
      alert("Please fill in all required fields");
      return;
    }
    addGame({
      name: title,
      description,
      background_image: heroImage,
      genres: [{name: genre}],
      platforms: selectedPlatforms.map(p => ({platform: {name: p}})),
      short_screenshots: screenshots
        .filter(s => s !== "")
        .map((s, i) => ({id: i, image: s})),
      rating,
      isFavourite: false,
    });
    setTitle("");
    setGenre("");
    setDescription("");
    setHeroImage("");
    setScreenshots(["", "", "", ""]);
    setSelectedPlatforms([]);
    setRating(0);
  };

  const inputClass = "w-full bg-[#111c30] border border-white/10 text-white font-mono placeholder-white/30 rounded px-4 py-2 focus:outline-none focus:border-purple-500 transition";

  return (
    <div className="bg-[#0b1326] font-mono text-white min-h-screen px-4 py-12">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <div>
        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">JATracker</p>
        <h1 className="text-4xl font-bold uppercase tracking-widest">
        Add Your <span className="text-purple-400">Game</span>
        </h1>
        </div>
        {/* Game Information */}
        <section className="border border-white/10 rounded p-6 flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-widest text-white/50">Game Information</h2>
          <input
            type="text"
            placeholder="Enter game title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={inputClass}
          />
          <select
            value={genre}
            onChange={e => setGenre(e.target.value)}
            className={inputClass}
            style={{ colorScheme: 'dark' }}
          >
            <option value="">Select Genre</option>
            {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <textarea
            placeholder="Enter short game description..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={5}
            className={inputClass}
          />
          <div className="flex items-center gap-4">
            <label className="text-sm text-white/50 uppercase tracking-widest">Rating</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
        </section>

        {/* Visuals */}
        <section className="border border-white/10 rounded p-6 flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-widest text-white/50">Visuals</h2>
          <input
            type="text"
            placeholder="Hero image URL..."
            value={heroImage}
            onChange={e => setHeroImage(e.target.value)}
            className={inputClass}
          />
          <div className="grid grid-cols-2 gap-3">
            {screenshots.map((s, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Screenshot ${i + 1} URL...`}
                value={s}
                onChange={e => handleScreenshot(i, e.target.value)}
                className={inputClass}
              />
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="border border-white/10 rounded p-6 flex flex-col gap-4">
          <h2 className="text-sm uppercase tracking-widest text-white/50">Platforms</h2>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map(p => (
              <button
                type="button"
                key={p.id}
                onClick={() => togglePlatform(p.id)}
                className={`px-4 py-2 rounded border font-mono text-sm uppercase tracking-widest transition
                  ${selectedPlatforms.includes(p.id)
                    ? "border-purple-500 text-purple-400 bg-purple-500/10"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/60"
                  }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 rounded border border-purple-500 text-purple-400 uppercase tracking-widest text-sm font-bold hover:bg-purple-500/10 transition"
        >
          Publish Game
        </button>
      </div>
    </div>
  );
}