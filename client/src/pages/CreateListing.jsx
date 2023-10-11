export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Creacion de Listas
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Descripcion"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Direccion"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="sale" />
              <span>Venta</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="rent" />
              <span>Renta</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="parking" />
              <span>Parqueadero</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="furnished" />
              <span>Amueblado</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="offer" />
              <span>En Oferta</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 ">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                className="p-3 border border-gray-300 rounded-lg"
                min="1"
                max="10"
                required
              />
              <p>Cuartos</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                className="p-3 border border-gray-300 rounded-lg"
                min="1"
                max="10"
                required
              />
              <p>Baños</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regularPrice"
                className="p-3 border border-gray-300 rounded-lg"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Precio Regular</p>
                <span className="text-xs">($ / mes)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="descoutnPrice"
                className="p-3 border border-gray-300 rounded-lg"
                min="1"
                max="10"
                required
              />
              <div className="flex flex-col items-center">
                <p>Precio con descuento</p>
                <span className="text-xs">($ / mes)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="font-semibold">
            Imagenes:
            <span className="font-normal text-gray-600 ml-2">
              La primera imagen sera la portada (max6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-88">
              Cargar
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-yellow-50 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Crear Lista
          </button>
        </div>
      </form>
    </main>
  );
}
