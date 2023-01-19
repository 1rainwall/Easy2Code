export function Button({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 border-white border-2 rounded text-white ${className}`}
    >
      {children}
    </button>
  );
}
