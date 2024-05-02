import React, {useState, useEffect}from 'react'

const ManagePlayway = () => {
const [Data, setData] = useState([])
    const fetchPlaywayData = async () => {
        const res = await fetch ('http:/localhost:5000/playway/getall',)
        console.log(res.status)
        if(res.status ===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchPlaywayData()
    }, [])


    const displayPlayway =() => {
        return Data.map((playway) => {
            <tr>
                <td>{playway.name}</td>
                <td>{playway.email}</td>
                <td>{playway.address}</td>
                <td>{playway.phNo}</td>
                <td>{playway.fees}</td>
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
                <h1>Manage Playway</h1>
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
                    {displayPlayway()}
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ManagePlayway