import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileError, setFileError] = useState(false);
  const [formData, setFormData] = useState({});

  //firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
        //console.log("Carga es " + progress + "% Hecho");
      },
      (error) => {
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Perfil</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt="profile"
        />
        <p className="text-sm self-center">
          {fileError ? (
            <span className="text-red-800">Error al cargar la imagen (archivo debe ser menor a 2Gb)</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Cargando ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Carga Exitosa</span>
          ) : (
            ""
          )}
        </p>
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
