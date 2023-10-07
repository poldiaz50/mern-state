import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Perfil</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Usuario"
          id="username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="email"
          id="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="Clave"
          id="password"
        />
        <button className="bg-slate-700 text-yellow-50 rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Actualizar
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-800 cursor-pointer">Borrar Cuenta</span>
        <span className="text-red-800 cursor-pointer">Salir</span>
      </div>
    </div>
  );
}
