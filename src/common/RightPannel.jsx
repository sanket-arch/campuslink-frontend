export default function RightPanel() {
  return (
    <div className="flex flex-col w-1/4 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Right Panel</h2>
      <p className="mb-2">This is the right panel content.</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Action Button
      </button>
    </div>
  );
}
