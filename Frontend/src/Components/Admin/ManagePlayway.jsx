import { React, useState, useEffect } from 'react'

const ManagePlayway = () => {
  const [Data, setData] = useState([]);
  //User fetch func
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:3000/playway/getall');

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, [])

  //Delete func
  const deleteFunction = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/playway/delete/' + id, { method: 'DELETE' })

    if (res.status === 200) {
      fetchUserData();
    }
  }
  //User Display func
  const displayUsers = () => {
    return Data.map((obj) => (
      <>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  src={'http://localhost:3000/' + obj.image}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900 overflow-auto w-28" >{obj.playwayname}</div>
                
              </div>
             
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              {obj.fees}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {obj.phone}
            </span>
          </td>
       
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="text-sm text-gray-500 w-24 overflow-auto">{obj.playwaydetail}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="text-sm text-gray-500 w-24 overflow-auto">{obj.playwayaddress}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="text-sm text-gray-500">{obj.email}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
            <button onClick={() => {deleteFunction(obj._id)}} className="ml-2 text-red-600 hover:text-red-900">
              Delete
            </button>
          </td>
        </tr>
      </>
    ))
  }


  return (
    <>
      <div className="py-3 px-10 ">
        <p className="text-center py-2 text-2xl font-serif mb-5 bg-blue-900 text-white">College</p>
        <table className="min-w-full shadow  divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
              Playway
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Fees
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {displayUsers()}
            {/* More rows... */}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default ManagePlayway