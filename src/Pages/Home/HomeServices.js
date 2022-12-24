import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const HomeService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tour-guide-server-jsarafath.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {loading ? (
        <h1 className="flex text-xl font-bold justify-center items-center bg-gray-900">
          {" "}
          Loading...{" "}
        </h1>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="border border-black bg-gray-200 rounded-lg"
              >
                <div className="block rounded-lg p-4 shadow-lg ">
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
                            {" "}
                            {service.price}
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
                        <dd className="">
                          {service.discription.slice(0, 100)}
                        </dd>
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
          <div className="flex justify-center mt-5">
            <Link
              className="px-3 py-2  rounded-xl bg-gray-900 font-bold text-white"
              to="/services"
            >
              See More
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeService;
