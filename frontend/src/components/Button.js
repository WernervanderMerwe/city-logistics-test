export function Button({ className, onClick, label }) {
  return (
    <button
      className={`bg-blue-400 rounded-md p-1 hover:bg-blue-600 text-lg sm:text-2xl font-bold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
