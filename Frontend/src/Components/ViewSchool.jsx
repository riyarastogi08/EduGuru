import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewSchool = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/School/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setSchool(data);
        };
        useEffect(() => {
            fetchSchool();
        }, []);
    }

  return (
    <div>
      <h1>School Details</h1>
      <h2>{school.pname}</h2>
      <h3>{school.pprice}</h3>
      <h3>{school.pdescription}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewSchool