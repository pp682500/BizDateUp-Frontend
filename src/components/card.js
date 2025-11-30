export default function Card({ item, onEdit, onDelete }) {
  return (
    <div className="shadow p-4 bg-white rounded border">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Email: {item.email}</p>
      <p>Phone: {item.phone}</p>
      <p className="text-gray-600 mt-2">{item.message}</p>

      <div className="flex gap-3 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onEdit(item.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
