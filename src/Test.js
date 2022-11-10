import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthProvider } from "../../Context/AuthProvider";


const ServiceDetails = () => {
    const { user} = useContext(AuthProvider);
    const {id} = useParams();
    const [docs,setDocs] = useState({})
    // const [disable, setDisable] = useState(false);

     useEffect(()=>{
         fetch(` https://tour-guide-server-jsarafath.vercel.app/services/${id}`)
       .then(res=>res.json())
        .then(data=>setDocs(data))
     },[id])

 const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(' https://tour-guide-server-jsarafath.vercel.app/review',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };

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
            <form onSubmit={handleSubmit(onSubmit)}>
  
  <input {...register("name",)} placeholder="Your Nice Review" className="  w-96 h-20 bg-gray-200 mt-5 mb-5"/>
  <br></br>
  <button className="btn bg-blue-700 w-48">Add Review</button>


</form> 
<h1 className='text-lg font-bold text-secondary mt-5'>All Reviews:</h1>



<div className="card w-96 bg-base-100 shadow-xl">
      {
                reviews.map((tool, index) => (
                     <div className="card-body">
    <div className="grid lg:grid-cols-2 sm:gri-cols-1">
<h2 className="text-blue-500 font-bold text-sm">{user.displayName}</h2>
    <p>{tool.name}</p>
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