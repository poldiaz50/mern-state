import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>
        Inscribirse
      </h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='Usuario' className='border p-3 rounded-lg' id='username' />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id='email' />
        <input type='password' placeholder='Clave' className='border p-3 rounded-lg' id='password' />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Incribirse</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Tienes una cuenta?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Ingresar</span>
        </Link>
      </div>
    </div>
  )
}
