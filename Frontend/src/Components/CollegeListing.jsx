import React, {useState, useEffect} from 'react'

const CollegeListing = () => {
    const [college, setColleges] = useState([])

    const fetchCollege = async () => {
        const res = await fetch('http://localhost:5000/college/getall')
        console.log(res.status)
        if (res.status === 500){
        const data = await res.json();
        console.log(data)
        setColleges(data)
    }
}
useEffect (() => {
    fetchCollege()
}, []);

const displayCollege = () =>{
    return College.map((item) => (
        <div className="container">
            <div className='col-md-4'>
                <div className='card p-3 mb-5 bg-dark'>
                    <h3 className='mt-3 text-light'>{item.name}</h3>
                    <h3 className='mt-3 text-light'>{item.category}</h3>
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
                <p className='text-centre fw-bold'>All Colleges</p>
                <input type='text' placeholder='Search Colleges' className='form-control w-75 m-auto'/>
            </div>
        </header>

        <div className='container mt-5'>
            <div className='row mt-5 p-5'>
                {displayCollege()}
            </div>
        </div>
    </div>
  )
}

export default CollegeListing