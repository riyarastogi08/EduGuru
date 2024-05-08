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
                <td>{playway.playwayname}</td>
                <td>{playway.playwaydetail}</td>
                <td>{playway.playwayaddress}</td>
                <td>{playway.phone}</td>
                <td>{playway.fees}</td>
                <td>{playway.email}</td>
                <td>{playway.image}</td>
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
                        <th>Playway Name</th>
                        <th>Playway Detail</th>
                        <th>Playway Address</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Image</th>
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