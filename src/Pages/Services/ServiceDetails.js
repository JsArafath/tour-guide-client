import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../Context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";


const ServiceDetails = () => {
     const [loading, setLoading] = useState(false);
    const {id} = useParams();
     const { user} = useContext(AuthProvider);
    const [docs,setDocs] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(` https://tour-guide-server-jsarafath.vercel.app/service/${id}`)
       .then(res=>res.json())
        .then(data=>setDocs(data))
     },[]) 

     const handleAddService = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const displayname = form.displayname.value;
          const reviewDate = new Date().toDateString();
        const reviewTime = new Date().toLocaleTimeString();
        const serviceData = {
            name,
            displayname,
            reviewDate,
            reviewTime,
        }
        fetch('https://tour-guide-server-jsarafath.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setLoading(false);
                    toast.success('Review Added Successfully');
                    form.reset();
                }
            })
            .catch(e => console.log(e));
    }

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(' https://tour-guide-server-jsarafath.vercel.app/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [id])

    

  return (
    <div className="">
    
  
  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[100px] container mx-auto p-3 px-6 ">
        <div className="text-d">
          <div className="w-[300px] h-[300px]"> 
          <img
            src={docs.img}
            className="flex-shrink-0  h-[96%] w-[100%] mx-14 object-cover"
          ></img>
          </div>
         
          <h1 className="font-bold text-primary ml-20 mt-5 text-3xl">
            {docs.name}
          </h1>
          <ul className="list-t">
            <li className="text-t ml-24">
              <b>Rating:</b> {docs.rating}
            </li>
            <li className="text-t ml-24">
              <b>Total Reviews:</b> {docs.review}
            </li>
            <li className="text-t ml-24">
              <b>Price:</b> {docs.price}
            </li> 
          </ul>
        </div>
        <div className="mt-[30px] md:mt-0">
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Tour Details:
            </h1>
            <p>{docs.discription}</p>
          </div>
          <br></br>
          <div>
            <h1 className=" text-xl text-blue-700">
              Add Your Valuable Review: 
            </h1>
           <form onSubmit={handleAddService} className="w-11/12 md:w-9/12 mx-auto">
                        <div className="my-5">
                            <label htmlFor="name" className="block  text-accent  font-bold mb-2">Service Name</label>
                            {
                                  user ? <div>
                                  <input type="text" name="displayname" id="displayname" className="shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Your Name" required  />

                            <input type="text" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-accent leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Review" required />

                            <div className="my-5">
                            <button className="px-3 py-2 bg-gray-400 text-white rounded-xl">Add Review</button>
                            </div>
                                  </div>
                                  :
                                  <div>
                                    Please login to add a review......
                                    <Link to="/login">
                                    <button className="px-3 py-2 bg-gray-400 text-white rounded-xl">Login</button>
                                    </Link>
                                  </div>

                                  
                            }
                            
                        </div>
                        
                    </form>
<h1 className='text-lg font-bold text-secondary mt-5'>All Reviews:</h1>



<div className="card w-96 bg-base-200 shadow-xl">
      {
                reviews.map((tool, index) => (
                    <div className="card-body">
                      <div className="grid lg:grid-cols-2 sm:gri-cols-1">
                          <h1 className="text-blue-500 font-bold text-sm">{tool.displayname}</h1>
                          <small className="text-green-500">{tool.reviewDate}</small>
                          <p className="">{tool.name}</p>
                      </div>
    
                      <div className="card-actions justify-end">
      
                      </div>
                    </div>
                ))
              }
 
</div>




          </div>
          <br></br>
          <div>

<br></br>
<br></br>
<br></br>

            
          
          </div>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  );
};
export default ServiceDetails;