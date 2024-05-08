import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewCollege = () => {
    const {id} = useParams();
    const [college, setCollege] = useState({});

    const fetchCollege = async () => {
        const res = await fetch("http://localhost:5000/Colleg/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setCollege(data);
        };
        useEffect(() => {
            fetchCollege();
        }, []);
    }

  return (
    <div>
      <h1>College Details</h1>
      <h2>{college.name}</h2>
      <h3>{college.email}</h3>
      <h3>{college.phone}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewCollege