import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewPlayway = () => {
    const {id} = useParams();
    const [playway, setPlayway] = useState({});

    const fetchPlayway = async () => {
        const res = await fetch("http://localhost:5000/Playway/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setPlayway(data);
        };
        useEffect(() => {
            fetchPlayway();
        }, []);
    }

  return (
    <div>
      <h1>Playway Details</h1>
      <h2>{playway.name}</h2>
      <h3>{playway.email}</h3>
      <h3>{playway.phone}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewPlayway