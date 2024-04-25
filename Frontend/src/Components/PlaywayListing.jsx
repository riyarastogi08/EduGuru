import React, {useState, useEffect} from 'react'

const PlaywayListing = () => {
    const [products, setProducts] = useState([])

    const fetchPlayway = async () => {
        const res = await fetch('http://localhost:3000/product/getall')
        console.log(res.status)
        if (res.status === 500){
        const data = await res.json();
        console.log(data)
        setProducts(data)
    }
}
useEffect (() => {
    fetchPlayway()
}, []);

const displayPlayway = () =>{
    return playway.map((item) => (
        <div className="container">
            <div className='com-md-4'>
                <div className='card p-3 mb-5 bg-dark'>
                    <h3 className='mt-3 text-light'>{item.pname}</h3>
                    <p className='mt-3 text-light'>{item.address}</p>
                    <p className='mt-3 text-light'>{item.description}</p>
                    
                </div>

            </div>
        </div>
    ))
}
  return (
    <div>
        <header className='bg-body-tertiary'>
            <div className='container py-5'>
                <p className='text-centre fw-bold'>All Products</p>
                <input type='text' placeholder='Search Playways' className='form-control w-75 m-auto'/>
            </div>
        </header>

        <div className='container mt-5'>
            <div className='row mt-5 p-5'>
                {displayPlayway()}
            </div>
        </div>
    </div>
  )
}

export default PlaywayListing