import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { API_URL } from "../../config/api";
const ManageUsers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  // 🔥 Cargar usuarios reales desde Django
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/registro/`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log("Error cargando usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 Filtro de búsqueda por nombre + apellido
  const filteredUsers = users.filter((user) =>
    `${user.nombre} ${user.apellido}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 px-8 py-6">

      {/* Volver al panel */}
      <button
        onClick={() => navigate("/coach/panel")}
        className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Volver al Panel</span>
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Usuarios Registrados
      </h1>

      {/* Buscador */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
        />
      </div>

      {/* Cards de usuarios */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <article
            key={user.id}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {user.nombre} {user.apellido}
            </h2>

            <div className="space-y-2 text-sm">

              <div>
                <span className="text-gray-500 block">Correo</span>
                <span className="font-semibold text-gray-800">
                  {user.correo}
                </span>
              </div>

              <div>
                <span className="text-gray-500 block">Contraseña</span>
                <span className="font-semibold text-gray-800">
                  {user.password}
                </span>
              </div>

              <div>
                <span className="text-gray-500 block">ID Usuario</span>
                <span className="font-semibold text-gray-800">
                  {user.id}
                </span>
              </div>
            </div>
          </article>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No se encontraron usuarios con ese nombre.
          </p>
        )}
      </section>
    </main>
  );
};

export default ManageUsers;
