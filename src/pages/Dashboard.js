import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSubmissions, deleteSubmission } from "../services/api";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all items
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getSubmissions();
      console.log("GET DATA:", res.data);
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching:", err);
      alert("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await deleteSubmission(id);
      console.log("DELETE SUCCESS:", res.data);

      // Remove from UI instantly
      setItems((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Delete failed — see console");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-6 shadow rounded-xl">

              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>Role: {item.role}</p>

              <div className="flex gap-3 mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  <FaEdit /> Edit
                </button>

                <button
                  className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash /> Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
