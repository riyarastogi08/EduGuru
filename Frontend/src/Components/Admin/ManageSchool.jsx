import React, {useState, useEffect}from 'react'

const ManageSchool = () => {
const [Data, setData] = useState([])
    const fetchSchoolData = async () => {
        const res = await fetch ('http:/localhost:5000/school/getall',)
        console.log(res.status)
        if(res.status ===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchSchoolData()
    }, [])


    const displaySchool =() => {
        return Data.map((school) => {
            <tr>
                <td>{school.name}</td>
                <td>{school.email}</td>
                <td>{school.address}</td>
                <td>{school.phNo}</td>
                <td>{school.fees}</td>
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
                <h1>Manage Schools</h1>
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
                    {displaySchool()}
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ManageSchool