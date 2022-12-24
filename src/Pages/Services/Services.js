import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useTilte from "../../Hooks/Title";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://tour-guide-server-jsarafath.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useTilte("Services");

  return (
    <div className="w-11/12 md:w-9/12 mx-auto pt-5 pb-20 bg-white">
      {loading ? (
        <h1 className="flex text-xl font-bold justify-center items-center h-screen">
          {" "}
          Loading...{" "}
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg bg-white"
            >
              <div className="block rounded-lg p-4 ">
                <PhotoProvider>
                  <div className="foo">
                    <PhotoView key={index} src={service.img}>
                      <img
                        alt="Home"
                        src={service.img}
                        className="h-56 w-full rounded-md object-cover"
                      />
                    </PhotoView>
                  </div>
                </PhotoProvider>

                <div className="mt-2">
                  <dl>
                    <div className="mt-6 flex items-center justify-between gap-4 text-xs">
                      <div>
                        <dd className="text-sm text-gray-500">
                          $ {service.price}
                        </dd>
                      </div>
                      <div className="sm:inline-flex  sm:items-center">
                        <FontAwesomeIcon icon={faStar} />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                          <p className="font-medium">{service.rating}</p>
                        </div>
                      </div>

                      <div className="sm:inline-flex sm:items-center">
                        <FontAwesomeIcon icon={faUser} />
                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                          <p className="text-gray-500">Reviews</p>

                          <p className="font-medium">{service.review}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <dd className="font-bold text-xl">{service.name}</dd>
                    </div>
                  </dl>

                  <dl>
                    <div>
                      <dd className="">{service.discription.slice(0, 100)}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-center justify-between gap-4 text-xs">
                    <Link
                      to={`/services/${service._id}`}
                      className="px-3 py-2 bg-gray-500 text-white rounded-xl "
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
