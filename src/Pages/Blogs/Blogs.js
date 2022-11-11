import React from 'react';
import useTilte from "../../Hooks/Title";
import { useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);


    useTilte('Blogs');

    return (
        <div className='container mx-auto my-10'>
            
            <div className='mx-3 md:w-3/4 md:mx-auto border border-gray-700 px-5 py-2 rounded mb-4'>
            <h1>1- Difference between SQL and NoSQL?</h1>
                SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.Apr 13, 2021
            </div>
            <div className='mx-3 md:w-3/4 md:mx-auto border border-gray-700 px-5 py-2 rounded mb-4'>
            <h1>2- What is JWT, and how does it work?</h1>
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
            </div>
            <div className='mx-3 md:w-3/4 md:mx-auto border border-gray-700 px-5 py-2 rounded mb-4'>
            <h1>3- What is the difference between javascript and Node JS?</h1>
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </div>
            <div className='mx-3 md:w-3/4 md:mx-auto border border-gray-700 px-5 py-2 rounded mb-4'>
            <h1>4- How does Node JS handle multiple requests at the same time?</h1>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.


            </div>
        </div>
    );
};

export default Blogs;
