import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [sales, setSales] = useState([]);
  const [rents, setRents] = useState([]);
  SwiperCore.use([Navigation]);
  //console.log(offers);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOffers(data);
        fetchRents();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRents = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRents(data);
        fetchSales();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSales = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSales(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOffers();
  }, []);
  return (
    <div>
      {/*top*/}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Encuentra tu nueva Casa{" "}
          <span className="text-slate-500">Perfecta</span>
          <br />
          facilmente
        </h1>
        <div className="text-gray-500 text-xs sm:text-sm">
          PolDiazEstate es el mejor lugar para encontrar su nuevo hogar
          facilmente en la red
          <br />
          Tenemos un gran portafolio de propiedades para usted
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Empecemos ahora...
        </Link>
      </div>
      {/*swiper*/}
      <Swiper navigation>
        {offers &&
          offers.length > 0 &&
          offers.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/*listing results*/}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offers && offers.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold">Ofertas Recientes</h2>
              <Link
                className="text-sm text-blue-800 hover:underline hover:font-semibold"
                to={"/search?offer=true"}
              >
                Mas Ofertas...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offers.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rents && rents.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold">Inmuebles recientes para alquilar</h2>
              <Link
                className="text-sm text-blue-800 hover:underline hover:font-semibold"
                to={"/search?type=rent"}
              >
                Mas Inmuebles para alquilar...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rents.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {sales && sales.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold">Inmuebles para vender</h2>
              <Link
                className="text-sm text-blue-800 hover:underline hover:font-semibold"
                to={"/search?type=sale"}
              >
                Mas Inmuebles para la venta...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {sales.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
