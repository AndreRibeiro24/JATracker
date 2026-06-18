
export default function LoadingScreen() {
  return (
    <div className = "fixed inset-0 flex flex-col items-center justify-center bg-[#0b1326] z-50">
        <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="text-amber-50 font-mono mt-6 text-lg">Loading...</p>
    </div>
  )
}
