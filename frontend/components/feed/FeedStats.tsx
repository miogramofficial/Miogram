export default function FeedStats() {
  return (
    <div className="flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-1">
        ❤️
        <span>1.2K</span>
      </div>

      <div className="flex items-center gap-1">
        💬
        <span>348</span>
      </div>

      <div className="flex items-center gap-1">
        ↗
        <span>Share</span>
      </div>

      <div className="flex items-center gap-1 font-semibold text-blue-400">
        🌍
        <span>24.8K Entered</span>
      </div>
    </div>
  );
}