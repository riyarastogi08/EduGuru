import React, {useState, useEffect} from 'react'

const PlaywayListing = () => {
    const [playways, setPlayways] = useState([])

    const fetchPlayways = async () => {
        const res = await fetch('http://localhost:5000/playway/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setPlayways(data)
        }
    }
    useEffect(() => {
        fetchPlayways()
    }, []);

    const displayPlayways = () =>{
        return playways.map((item) => (
            <div className="container ">
                <div className="col-md-4">
                    <div className="card p-3 mb-5 bg-dark">
                    <h3 className='mt-3 text-light'>{item.name}</h3>
                    <h3 className='mt-3 text-light'>{item.email}</h3>
                    <p className='mt-3 text-light'>{item.address}</p>
                   
                    <h5 className='mt-3 text-light'>{item.phNo}</h5>
                    <h5 className='mt-3 text-light'>{item.fees}</h5>
                    </div>
                </div>
            </div>
        ))
    }
  return (
    <div>
        <header className='bg-body-tertiary'>
            <div className="container py-5">
                <p className='text-center fw-bold'>All Playways</p>
                <input type='text' placeholder='Search Playways' className='form-control w-75 m-auto' />
            </div>
        </header>

        <div className="container mt-5">
            <div className="row mt-5 p-5">
                {displayPlayways()}
            </div>
        </div>
    </div>
  )
}

export default PlaywayListing