export default function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  );
}
