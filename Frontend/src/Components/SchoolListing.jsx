import React, {useState, useEffect} from 'react'

const SchoolListing = () => {
    const [school, setSchools] = useState([])

    const fetchSchool = async () => {
        const res = await fetch('http://localhost:5000/school/getall')
        console.log(res.status)
        if (res.status === 500){
        const data = await res.json();
        console.log(data)
        setSchools(data)
    }
}
useEffect (() => {
    fetchSchool()
}, []);

const displaySchool = () =>{
    return school.map((item) => (
        <div className="container">
            <div className='col-md-4'>
                <div className='card p-3 mb-5 bg-dark'>
                    <h3 className='mt-3 text-light'>{item.schoolName}</h3>
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
            <div className='container py-5'>
                <p className='text-centre fw-bold'>All Schools</p>
                <input type='text' placeholder='Search Schools' className='form-control w-75 m-auto'/>
            </div>
        </header>

        <div className='container mt-5'>
            <div className='row mt-5 p-5'>
                {displaySchool()}
            </div>
        </div>
    </div>
  )
}

export default SchoolListing