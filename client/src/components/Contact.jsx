import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Contact({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
    // eslint-disable-next-line react/prop-types
  }, [listing.userRef]);
  return (
    <>
      {landLord && (
        <div className="flex flex-col gap-2">
          <p>
            Contactar a:{" "}
            <span className="font-semibold">{landLord.username}</span> para{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Escriba su mensaje aqui..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link to={`mailto:${landLord.email}?subject=Consulta ${listing.name}&body=${message}`} className="bg-slate-700 text-yellow-50 text-center p-3 uppercase rounded-lg hover:opacity-95">
            Enviar Mensaje
          </Link>
        </div>
      )}
    </>
  );
}
