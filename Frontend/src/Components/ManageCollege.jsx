import React, {useState, useEffect}from 'react'

const ManageCollege = () => {
const [Data, setData] = useState([])
    const fetchCollegeData = async () => {
        const res = await fetch ('http:/localhost:5000/college/getall',)
        console.log(res.status)
        if(res.status ===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchCollegeData()
    }, [])


    const displayCollege =() => {
        return Data.map((college) => {
            <tr>
                <td>{college.name}</td>
                <td>{college.email}</td>
                <td>{college.address}</td>
                <td>{college.phNo}</td>
                <td>{college.fees}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        })
    }


  return (
    <div className=''>
        <header className='bg-danger mt-5 text-black text-center'>
            <div className='container py-5'>
                <h1>Manage Colleges</h1>
            </div>
        </header>
        <div className='container mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Fees</th>

                    </tr>
                </thead>
                <tbody>
                    {displayCollege()}
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ManageCollege