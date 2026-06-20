import { UserData } from "../context/Context";
import { useContext, useState } from "react";
import { FaUserAstronaut as UserIcon } from "react-icons/fa6";

function formatDateTime(dateString) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

export default function CommentSection({ value }) {
  const { comments, loading, addComment } = useContext(UserData);
  const gameComments = comments.filter((comment) => comment.gameId === value);
  const [commentInput, setCommentInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const handleCommentInput = (e) => setCommentInput(e.target.value);
  const handleAuthorInput = (e) => setAuthorInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      gameId: value,
      author: authorInput,
      body: commentInput,
      createdAt: new Date().toISOString(),
    };
    try {
      await addComment(newComment);
      setCommentInput("");
      setAuthorInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const inputClass = "w-full bg-[#111c30] border border-white/10 text-white font-mono placeholder-white/30 rounded px-4 py-2 focus:outline-none focus:border-purple-500 transition";

  return (
    <div className="w-[100vw] mx-auto bg-[#0b1326]">
      <div className="py-32 mx-auto max-w-9/10 xl:max-w-6/10 relative text-white">
        <div className="flex items-start gap-8 space-y-4">
          <div className="flex-1 border border-white/10 rounded p-6 flex flex-col gap-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <label className="text-sm uppercase tracking-widest text-white/50">New Comment</label>
                <input
                  type="text"
                  name="comment"
                  onChange={handleCommentInput}
                  value={commentInput || ""}
                  placeholder="Share your thoughts..."
                  className={inputClass}
                />
                <input
                  type="text"
                  name="author"
                  onChange={handleAuthorInput}
                  value={authorInput || ""}
                  placeholder="Your Name"
                  className={inputClass}
                />
                <button
                  className="w-full py-3 rounded border border-purple-500 text-purple-400 uppercase tracking-widest text-sm font-bold hover:bg-purple-500/10 transition"
                  type="submit"
                >
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 space-y-6">
            {loading && <p className="text-gray-400 text-sm">Loading...</p>}
            {gameComments.length === 0 && <p>No comments yet.</p>}
            {gameComments.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="border border-white/10 rounded p-6 flex flex-col gap-4"
                >
                  <div className="font-mono text-white/80">"{comment.body}"</div>
                  <div className="flex justify-between">
                    <div className="flex font-mono text-sm uppercase tracking-widest text-white/50">
                      <UserIcon className="mt-1 mr-2" />
                      {comment.author}
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-white/40">
                      {formatDateTime(comment.createdAt)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
